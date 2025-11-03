import { IQuery } from '@nestjs/cqrs';

export class GetJobByIdQuery implements IQuery {
  constructor(
    public readonly jobId: string,
    public readonly tenantId: string
  ) {}
}

export class GetJobsQuery implements IQuery {
  constructor(
    public readonly tenantId: string,
    public readonly filters: {
      status?: string;
      companyId?: string;
      employmentType?: string;
      experienceLevel?: string;
      location?: string;
      remoteWork?: boolean;
      salaryMin?: number;
      salaryMax?: number;
    } = {},
    public readonly pagination: {
      page: number;
      limit: number;
    } = { page: 1, limit: 10 }
  ) {}
}