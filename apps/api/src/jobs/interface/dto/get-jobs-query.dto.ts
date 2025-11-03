import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, IsEnum, IsString, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';
import { JobStatus } from './update-job.dto';

export class GetJobsQueryDto {
  @ApiProperty({ 
    description: 'Page number for pagination',
    required: false,
    example: 1,
    minimum: 1
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @ApiProperty({ 
    description: 'Number of items per page',
    required: false,
    example: 10,
    minimum: 1,
    maximum: 100
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  limit?: number = 10;

  @ApiProperty({ 
    description: 'Filter by job status',
    enum: JobStatus,
    required: false,
    example: JobStatus.ACTIVE
  })
  @IsOptional()
  @IsEnum(JobStatus)
  status?: JobStatus;

  @ApiProperty({ 
    description: 'Filter by company ID',
    required: false,
    example: 'cuid123abc'
  })
  @IsOptional()
  @IsString()
  company?: string;

  @ApiProperty({ 
    description: 'Search term for job title and description',
    required: false,
    example: 'developer'
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({ 
    description: 'Filter by location',
    required: false,
    example: 'Madrid'
  })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ 
    description: 'Filter by remote work availability',
    required: false,
    example: true
  })
  @IsOptional()
  @Type(() => Boolean)
  remoteWork?: boolean;
}