"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsModule = void 0;
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const jobs_controller_1 = require("./interface/http/jobs.controller");
const in_memory_job_repository_1 = require("./repositories/in-memory-job.repository");
const job_command_handlers_1 = require("./handlers/job.command-handlers");
const job_query_handlers_1 = require("./handlers/job.query-handlers");
const CommandHandlers = [
    job_command_handlers_1.CreateJobCommandHandler,
    job_command_handlers_1.UpdateJobCommandHandler,
    job_command_handlers_1.PublishJobCommandHandler,
    job_command_handlers_1.PauseJobCommandHandler,
    job_command_handlers_1.DeleteJobCommandHandler
];
const QueryHandlers = [
    job_query_handlers_1.GetJobByIdQueryHandler,
    job_query_handlers_1.GetJobsQueryHandler
];
let JobsModule = class JobsModule {
};
exports.JobsModule = JobsModule;
exports.JobsModule = JobsModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule],
        controllers: [jobs_controller_1.JobsController],
        providers: [
            in_memory_job_repository_1.InMemoryJobRepository,
            ...CommandHandlers,
            ...QueryHandlers
        ],
        exports: [in_memory_job_repository_1.InMemoryJobRepository],
    })
], JobsModule);
//# sourceMappingURL=jobs.module.js.map