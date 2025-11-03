// Temporary function to replace shared-kernel dependency
function generateId(): string {
  return Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
}

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

export class JobEntity {
  constructor(private data: JobData) {}

  static create(props: Omit<JobData, 'id' | 'status' | 'createdAt' | 'updatedAt'> & Partial<Pick<JobData, 'salaryCurrency' | 'remoteWork'>>): JobEntity {
    return new JobEntity({
      ...props,
      id: generateId(),
      status: 'DRAFT',
      salaryCurrency: props.salaryCurrency || 'EUR',
      remoteWork: props.remoteWork ?? false,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }

  get id(): string {
    return this.data.id;
  }

  get props(): Readonly<JobData> {
    return { ...this.data };
  }

  update(updates: Partial<JobData>): void {
    this.data = {
      ...this.data,
      ...updates,
      updatedAt: new Date()
    };
  }

  publish(): void {
    if (this.data.status === 'CLOSED') {
      throw new Error('Cannot publish a closed job');
    }
    this.data.status = 'ACTIVE';
    this.data.updatedAt = new Date();
  }

  pause(): void {
    if (this.data.status !== 'ACTIVE') {
      throw new Error('Only active jobs can be paused');
    }
    this.data.status = 'PAUSED';
    this.data.updatedAt = new Date();
  }

  close(): void {
    this.data.status = 'CLOSED';
    this.data.updatedAt = new Date();
  }

  toJSON(): JobData {
    return { ...this.data };
  }
}