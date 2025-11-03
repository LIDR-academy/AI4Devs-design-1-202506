import { JobEntity } from '../entities/job.entity';
export interface JobFilters {
    status?: string;
    companyId?: string;
    employmentType?: string;
    experienceLevel?: string;
    location?: string;
    remoteWork?: boolean;
    salaryMin?: number;
    salaryMax?: number;
}
export interface PaginationOptions {
    page: number;
    limit: number;
}
export interface JobSearchResult {
    jobs: JobEntity[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export declare class InMemoryJobRepository {
    private jobs;
    save(job: JobEntity): Promise<void>;
    findById(id: string, tenantId: string): Promise<JobEntity | null>;
    findByFilters(tenantId: string, filters: JobFilters, pagination: PaginationOptions): Promise<JobSearchResult>;
    delete(id: string, tenantId: string): Promise<void>;
    existsById(id: string, tenantId: string): Promise<boolean>;
    clear(): Promise<void>;
    getAllJobs(): Promise<JobEntity[]>;
}
