import { ICommandHandler } from '@nestjs/cqrs';
import { InMemoryJobRepository } from '../repositories/in-memory-job.repository';
import { CreateJobCommand, UpdateJobCommand, PublishJobCommand, PauseJobCommand, DeleteJobCommand } from '../commands/job.commands';
export declare class CreateJobCommandHandler implements ICommandHandler<CreateJobCommand> {
    private readonly jobRepository;
    constructor(jobRepository: InMemoryJobRepository);
    execute(command: CreateJobCommand): Promise<string>;
}
export declare class UpdateJobCommandHandler implements ICommandHandler<UpdateJobCommand> {
    private readonly jobRepository;
    constructor(jobRepository: InMemoryJobRepository);
    execute(command: UpdateJobCommand): Promise<void>;
}
export declare class PublishJobCommandHandler implements ICommandHandler<PublishJobCommand> {
    private readonly jobRepository;
    constructor(jobRepository: InMemoryJobRepository);
    execute(command: PublishJobCommand): Promise<void>;
}
export declare class PauseJobCommandHandler implements ICommandHandler<PauseJobCommand> {
    private readonly jobRepository;
    constructor(jobRepository: InMemoryJobRepository);
    execute(command: PauseJobCommand): Promise<void>;
}
export declare class DeleteJobCommandHandler implements ICommandHandler<DeleteJobCommand> {
    private readonly jobRepository;
    constructor(jobRepository: InMemoryJobRepository);
    execute(command: DeleteJobCommand): Promise<void>;
}
