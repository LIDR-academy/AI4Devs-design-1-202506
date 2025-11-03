import { CreateJobDto } from './create-job.dto';
export declare enum JobStatus {
    DRAFT = "DRAFT",
    ACTIVE = "ACTIVE",
    PAUSED = "PAUSED",
    CLOSED = "CLOSED"
}
declare const UpdateJobDto_base: import("@nestjs/common").Type<Partial<CreateJobDto>>;
export declare class UpdateJobDto extends UpdateJobDto_base {
    status?: JobStatus;
}
export {};
