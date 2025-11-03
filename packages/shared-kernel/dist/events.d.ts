export interface DomainEvent<T = any> {
    eventId: string;
    eventType: string;
    aggregateId: string;
    tenantId: string;
    timestamp: Date;
    version: number;
    data: T;
    metadata: {
        correlationId: string;
        causationId?: string;
        userId?: string;
        [key: string]: any;
    };
}
export interface EventMetadata {
    correlationId: string;
    causationId?: string;
    userId?: string;
    [key: string]: any;
}
export interface CandidateApplied extends DomainEvent {
    eventType: 'CandidateApplied';
    data: {
        candidateId: string;
        jobId: string;
        applicationId: string;
        candidateEmail: string;
        applicationSource: 'direct' | 'job_board' | 'referral';
        resumeDocumentId?: string;
        appliedAt: Date;
    };
}
export interface InterviewScheduled extends DomainEvent {
    eventType: 'InterviewScheduled';
    data: {
        interviewId: string;
        candidateId: string;
        jobId: string;
        interviewerId: string;
        scheduledDateTime: Date;
        duration: number;
        location: 'remote' | 'onsite' | 'phone';
        meetingLink?: string;
        interviewType: 'technical' | 'cultural' | 'hr' | 'final';
    };
}
export interface OfferAccepted extends DomainEvent {
    eventType: 'OfferAccepted';
    data: {
        offerId: string;
        candidateId: string;
        applicationId: string;
        acceptedAt: Date;
        startDate: Date;
        salaryPackage: {
            baseSalary: number;
            currency: string;
            benefits: string[];
            equityPackage?: {
                shares: number;
                vestingSchedule: string;
            };
        };
    };
}
export interface ApplicantHired extends DomainEvent {
    eventType: 'ApplicantHired';
    data: {
        hiredEmployeeId: string;
        candidateId: string;
        offerId: string;
        employeeId: string;
        startDate: Date;
        department: string;
        position: string;
        reportingManager: string;
    };
}
