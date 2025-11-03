"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteJobCommand = exports.PauseJobCommand = exports.PublishJobCommand = exports.UpdateJobCommand = exports.CreateJobCommand = void 0;
class CreateJobCommand {
    constructor(title, description, requirements, responsibilities, benefits, location, remoteWork, salaryMin, salaryMax, salaryCurrency, employmentType, experienceLevel, deadline, companyId, tenantId, createdBy) {
        this.title = title;
        this.description = description;
        this.requirements = requirements;
        this.responsibilities = responsibilities;
        this.benefits = benefits;
        this.location = location;
        this.remoteWork = remoteWork;
        this.salaryMin = salaryMin;
        this.salaryMax = salaryMax;
        this.salaryCurrency = salaryCurrency;
        this.employmentType = employmentType;
        this.experienceLevel = experienceLevel;
        this.deadline = deadline;
        this.companyId = companyId;
        this.tenantId = tenantId;
        this.createdBy = createdBy;
    }
}
exports.CreateJobCommand = CreateJobCommand;
class UpdateJobCommand {
    constructor(jobId, tenantId, updates, updatedBy) {
        this.jobId = jobId;
        this.tenantId = tenantId;
        this.updates = updates;
        this.updatedBy = updatedBy;
    }
}
exports.UpdateJobCommand = UpdateJobCommand;
class PublishJobCommand {
    constructor(jobId, tenantId, publishedBy) {
        this.jobId = jobId;
        this.tenantId = tenantId;
        this.publishedBy = publishedBy;
    }
}
exports.PublishJobCommand = PublishJobCommand;
class PauseJobCommand {
    constructor(jobId, tenantId, pausedBy) {
        this.jobId = jobId;
        this.tenantId = tenantId;
        this.pausedBy = pausedBy;
    }
}
exports.PauseJobCommand = PauseJobCommand;
class DeleteJobCommand {
    constructor(jobId, tenantId, deletedBy) {
        this.jobId = jobId;
        this.tenantId = tenantId;
        this.deletedBy = deletedBy;
    }
}
exports.DeleteJobCommand = DeleteJobCommand;
//# sourceMappingURL=job.commands.js.map