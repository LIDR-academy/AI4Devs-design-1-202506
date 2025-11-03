import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateJobDto } from '../dto/create-job.dto';
import { UpdateJobDto } from '../dto/update-job.dto';
import { GetJobsQueryDto } from '../dto/get-jobs-query.dto';
export declare class JobsController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    createJob(createJobDto: CreateJobDto): Promise<{
        success: boolean;
        message: string;
        data: {
            id: any;
        };
    } | {
        success: boolean;
        message: any;
        data: any;
    }>;
    getJobs(query: GetJobsQueryDto): Promise<{
        success: boolean;
        message: string;
        data: {
            jobs: any;
            total: any;
            page: any;
            limit: any;
            totalPages: any;
        };
    } | {
        success: boolean;
        message: any;
        data: any;
    }>;
    getJob(id: string): Promise<{
        success: boolean;
        message: string;
        data: any;
    } | {
        success: boolean;
        message: any;
        data: any;
    }>;
    updateJob(id: string, updateJobDto: UpdateJobDto): Promise<{
        success: boolean;
        message: string;
        data: {
            status?: import("../dto/update-job.dto").JobStatus;
            title?: string;
            description?: string;
            requirements?: string[];
            responsibilities?: string[];
            benefits?: string;
            location?: string;
            remoteWork?: boolean;
            salaryMin?: number;
            salaryMax?: number;
            salaryCurrency?: string;
            employmentType?: import("../dto/create-job.dto").EmploymentType;
            experienceLevel?: import("../dto/create-job.dto").ExperienceLevel;
            deadline?: string;
            companyId?: string;
            id: string;
        };
    }>;
    deleteJob(id: string): Promise<void>;
    publishJob(id: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            status: string;
        };
    } | {
        success: boolean;
        message: any;
        data: any;
    }>;
    pauseJob(id: string): Promise<{
        success: boolean;
        message: string;
        data: {
            id: string;
            status: string;
        };
    } | {
        success: boolean;
        message: any;
        data: any;
    }>;
}
