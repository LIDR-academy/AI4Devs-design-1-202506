export type UUID = string;
export type Timestamp = Date;
export interface Entity {
    id: UUID;
    createdAt: Timestamp;
    updatedAt: Timestamp;
}
export interface TenantEntity extends Entity {
    tenantId: UUID;
}
export type JobStatus = 'draft' | 'published' | 'closed' | 'cancelled';
export type EmploymentType = 'full_time' | 'part_time' | 'contract' | 'internship';
export interface SalaryRange {
    min: number;
    max: number;
    currency: string;
}
export type ApplicationStatus = 'applied' | 'screening' | 'phone_interview' | 'technical_interview' | 'final_interview' | 'offer' | 'hired' | 'rejected';
export type ApplicationSource = 'direct' | 'job_board' | 'referral' | 'social';
export type InterviewStatus = 'scheduled' | 'in_progress' | 'completed' | 'cancelled' | 'no_show';
export type InterviewType = 'technical' | 'cultural' | 'hr' | 'final' | 'phone';
export type InterviewLocation = 'remote' | 'onsite' | 'phone';
export type UserRole = 'admin' | 'recruiter' | 'hiring_manager' | 'candidate';
export type NotificationChannel = 'email' | 'sms' | 'in_app' | 'webhook';
export type NotificationStatus = 'pending' | 'sent' | 'delivered' | 'failed' | 'read';
export interface PaginationParams {
    page: number;
    limit: number;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}
export interface PaginatedResponse<T> {
    data: T[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
    };
}
