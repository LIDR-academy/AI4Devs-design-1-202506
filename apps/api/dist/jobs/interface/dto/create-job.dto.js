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
exports.CreateJobDto = exports.ExperienceLevel = exports.EmploymentType = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
var EmploymentType;
(function (EmploymentType) {
    EmploymentType["FULL_TIME"] = "FULL_TIME";
    EmploymentType["PART_TIME"] = "PART_TIME";
    EmploymentType["CONTRACT"] = "CONTRACT";
    EmploymentType["INTERNSHIP"] = "INTERNSHIP";
})(EmploymentType || (exports.EmploymentType = EmploymentType = {}));
var ExperienceLevel;
(function (ExperienceLevel) {
    ExperienceLevel["JUNIOR"] = "JUNIOR";
    ExperienceLevel["MID"] = "MID";
    ExperienceLevel["SENIOR"] = "SENIOR";
    ExperienceLevel["LEAD"] = "LEAD";
})(ExperienceLevel || (exports.ExperienceLevel = ExperienceLevel = {}));
class CreateJobDto {
}
exports.CreateJobDto = CreateJobDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Job title',
        example: 'Senior Full-Stack Developer'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.MaxLength)(100),
    __metadata("design:type", String)
], CreateJobDto.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Detailed job description',
        example: 'We are looking for a talented developer to join our team...'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(50),
    __metadata("design:type", String)
], CreateJobDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of job requirements',
        example: ['3+ years of React experience', 'Node.js knowledge', 'TypeScript']
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateJobDto.prototype, "requirements", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'List of job responsibilities',
        example: ['Develop new features', 'Code reviews', 'Mentor junior developers']
    }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CreateJobDto.prototype, "responsibilities", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Benefits offered',
        required: false,
        example: 'Health insurance, flexible hours, remote work options'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateJobDto.prototype, "benefits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Job location',
        required: false,
        example: 'Madrid, Spain'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateJobDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Remote work availability',
        example: true
    }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateJobDto.prototype, "remoteWork", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Minimum salary',
        required: false,
        example: 45000
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], CreateJobDto.prototype, "salaryMin", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Maximum salary',
        required: false,
        example: 65000
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDecimal)(),
    __metadata("design:type", Number)
], CreateJobDto.prototype, "salaryMax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Salary currency',
        required: false,
        example: 'EUR'
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateJobDto.prototype, "salaryCurrency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Employment type',
        enum: EmploymentType,
        example: EmploymentType.FULL_TIME
    }),
    (0, class_validator_1.IsEnum)(EmploymentType),
    __metadata("design:type", String)
], CreateJobDto.prototype, "employmentType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Required experience level',
        enum: ExperienceLevel,
        example: ExperienceLevel.SENIOR
    }),
    (0, class_validator_1.IsEnum)(ExperienceLevel),
    __metadata("design:type", String)
], CreateJobDto.prototype, "experienceLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Application deadline',
        required: false,
        example: '2024-12-31T23:59:59Z'
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateJobDto.prototype, "deadline", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Company ID',
        example: 'cuid123abc'
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateJobDto.prototype, "companyId", void 0);
//# sourceMappingURL=create-job.dto.js.map