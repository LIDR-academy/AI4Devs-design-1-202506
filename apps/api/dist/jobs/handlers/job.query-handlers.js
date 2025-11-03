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
exports.GetJobsQueryHandler = exports.GetJobByIdQueryHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const common_1 = require("@nestjs/common");
const in_memory_job_repository_1 = require("../repositories/in-memory-job.repository");
const job_queries_1 = require("../queries/job.queries");
let GetJobByIdQueryHandler = class GetJobByIdQueryHandler {
    constructor(jobRepository) {
        this.jobRepository = jobRepository;
    }
    async execute(query) {
        return this.jobRepository.findById(query.jobId, query.tenantId);
    }
};
exports.GetJobByIdQueryHandler = GetJobByIdQueryHandler;
exports.GetJobByIdQueryHandler = GetJobByIdQueryHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.QueryHandler)(job_queries_1.GetJobByIdQuery),
    __metadata("design:paramtypes", [in_memory_job_repository_1.InMemoryJobRepository])
], GetJobByIdQueryHandler);
let GetJobsQueryHandler = class GetJobsQueryHandler {
    constructor(jobRepository) {
        this.jobRepository = jobRepository;
    }
    async execute(query) {
        return this.jobRepository.findByFilters(query.tenantId, query.filters, query.pagination);
    }
};
exports.GetJobsQueryHandler = GetJobsQueryHandler;
exports.GetJobsQueryHandler = GetJobsQueryHandler = __decorate([
    (0, common_1.Injectable)(),
    (0, cqrs_1.QueryHandler)(job_queries_1.GetJobsQuery),
    __metadata("design:paramtypes", [in_memory_job_repository_1.InMemoryJobRepository])
], GetJobsQueryHandler);
//# sourceMappingURL=job.query-handlers.js.map