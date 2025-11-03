import { JobStatus } from './update-job.dto';
export declare class GetJobsQueryDto {
    page?: number;
    limit?: number;
    status?: JobStatus;
    company?: string;
    search?: string;
    location?: string;
    remoteWork?: boolean;
}
