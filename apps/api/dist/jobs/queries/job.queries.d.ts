import { IQuery } from '@nestjs/cqrs';
export declare class GetJobByIdQuery implements IQuery {
    readonly jobId: string;
    readonly tenantId: string;
    constructor(jobId: string, tenantId: string);
}
export declare class GetJobsQuery implements IQuery {
    readonly tenantId: string;
    readonly filters: {
        status?: string;
        companyId?: string;
        employmentType?: string;
        experienceLevel?: string;
        location?: string;
        remoteWork?: boolean;
        salaryMin?: number;
        salaryMax?: number;
    };
    readonly pagination: {
        page: number;
        limit: number;
    };
    constructor(tenantId: string, filters?: {
        status?: string;
        companyId?: string;
        employmentType?: string;
        experienceLevel?: string;
        location?: string;
        remoteWork?: boolean;
        salaryMin?: number;
        salaryMax?: number;
    }, pagination?: {
        page: number;
        limit: number;
    });
}
