import { IQueryHandler } from '@nestjs/cqrs';
import { JobEntity } from '../entities/job.entity';
import { InMemoryJobRepository, JobSearchResult } from '../repositories/in-memory-job.repository';
import { GetJobByIdQuery, GetJobsQuery } from '../queries/job.queries';
export declare class GetJobByIdQueryHandler implements IQueryHandler<GetJobByIdQuery> {
    private readonly jobRepository;
    constructor(jobRepository: InMemoryJobRepository);
    execute(query: GetJobByIdQuery): Promise<JobEntity | null>;
}
export declare class GetJobsQueryHandler implements IQueryHandler<GetJobsQuery> {
    private readonly jobRepository;
    constructor(jobRepository: InMemoryJobRepository);
    execute(query: GetJobsQuery): Promise<JobSearchResult>;
}
