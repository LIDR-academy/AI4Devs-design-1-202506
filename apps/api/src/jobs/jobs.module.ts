import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { JobsController } from './interface/http/jobs.controller';
import { InMemoryJobRepository } from './repositories/in-memory-job.repository';
import {
  CreateJobCommandHandler,
  UpdateJobCommandHandler,
  PublishJobCommandHandler,
  PauseJobCommandHandler,
  DeleteJobCommandHandler
} from './handlers/job.command-handlers';
import {
  GetJobByIdQueryHandler,
  GetJobsQueryHandler
} from './handlers/job.query-handlers';

const CommandHandlers = [
  CreateJobCommandHandler,
  UpdateJobCommandHandler,
  PublishJobCommandHandler,
  PauseJobCommandHandler,
  DeleteJobCommandHandler
];

const QueryHandlers = [
  GetJobByIdQueryHandler,
  GetJobsQueryHandler
];

@Module({
  imports: [CqrsModule],
  controllers: [JobsController],
  providers: [
    InMemoryJobRepository,
    ...CommandHandlers,
    ...QueryHandlers
  ],
  exports: [InMemoryJobRepository],
})
export class JobsModule {}