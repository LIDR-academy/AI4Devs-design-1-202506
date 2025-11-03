"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteJobCommandHandler = exports.PauseJobCommandHandler = exports.PublishJobCommandHandler = exports.UpdateJobCommandHandler = exports.CreateJobCommandHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const job_entity_1 = require("../entities/job.entity");
const in_memory_job_repository_1 = require("../repositories/in-memory-job.repository");
const job_commands_1 = require("../commands/job.commands");
let CreateJobCommandHandler = class CreateJobCommandHandler {
    constructor(jobRepository) {
        this.jobRepository = jobRepository;
    }
    async execute(command) {
        const job = job_entity_1.JobEntity.create({
            title: command.title,
            description: command.description,
            requirements: command.requirements,
            responsibilities: command.responsibilities,
            benefits: command.benefits,
            location: command.location,
            remoteWork: command.remoteWork,
            salaryMin: command.salaryMin,
            salaryMax: command.salaryMax,
            salaryCurrency: command.salaryCurrency,
            employmentType: command.employmentType || 'FULL_TIME',
            experienceLevel: command.experienceLevel || 'MID',
            deadline: command.deadline,
            companyId: command.companyId || 'default-company',
            tenantId: command.tenantId || 'default-tenant',
            createdBy: command.createdBy || 'system'
        });
        await this.jobRepository.save(job);
        return job.id;
    }
};
exports.CreateJobCommandHandler = CreateJobCommandHandler;
exports.CreateJobCommandHandler = CreateJobCommandHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.CommandHandler)(job_commands_1.CreateJobCommand),
    __metadata("design:paramtypes", [in_memory_job_repository_1.InMemoryJobRepository])
], CreateJobCommandHandler);
let UpdateJobCommandHandler = class UpdateJobCommandHandler {
    constructor(jobRepository) {
        this.jobRepository = jobRepository;
    }
    async execute(command) {
        const job = await this.jobRepository.findById(command.jobId, command.tenantId);
        if (!job) {
            throw new Error('Job not found');
        }
        job.update({
            ...command.updates,
            updatedAt: new Date()
        });
        await this.jobRepository.save(job);
    }
};
exports.UpdateJobCommandHandler = UpdateJobCommandHandler;
exports.UpdateJobCommandHandler = UpdateJobCommandHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.CommandHandler)(job_commands_1.UpdateJobCommand),
    __metadata("design:paramtypes", [in_memory_job_repository_1.InMemoryJobRepository])
], UpdateJobCommandHandler);
let PublishJobCommandHandler = class PublishJobCommandHandler {
    constructor(jobRepository) {
        this.jobRepository = jobRepository;
    }
    async execute(command) {
        const job = await this.jobRepository.findById(command.jobId, command.tenantId);
        if (!job) {
            throw new Error('Job not found');
        }
        job.publish();
        await this.jobRepository.save(job);
    }
};
exports.PublishJobCommandHandler = PublishJobCommandHandler;
exports.PublishJobCommandHandler = PublishJobCommandHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.CommandHandler)(job_commands_1.PublishJobCommand),
    __metadata("design:paramtypes", [in_memory_job_repository_1.InMemoryJobRepository])
], PublishJobCommandHandler);
let PauseJobCommandHandler = class PauseJobCommandHandler {
    constructor(jobRepository) {
        this.jobRepository = jobRepository;
    }
    async execute(command) {
        const job = await this.jobRepository.findById(command.jobId, command.tenantId);
        if (!job) {
            throw new Error('Job not found');
        }
        job.pause();
        await this.jobRepository.save(job);
    }
};
exports.PauseJobCommandHandler = PauseJobCommandHandler;
exports.PauseJobCommandHandler = PauseJobCommandHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.CommandHandler)(job_commands_1.PauseJobCommand),
    __metadata("design:paramtypes", [in_memory_job_repository_1.InMemoryJobRepository])
], PauseJobCommandHandler);
let DeleteJobCommandHandler = class DeleteJobCommandHandler {
    constructor(jobRepository) {
        this.jobRepository = jobRepository;
    }
    async execute(command) {
        const exists = await this.jobRepository.existsById(command.jobId, command.tenantId);
        if (!exists) {
            throw new Error('Job not found');
        }
        await this.jobRepository.delete(command.jobId, command.tenantId);
    }
};
exports.DeleteJobCommandHandler = DeleteJobCommandHandler;
exports.DeleteJobCommandHandler = DeleteJobCommandHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.CommandHandler)(job_commands_1.DeleteJobCommand),
    __metadata("design:paramtypes", [in_memory_job_repository_1.InMemoryJobRepository])
], DeleteJobCommandHandler);
//# sourceMappingURL=job.command-handlers.js.map