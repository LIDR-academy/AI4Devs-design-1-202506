export interface JobData {
    id: string;
    title: string;
    description: string;
    requirements: string[];
    responsibilities: string[];
    benefits?: string;
    location?: string;
    remoteWork: boolean;
    salaryMin?: number;
    salaryMax?: number;
    salaryCurrency: string;
    employmentType: string;
    experienceLevel: string;
    status: 'DRAFT' | 'ACTIVE' | 'PAUSED' | 'CLOSED';
    deadline?: Date;
    companyId: string;
    tenantId: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class JobEntity {
    private data;
    constructor(data: JobData);
    static create(props: Omit<JobData, 'id' | 'status' | 'createdAt' | 'updatedAt'> & Partial<Pick<JobData, 'salaryCurrency' | 'remoteWork'>>): JobEntity;
    get id(): string;
    get props(): Readonly<JobData>;
    update(updates: Partial<JobData>): void;
    publish(): void;
    pause(): void;
    close(): void;
    toJSON(): JobData;
}
