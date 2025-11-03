import { ICommand } from '@nestjs/cqrs';
export declare class CreateJobCommand implements ICommand {
    readonly title: string;
    readonly description: string;
    readonly requirements: string[];
    readonly responsibilities: string[];
    readonly benefits?: string;
    readonly location?: string;
    readonly remoteWork?: boolean;
    readonly salaryMin?: number;
    readonly salaryMax?: number;
    readonly salaryCurrency?: string;
    readonly employmentType?: string;
    readonly experienceLevel?: string;
    readonly deadline?: Date;
    readonly companyId?: string;
    readonly tenantId?: string;
    readonly createdBy?: string;
    constructor(title: string, description: string, requirements: string[], responsibilities: string[], benefits?: string, location?: string, remoteWork?: boolean, salaryMin?: number, salaryMax?: number, salaryCurrency?: string, employmentType?: string, experienceLevel?: string, deadline?: Date, companyId?: string, tenantId?: string, createdBy?: string);
}
export declare class UpdateJobCommand implements ICommand {
    readonly jobId: string;
    readonly tenantId: string;
    readonly updates: {
        title?: string;
        description?: string;
        requirements?: string[];
        responsibilities?: string[];
        benefits?: string;
        location?: string;
        remoteWork?: boolean;
        salaryMin?: number;
        salaryMax?: number;
        employmentType?: string;
        experienceLevel?: string;
        deadline?: Date;
    };
    readonly updatedBy: string;
    constructor(jobId: string, tenantId: string, updates: {
        title?: string;
        description?: string;
        requirements?: string[];
        responsibilities?: string[];
        benefits?: string;
        location?: string;
        remoteWork?: boolean;
        salaryMin?: number;
        salaryMax?: number;
        employmentType?: string;
        experienceLevel?: string;
        deadline?: Date;
    }, updatedBy: string);
}
export declare class PublishJobCommand implements ICommand {
    readonly jobId: string;
    readonly tenantId: string;
    readonly publishedBy: string;
    constructor(jobId: string, tenantId: string, publishedBy: string);
}
export declare class PauseJobCommand implements ICommand {
    readonly jobId: string;
    readonly tenantId: string;
    readonly pausedBy: string;
    constructor(jobId: string, tenantId: string, pausedBy: string);
}
export declare class DeleteJobCommand implements ICommand {
    readonly jobId: string;
    readonly tenantId: string;
    readonly deletedBy: string;
    constructor(jobId: string, tenantId: string, deletedBy: string);
}
