-- Initialization SQL for ATS database
-- This file is automatically executed when the PostgreSQL container starts

-- Create extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Create indexes for better performance
-- These will be created after Prisma migration, but keeping them here for reference

-- Full text search indexes
-- CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_jobs_search 
--   ON jobs USING gin(to_tsvector('english', title || ' ' || description));

-- CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_people_search 
--   ON people USING gin(to_tsvector('english', first_name || ' ' || last_name || ' ' || COALESCE(current_title, '')));

-- Performance indexes
-- CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_applications_status ON applications(status);
-- CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_applications_job_id ON applications(job_id);
-- CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_jobs_status ON jobs(status);
-- CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_jobs_company_id ON jobs(company_id);

-- Create a function for updating the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Note: Triggers will be added after Prisma generates the tables