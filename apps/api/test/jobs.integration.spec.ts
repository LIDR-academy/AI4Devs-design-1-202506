import { Test, TestingModule } from '@nestjs/testing';
import { CqrsModule } from '@nestjs/cqrs';
import { JobsController } from '../src/jobs/interface/http/jobs.controller';
import { InMemoryJobRepository } from '../src/jobs/repositories/in-memory-job.repository';
import {
  CreateJobCommandHandler,
  UpdateJobCommandHandler,
  PublishJobCommandHandler,
  PauseJobCommandHandler,
  DeleteJobCommandHandler
} from '../src/jobs/handlers/job.command-handlers';
import {
  GetJobByIdQueryHandler,
  GetJobsQueryHandler
} from '../src/jobs/handlers/job.query-handlers';
import { CreateJobDto } from '../src/jobs/interface/dto/create-job.dto';

describe('JobsController (Integration)', () => {
  let app: TestingModule;
  let controller: JobsController;
  let repository: InMemoryJobRepository;

  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [CqrsModule],
      controllers: [JobsController],
      providers: [
        InMemoryJobRepository,
        CreateJobCommandHandler,
        UpdateJobCommandHandler,
        PublishJobCommandHandler,
        PauseJobCommandHandler,
        DeleteJobCommandHandler,
        GetJobByIdQueryHandler,
        GetJobsQueryHandler
      ],
    }).compile();

    controller = app.get<JobsController>(JobsController);
    repository = app.get<InMemoryJobRepository>(InMemoryJobRepository);

    // Clear repository before each test
    await repository.clear();
  });

  afterEach(async () => {
    await app.close();
  });

  describe('createJob', () => {
    it('should create a new job successfully', async () => {
      const createJobDto: any = {
        title: 'Senior Software Engineer',
        description: 'We are looking for a senior software engineer...',
        requirements: ['5+ years of experience', 'TypeScript', 'Node.js'],
        responsibilities: ['Lead development team', 'Code reviews'],
        benefits: 'Health insurance, remote work',
        location: 'Madrid, Spain',
        remoteWork: true,
        salaryMin: 50000,
        salaryMax: 70000,
        salaryCurrency: 'EUR',
        employmentType: 'FULL_TIME',
        experienceLevel: 'SENIOR',
        deadline: '2024-12-31',
        companyId: 'company-123'
      };

      const result = await controller.createJob(createJobDto);

      expect(result.success).toBe(true);
      expect(result.message).toBe('Job created successfully');
      expect(result.data.id).toBeDefined();
    });

    it('should handle missing required fields gracefully', async () => {
      const incompleteDto = {
        title: 'Job Title'
        // Missing required fields
      } as CreateJobDto;

      const result = await controller.createJob(incompleteDto);

      // Since we're not using validation pipes in this test, 
      // the command should still be created with default values
      expect(result.success).toBe(true);
    });
  });

  describe('getJobs', () => {
    it('should return empty list when no jobs exist', async () => {
      const result = await controller.getJobs({});

      expect(result.success).toBe(true);
      expect(result.data.jobs).toEqual([]);
      expect(result.data.total).toBe(0);
    });

    it('should return jobs with pagination', async () => {
      // Create a test job first
      const createJobDto: CreateJobDto = {
        title: 'Test Job',
        description: 'Test Description',
        requirements: ['Test requirement'],
        responsibilities: ['Test responsibility'],
        employmentType: 'FULL_TIME',
        experienceLevel: 'MID'
      };

      await controller.createJob(createJobDto);

      const result = await controller.getJobs({ page: 1, limit: 10 });

      expect(result.success).toBe(true);
      expect(result.data.jobs.length).toBe(1);
      expect(result.data.total).toBe(1);
      expect(result.data.page).toBe(1);
      expect(result.data.limit).toBe(10);
    });
  });

  describe('getJob', () => {
    it('should return job by id', async () => {
      // Create a test job first
      const createResult = await controller.createJob({
        title: 'Test Job',
        description: 'Test Description',
        requirements: ['Test'],
        responsibilities: ['Test'],
        employmentType: 'FULL_TIME',
        experienceLevel: 'MID'
      } as CreateJobDto);

      const jobId = createResult.data.id;
      const result = await controller.getJob(jobId);

      expect(result.success).toBe(true);
      expect(result.data.id).toBe(jobId);
      expect(result.data.title).toBe('Test Job');
    });

    it('should return error for non-existent job', async () => {
      const result = await controller.getJob('non-existent-id');

      expect(result.success).toBe(false);
      expect(result.message).toBe('Job not found');
    });
  });

  describe('publishJob', () => {
    it('should publish a draft job successfully', async () => {
      // Create a test job first
      const createResult = await controller.createJob({
        title: 'Test Job',
        description: 'Test Description',
        requirements: ['Test'],
        responsibilities: ['Test'],
        employmentType: 'FULL_TIME',
        experienceLevel: 'MID'
      } as CreateJobDto);

      const jobId = createResult.data.id;
      const result = await controller.publishJob(jobId);

      expect(result.success).toBe(true);
      expect(result.message).toBe('Job published successfully');
      expect(result.data.status).toBe('ACTIVE');
    });
  });

  describe('pauseJob', () => {
    it('should pause an active job successfully', async () => {
      // Create and publish a job first
      const createResult = await controller.createJob({
        title: 'Test Job',
        description: 'Test Description',
        requirements: ['Test'],
        responsibilities: ['Test'],
        employmentType: 'FULL_TIME',
        experienceLevel: 'MID'
      } as CreateJobDto);

      const jobId = createResult.data.id;
      await controller.publishJob(jobId);
      
      const result = await controller.pauseJob(jobId);

      expect(result.success).toBe(true);
      expect(result.message).toBe('Job paused successfully');
      expect(result.data.status).toBe('PAUSED');
    });
  });
});