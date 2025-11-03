"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cqrs_1 = require("@nestjs/cqrs");
const throttler_1 = require("@nestjs/throttler");
const create_job_dto_1 = require("../dto/create-job.dto");
const update_job_dto_1 = require("../dto/update-job.dto");
const get_jobs_query_dto_1 = require("../dto/get-jobs-query.dto");
const job_commands_1 = require("../../commands/job.commands");
const job_queries_1 = require("../../queries/job.queries");
let JobsController = class JobsController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async createJob(createJobDto) {
        try {
            const command = new job_commands_1.CreateJobCommand(createJobDto.title, createJobDto.description, createJobDto.requirements || [], createJobDto.responsibilities || [], createJobDto.benefits, createJobDto.location, createJobDto.remoteWork, createJobDto.salaryMin, createJobDto.salaryMax, createJobDto.salaryCurrency, createJobDto.employmentType, createJobDto.experienceLevel, createJobDto.deadline ? new Date(createJobDto.deadline) : undefined, createJobDto.companyId, 'default-tenant', 'current-user');
            const jobId = await this.commandBus.execute(command);
            return {
                success: true,
                message: 'Job created successfully',
                data: { id: jobId }
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message,
                data: null
            };
        }
    }
    async getJobs(query) {
        try {
            const getJobsQuery = new job_queries_1.GetJobsQuery('default-tenant', {
                status: query.status,
                companyId: query.company,
                location: query.location,
                remoteWork: query.remoteWork
            }, {
                page: query.page || 1,
                limit: query.limit || 10
            });
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
        }
        catch (error) {
            return {
                success: false,
                message: error.message,
                data: null
            };
        }
    }
    async getJob(id) {
        try {
            const query = new job_queries_1.GetJobByIdQuery(id, 'default-tenant');
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
        }
        catch (error) {
            return {
                success: false,
                message: error.message,
                data: null
            };
        }
    }
    async updateJob(id, updateJobDto) {
        return {
            success: true,
            message: 'Job update endpoint - Coming soon',
            data: { id, ...updateJobDto }
        };
    }
    async deleteJob(id) {
        return;
    }
    async publishJob(id) {
        try {
            const command = new job_commands_1.PublishJobCommand(id, 'default-tenant', 'current-user');
            await this.commandBus.execute(command);
            return {
                success: true,
                message: 'Job published successfully',
                data: { id, status: 'ACTIVE' }
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message,
                data: null
            };
        }
    }
    async pauseJob(id) {
        try {
            const command = new job_commands_1.PauseJobCommand(id, 'default-tenant', 'current-user');
            await this.commandBus.execute(command);
            return {
                success: true,
                message: 'Job paused successfully',
                data: { id, status: 'PAUSED' }
            };
        }
        catch (error) {
            return {
                success: false,
                message: error.message,
                data: null
            };
        }
    }
};
exports.JobsController = JobsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new job posting' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Job created successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_job_dto_1.CreateJobDto]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "createJob", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all jobs with filtering and pagination' }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'limit', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'status', required: false, enum: ['DRAFT', 'ACTIVE', 'PAUSED', 'CLOSED'] }),
    (0, swagger_1.ApiQuery)({ name: 'company', required: false, type: String }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of jobs retrieved successfully' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_jobs_query_dto_1.GetJobsQueryDto]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "getJobs", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific job by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Job ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Job retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Job not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "getJob", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a job posting' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Job ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Job updated successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Job not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_job_dto_1.UpdateJobDto]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "updateJob", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a job posting' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Job ID' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Job deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Job not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "deleteJob", null);
__decorate([
    (0, common_1.Post)(':id/publish'),
    (0, swagger_1.ApiOperation)({ summary: 'Publish a job (change status to ACTIVE)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Job ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Job published successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "publishJob", null);
__decorate([
    (0, common_1.Post)(':id/pause'),
    (0, swagger_1.ApiOperation)({ summary: 'Pause a job (change status to PAUSED)' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Job ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Job paused successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], JobsController.prototype, "pauseJob", null);
exports.JobsController = JobsController = __decorate([
    (0, swagger_1.ApiTags)('jobs'),
    (0, common_1.Controller)('jobs'),
    (0, common_1.UseGuards)(throttler_1.ThrottlerGuard),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], JobsController);
//# sourceMappingURL=jobs.controller.js.map