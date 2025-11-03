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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const cqrs_1 = require("@nestjs/cqrs");
const throttler_1 = require("@nestjs/throttler");
let ApplicationsController = class ApplicationsController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async createApplication(createApplicationDto) {
        return {
            success: true,
            message: 'Application creation endpoint - Coming soon',
            data: createApplicationDto
        };
    }
    async getApplications(query) {
        return {
            success: true,
            message: 'Get applications endpoint - Coming soon',
            data: {
                applications: [],
                total: 0,
                page: 1,
                limit: 10
            }
        };
    }
    async getApplication(id) {
        return {
            success: true,
            message: 'Get application endpoint - Coming soon',
            data: { id }
        };
    }
    async updateApplicationStatus(id, statusDto) {
        return {
            success: true,
            message: 'Update application status endpoint - Coming soon',
            data: { id, ...statusDto }
        };
    }
    async startScreening(id) {
        return {
            success: true,
            message: 'Start screening endpoint - Coming soon',
            data: { id, screening: 'initiated' }
        };
    }
    async scheduleInterview(id, interviewDto) {
        return {
            success: true,
            message: 'Schedule interview endpoint - Coming soon',
            data: { id, ...interviewDto }
        };
    }
};
exports.ApplicationsController = ApplicationsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiOperation)({ summary: 'Submit a job application' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Application submitted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid input data' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApplicationsController.prototype, "createApplication", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get applications with filtering and pagination' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of applications retrieved successfully' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApplicationsController.prototype, "getApplications", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a specific application by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Application ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Application retrieved successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Application not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApplicationsController.prototype, "getApplication", null);
__decorate([
    (0, common_1.Put)(':id/status'),
    (0, swagger_1.ApiOperation)({ summary: 'Update application status' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Application ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Application status updated successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ApplicationsController.prototype, "updateApplicationStatus", null);
__decorate([
    (0, common_1.Post)(':id/screen'),
    (0, swagger_1.ApiOperation)({ summary: 'Start screening process for application' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Application ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Screening started successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApplicationsController.prototype, "startScreening", null);
__decorate([
    (0, common_1.Post)(':id/interview'),
    (0, swagger_1.ApiOperation)({ summary: 'Schedule an interview for application' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Application ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Interview scheduled successfully' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ApplicationsController.prototype, "scheduleInterview", null);
exports.ApplicationsController = ApplicationsController = __decorate([
    (0, swagger_1.ApiTags)('applications'),
    (0, common_1.Controller)('applications'),
    (0, common_1.UseGuards)(throttler_1.ThrottlerGuard),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], ApplicationsController);
//# sourceMappingURL=applications.controller.js.map