import { ICommand } from '@nestjs/cqrs';

export class CreateJobCommand implements ICommand {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly requirements: string[],
    public readonly responsibilities: string[],
    public readonly benefits?: string,
    public readonly location?: string,
    public readonly remoteWork?: boolean,
    public readonly salaryMin?: number,
    public readonly salaryMax?: number,
    public readonly salaryCurrency?: string,
    public readonly employmentType?: string,
    public readonly experienceLevel?: string,
    public readonly deadline?: Date,
    public readonly companyId?: string,
    public readonly tenantId?: string,
    public readonly createdBy?: string
  ) {}
}

export class UpdateJobCommand implements ICommand {
  constructor(
    public readonly jobId: string,
    public readonly tenantId: string,
    public readonly updates: {
      title?: string;
      description?: string;
      requirements?: string[];
      responsibilities?: string[];
      benefits?: string;
      location?: string;
      remoteWork?: boolean;
      salaryMin?: number;
      salaryMax?: number;
      employmentType?: string;
      experienceLevel?: string;
      deadline?: Date;
    },
    public readonly updatedBy: string
  ) {}
}

export class PublishJobCommand implements ICommand {
  constructor(
    public readonly jobId: string,
    public readonly tenantId: string,
    public readonly publishedBy: string
  ) {}
}

export class PauseJobCommand implements ICommand {
  constructor(
    public readonly jobId: string,
    public readonly tenantId: string,
    public readonly pausedBy: string
  ) {}
}

export class DeleteJobCommand implements ICommand {
  constructor(
    public readonly jobId: string,
    public readonly tenantId: string,
    public readonly deletedBy: string
  ) {}
}