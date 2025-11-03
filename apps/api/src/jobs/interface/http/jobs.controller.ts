import { 
  Controller, 
  Get, 
  Post, 
  Put, 
  Delete, 
  Body, 
  Param, 
  Query,
  HttpCode,
  HttpStatus,
  UseGuards
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiQuery } from '@nestjs/swagger';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ThrottlerGuard } from '@nestjs/throttler';

// DTOs
import { CreateJobDto } from '../dto/create-job.dto';
import { UpdateJobDto } from '../dto/update-job.dto';
import { GetJobsQueryDto } from '../dto/get-jobs-query.dto';

// Commands and Queries
import { 
  CreateJobCommand,
  UpdateJobCommand,
  PublishJobCommand,
  PauseJobCommand,
  DeleteJobCommand
} from '../../commands/job.commands';
import { 
  GetJobByIdQuery,
  GetJobsQuery
} from '../../queries/job.queries';

@ApiTags('jobs')
@Controller('jobs')
@UseGuards(ThrottlerGuard)
export class JobsController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new job posting' })
  @ApiResponse({ status: 201, description: 'Job created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async createJob(@Body() createJobDto: CreateJobDto) {
    try {
      const command = new CreateJobCommand(
        createJobDto.title,
        createJobDto.description,
        createJobDto.requirements || [],
        createJobDto.responsibilities || [],
        createJobDto.benefits,
        createJobDto.location,
        createJobDto.remoteWork,
        createJobDto.salaryMin,
        createJobDto.salaryMax,
        createJobDto.salaryCurrency,
        createJobDto.employmentType,
        createJobDto.experienceLevel,
        createJobDto.deadline ? new Date(createJobDto.deadline) : undefined,
        createJobDto.companyId,
        'default-tenant', // TODO: Get from authenticated user
        'current-user' // TODO: Get from authenticated user
      );

      const jobId = await this.commandBus.execute(command);

      return {
        success: true,
        message: 'Job created successfully',
        data: { id: jobId }
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null
      };
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all jobs with filtering and pagination' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'status', required: false, enum: ['DRAFT', 'ACTIVE', 'PAUSED', 'CLOSED'] })
  @ApiQuery({ name: 'company', required: false, type: String })
  @ApiResponse({ status: 200, description: 'List of jobs retrieved successfully' })
  async getJobs(@Query() query: GetJobsQueryDto) {
    try {
      const getJobsQuery = new GetJobsQuery(
        'default-tenant', // TODO: Get from authenticated user
        {
          status: query.status,
          companyId: query.company,
          location: query.location,
          remoteWork: query.remoteWork
        },
        {
          page: query.page || 1,
          limit: query.limit || 10
        }
      );

      const result = await this.queryBus.execute(getJobsQuery);

      return {
        success: true,
        message: 'Jobs retrieved successfully',
        data: {
          jobs: result.jobs.map(job => job.toJSON()),
          total: result.total,
          page: result.page,
          limit: result.limit,
          totalPages: result.totalPages
        }
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null
      };
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific job by ID' })
  @ApiParam({ name: 'id', description: 'Job ID' })
  @ApiResponse({ status: 200, description: 'Job retrieved successfully' })
  @ApiResponse({ status: 404, description: 'Job not found' })
  async getJob(@Param('id') id: string) {
    try {
      const query = new GetJobByIdQuery(id, 'default-tenant');
      const job = await this.queryBus.execute(query);

      if (!job) {
        return {
          success: false,
          message: 'Job not found',
          data: null
        };
      }

      return {
        success: true,
        message: 'Job retrieved successfully',
        data: job.toJSON()
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null
      };
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a job posting' })
  @ApiParam({ name: 'id', description: 'Job ID' })
  @ApiResponse({ status: 200, description: 'Job updated successfully' })
  @ApiResponse({ status: 404, description: 'Job not found' })
  async updateJob(
    @Param('id') id: string,
    @Body() updateJobDto: UpdateJobDto
  ) {
    // TODO: Implement command
    return {
      success: true,
      message: 'Job update endpoint - Coming soon',
      data: { id, ...updateJobDto }
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Delete a job posting' })
  @ApiParam({ name: 'id', description: 'Job ID' })
  @ApiResponse({ status: 204, description: 'Job deleted successfully' })
  @ApiResponse({ status: 404, description: 'Job not found' })
  async deleteJob(@Param('id') id: string) {
    // TODO: Implement command
    return;
  }

  @Post(':id/publish')
  @ApiOperation({ summary: 'Publish a job (change status to ACTIVE)' })
  @ApiParam({ name: 'id', description: 'Job ID' })
  @ApiResponse({ status: 200, description: 'Job published successfully' })
  async publishJob(@Param('id') id: string) {
    try {
      const command = new PublishJobCommand(id, 'default-tenant', 'current-user');
      await this.commandBus.execute(command);

      return {
        success: true,
        message: 'Job published successfully',
        data: { id, status: 'ACTIVE' }
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null
      };
    }
  }

  @Post(':id/pause')
  @ApiOperation({ summary: 'Pause a job (change status to PAUSED)' })
  @ApiParam({ name: 'id', description: 'Job ID' })
  @ApiResponse({ status: 200, description: 'Job paused successfully' })
  async pauseJob(@Param('id') id: string) {
    try {
      const command = new PauseJobCommand(id, 'default-tenant', 'current-user');
      await this.commandBus.execute(command);

      return {
        success: true,
        message: 'Job paused successfully',
        data: { id, status: 'PAUSED' }
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
        data: null
      };
    }
  }
}