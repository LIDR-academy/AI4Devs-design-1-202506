import { ApiProperty } from '@nestjs/swagger';
import { 
  IsString, 
  IsNotEmpty, 
  IsArray, 
  IsOptional, 
  IsBoolean, 
  IsDecimal, 
  IsEnum,
  IsUrl,
  MaxLength,
  MinLength
} from 'class-validator';

export enum EmploymentType {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  INTERNSHIP = 'INTERNSHIP'
}

export enum ExperienceLevel {
  JUNIOR = 'JUNIOR',
  MID = 'MID',
  SENIOR = 'SENIOR',
  LEAD = 'LEAD'
}

export class CreateJobDto {
  @ApiProperty({ 
    description: 'Job title',
    example: 'Senior Full-Stack Developer'
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  title: string;

  @ApiProperty({ 
    description: 'Detailed job description',
    example: 'We are looking for a talented developer to join our team...'
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(50)
  description: string;

  @ApiProperty({ 
    description: 'List of job requirements',
    example: ['3+ years of React experience', 'Node.js knowledge', 'TypeScript']
  })
  @IsArray()
  @IsString({ each: true })
  requirements: string[];

  @ApiProperty({ 
    description: 'List of job responsibilities',
    example: ['Develop new features', 'Code reviews', 'Mentor junior developers']
  })
  @IsArray()
  @IsString({ each: true })
  responsibilities: string[];

  @ApiProperty({ 
    description: 'Benefits offered',
    required: false,
    example: 'Health insurance, flexible hours, remote work options'
  })
  @IsOptional()
  @IsString()
  benefits?: string;

  @ApiProperty({ 
    description: 'Job location',
    required: false,
    example: 'Madrid, Spain'
  })
  @IsOptional()
  @IsString()
  location?: string;

  @ApiProperty({ 
    description: 'Remote work availability',
    example: true
  })
  @IsBoolean()
  remoteWork: boolean;

  @ApiProperty({ 
    description: 'Minimum salary',
    required: false,
    example: 45000
  })
  @IsOptional()
  @IsDecimal()
  salaryMin?: number;

  @ApiProperty({ 
    description: 'Maximum salary',
    required: false,
    example: 65000
  })
  @IsOptional()
  @IsDecimal()
  salaryMax?: number;

  @ApiProperty({ 
    description: 'Salary currency',
    required: false,
    example: 'EUR'
  })
  @IsOptional()
  @IsString()
  salaryCurrency?: string;

  @ApiProperty({ 
    description: 'Employment type',
    enum: EmploymentType,
    example: EmploymentType.FULL_TIME
  })
  @IsEnum(EmploymentType)
  employmentType: EmploymentType;

  @ApiProperty({ 
    description: 'Required experience level',
    enum: ExperienceLevel,
    example: ExperienceLevel.SENIOR
  })
  @IsEnum(ExperienceLevel)
  experienceLevel: ExperienceLevel;

  @ApiProperty({ 
    description: 'Application deadline',
    required: false,
    example: '2024-12-31T23:59:59Z'
  })
  @IsOptional()
  deadline?: string;

  @ApiProperty({ 
    description: 'Company ID',
    example: 'cuid123abc'
  })
  @IsString()
  @IsNotEmpty()
  companyId: string;
}