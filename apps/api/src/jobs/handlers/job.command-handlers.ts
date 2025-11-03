import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Injectable } from '@nestjs/common';
import { JobEntity } from '../entities/job.entity';
import { InMemoryJobRepository } from '../repositories/in-memory-job.repository';
import {
  CreateJobCommand,
  UpdateJobCommand,
  PublishJobCommand,
  PauseJobCommand,
  DeleteJobCommand
} from '../commands/job.commands';

@Injectable()
@CommandHandler(CreateJobCommand)
export class CreateJobCommandHandler implements ICommandHandler<CreateJobCommand> {
  constructor(private readonly jobRepository: InMemoryJobRepository) {}

  async execute(command: CreateJobCommand): Promise<string> {
    const job = JobEntity.create({
      title: command.title,
      description: command.description,
      requirements: command.requirements,
      responsibilities: command.responsibilities,
      benefits: command.benefits,
      location: command.location,
      remoteWork: command.remoteWork,
      salaryMin: command.salaryMin,
      salaryMax: command.salaryMax,
      salaryCurrency: command.salaryCurrency,
      employmentType: command.employmentType || 'FULL_TIME',
      experienceLevel: command.experienceLevel || 'MID',
      deadline: command.deadline,
      companyId: command.companyId || 'default-company',
      tenantId: command.tenantId || 'default-tenant',
      createdBy: command.createdBy || 'system'
    });

    await this.jobRepository.save(job);
    return job.id;
  }
}

@Injectable()
@CommandHandler(UpdateJobCommand)
export class UpdateJobCommandHandler implements ICommandHandler<UpdateJobCommand> {
  constructor(private readonly jobRepository: InMemoryJobRepository) {}

  async execute(command: UpdateJobCommand): Promise<void> {
    const job = await this.jobRepository.findById(command.jobId, command.tenantId);
    
    if (!job) {
      throw new Error('Job not found');
    }

    job.update({
      ...command.updates,
      updatedAt: new Date()
    });

    await this.jobRepository.save(job);
  }
}

@Injectable()
@CommandHandler(PublishJobCommand)
export class PublishJobCommandHandler implements ICommandHandler<PublishJobCommand> {
  constructor(private readonly jobRepository: InMemoryJobRepository) {}

  async execute(command: PublishJobCommand): Promise<void> {
    const job = await this.jobRepository.findById(command.jobId, command.tenantId);
    
    if (!job) {
      throw new Error('Job not found');
    }

    job.publish();
    await this.jobRepository.save(job);
  }
}

@Injectable()
@CommandHandler(PauseJobCommand)
export class PauseJobCommandHandler implements ICommandHandler<PauseJobCommand> {
  constructor(private readonly jobRepository: InMemoryJobRepository) {}

  async execute(command: PauseJobCommand): Promise<void> {
    const job = await this.jobRepository.findById(command.jobId, command.tenantId);
    
    if (!job) {
      throw new Error('Job not found');
    }

    job.pause();
    await this.jobRepository.save(job);
  }
}

@Injectable()
@CommandHandler(DeleteJobCommand)
export class DeleteJobCommandHandler implements ICommandHandler<DeleteJobCommand> {
  constructor(private readonly jobRepository: InMemoryJobRepository) {}

  async execute(command: DeleteJobCommand): Promise<void> {
    const exists = await this.jobRepository.existsById(command.jobId, command.tenantId);
    
    if (!exists) {
      throw new Error('Job not found');
    }

    await this.jobRepository.delete(command.jobId, command.tenantId);
  }
}