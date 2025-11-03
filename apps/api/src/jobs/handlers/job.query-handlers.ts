import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { JobEntity } from '../entities/job.entity';
import { InMemoryJobRepository, JobSearchResult } from '../repositories/in-memory-job.repository';
import { GetJobByIdQuery, GetJobsQuery } from '../queries/job.queries';

@Injectable()
@QueryHandler(GetJobByIdQuery)
export class GetJobByIdQueryHandler implements IQueryHandler<GetJobByIdQuery> {
  constructor(private readonly jobRepository: InMemoryJobRepository) {}

  async execute(query: GetJobByIdQuery): Promise<JobEntity | null> {
    return this.jobRepository.findById(query.jobId, query.tenantId);
  }
}

@Injectable()
@QueryHandler(GetJobsQuery)
export class GetJobsQueryHandler implements IQueryHandler<GetJobsQuery> {
  constructor(private readonly jobRepository: InMemoryJobRepository) {}

  async execute(query: GetJobsQuery): Promise<JobSearchResult> {
    return this.jobRepository.findByFilters(
      query.tenantId,
      query.filters,
      query.pagination
    );
  }
}