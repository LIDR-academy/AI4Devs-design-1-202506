"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJobsQuery = exports.GetJobByIdQuery = void 0;
class GetJobByIdQuery {
    constructor(jobId, tenantId) {
        this.jobId = jobId;
        this.tenantId = tenantId;
    }
}
exports.GetJobByIdQuery = GetJobByIdQuery;
class GetJobsQuery {
    constructor(tenantId, filters = {}, pagination = { page: 1, limit: 10 }) {
        this.tenantId = tenantId;
        this.filters = filters;
        this.pagination = pagination;
    }
}
exports.GetJobsQuery = GetJobsQuery;
//# sourceMappingURL=job.queries.js.map