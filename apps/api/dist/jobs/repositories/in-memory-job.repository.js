"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryJobRepository = void 0;
const common_1 = require("@nestjs/common");
let InMemoryJobRepository = class InMemoryJobRepository {
    constructor() {
        this.jobs = new Map();
    }
    async save(job) {
        this.jobs.set(job.id, job);
    }
    async findById(id, tenantId) {
        const job = this.jobs.get(id);
        if (!job || job.props.tenantId !== tenantId) {
            return null;
        }
        return job;
    }
    async findByFilters(tenantId, filters, pagination) {
        let filteredJobs = Array.from(this.jobs.values())
            .filter(job => job.props.tenantId === tenantId);
        if (filters.status) {
            filteredJobs = filteredJobs.filter(job => job.props.status === filters.status);
        }
        if (filters.companyId) {
            filteredJobs = filteredJobs.filter(job => job.props.companyId === filters.companyId);
        }
        if (filters.employmentType) {
            filteredJobs = filteredJobs.filter(job => job.props.employmentType === filters.employmentType);
        }
        if (filters.experienceLevel) {
            filteredJobs = filteredJobs.filter(job => job.props.experienceLevel === filters.experienceLevel);
        }
        if (filters.location) {
            filteredJobs = filteredJobs.filter(job => job.props.location?.toLowerCase().includes(filters.location.toLowerCase()));
        }
        if (filters.remoteWork !== undefined) {
            filteredJobs = filteredJobs.filter(job => job.props.remoteWork === filters.remoteWork);
        }
        if (filters.salaryMin) {
            filteredJobs = filteredJobs.filter(job => job.props.salaryMin && job.props.salaryMin >= filters.salaryMin);
        }
        if (filters.salaryMax) {
            filteredJobs = filteredJobs.filter(job => job.props.salaryMax && job.props.salaryMax <= filters.salaryMax);
        }
        const total = filteredJobs.length;
        const totalPages = Math.ceil(total / pagination.limit);
        const startIndex = (pagination.page - 1) * pagination.limit;
        const paginatedJobs = filteredJobs.slice(startIndex, startIndex + pagination.limit);
        return {
            jobs: paginatedJobs,
            total,
            page: pagination.page,
            limit: pagination.limit,
            totalPages
        };
    }
    async delete(id, tenantId) {
        const job = this.jobs.get(id);
        if (job && job.props.tenantId === tenantId) {
            this.jobs.delete(id);
        }
    }
    async existsById(id, tenantId) {
        const job = this.jobs.get(id);
        return job ? job.props.tenantId === tenantId : false;
    }
    async clear() {
        this.jobs.clear();
    }
    async getAllJobs() {
        return Array.from(this.jobs.values());
    }
};
exports.InMemoryJobRepository = InMemoryJobRepository;
exports.InMemoryJobRepository = InMemoryJobRepository = __decorate([
    (0, common_1.Injectable)()
], InMemoryJobRepository);
//# sourceMappingURL=in-memory-job.repository.js.map