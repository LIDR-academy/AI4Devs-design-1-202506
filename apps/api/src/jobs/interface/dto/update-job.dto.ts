import { PartialType } from '@nestjs/swagger';
import { CreateJobDto } from './create-job.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';

export enum JobStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  PAUSED = 'PAUSED',
  CLOSED = 'CLOSED'
}

export class UpdateJobDto extends PartialType(CreateJobDto) {
  @ApiProperty({ 
    description: 'Job status',
    enum: JobStatus,
    required: false,
    example: JobStatus.ACTIVE
  })
  @IsOptional()
  @IsEnum(JobStatus)
  status?: JobStatus;
}