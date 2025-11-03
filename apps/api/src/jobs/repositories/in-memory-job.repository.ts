import { Injectable } from '@nestjs/common';
import { JobEntity, JobData } from '../entities/job.entity';

export interface JobFilters {
  status?: string;
  companyId?: string;
  employmentType?: string;
  experienceLevel?: string;
  location?: string;
  remoteWork?: boolean;
  salaryMin?: number;
  salaryMax?: number;
}

export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface JobSearchResult {
  jobs: JobEntity[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

@Injectable()
export class InMemoryJobRepository {
  private jobs: Map<string, JobEntity> = new Map();

  async save(job: JobEntity): Promise<void> {
    this.jobs.set(job.id, job);
  }

  async findById(id: string, tenantId: string): Promise<JobEntity | null> {
    const job = this.jobs.get(id);
    if (!job || job.props.tenantId !== tenantId) {
      return null;
    }
    return job;
  }

  async findByFilters(
    tenantId: string,
    filters: JobFilters,
    pagination: PaginationOptions
  ): Promise<JobSearchResult> {
    let filteredJobs = Array.from(this.jobs.values())
      .filter(job => job.props.tenantId === tenantId);

    // Apply filters
    if (filters.status) {
      filteredJobs = filteredJobs.filter(job => job.props.status === filters.status);
    }
    if (filters.companyId) {
      filteredJobs = filteredJobs.filter(job => job.props.companyId === filters.companyId);
    }
    if (filters.employmentType) {
      filteredJobs = filteredJobs.filter(job => job.props.employmentType === filters.employmentType);
    }
    if (filters.experienceLevel) {
      filteredJobs = filteredJobs.filter(job => job.props.experienceLevel === filters.experienceLevel);
    }
    if (filters.location) {
      filteredJobs = filteredJobs.filter(job => 
        job.props.location?.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }
    if (filters.remoteWork !== undefined) {
      filteredJobs = filteredJobs.filter(job => job.props.remoteWork === filters.remoteWork);
    }
    if (filters.salaryMin) {
      filteredJobs = filteredJobs.filter(job => 
        job.props.salaryMin && job.props.salaryMin >= filters.salaryMin!
      );
    }
    if (filters.salaryMax) {
      filteredJobs = filteredJobs.filter(job => 
        job.props.salaryMax && job.props.salaryMax <= filters.salaryMax!
      );
    }

    const total = filteredJobs.length;
    const totalPages = Math.ceil(total / pagination.limit);
    const startIndex = (pagination.page - 1) * pagination.limit;
    const paginatedJobs = filteredJobs.slice(startIndex, startIndex + pagination.limit);

    return {
      jobs: paginatedJobs,
      total,
      page: pagination.page,
      limit: pagination.limit,
      totalPages
    };
  }

  async delete(id: string, tenantId: string): Promise<void> {
    const job = this.jobs.get(id);
    if (job && job.props.tenantId === tenantId) {
      this.jobs.delete(id);
    }
  }

  async existsById(id: string, tenantId: string): Promise<boolean> {
    const job = this.jobs.get(id);
    return job ? job.props.tenantId === tenantId : false;
  }

  // Helper method for testing
  async clear(): Promise<void> {
    this.jobs.clear();
  }

  async getAllJobs(): Promise<JobEntity[]> {
    return Array.from(this.jobs.values());
  }
}