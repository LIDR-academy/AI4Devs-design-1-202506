### 6. Modelo de Datos

#### 6.1 Entidades Principales

**Users (Usuarios)**
- id: UUID (PK)
- email: VARCHAR(255)
- name: VARCHAR(255)
- role: ENUM('admin', 'recruiter', 'hiring_manager')
- company_id: UUID (FK)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP

**Companies (Empresas)**
- id: UUID (PK)
- name: VARCHAR(255)
- industry: VARCHAR(255)
- size: ENUM('small', 'medium', 'large')
- subscription_plan: ENUM('basic', 'professional', 'enterprise')
- created_at: TIMESTAMP

**Jobs (Vacantes)**
- id: UUID (PK)
- title: VARCHAR(255)
- description: TEXT
- requirements: JSONB
- company_id: UUID (FK)
- recruiter_id: UUID (FK)
- status: ENUM('draft', 'active', 'paused', 'closed')
- ai_score: DECIMAL(3,2)
- created_at: TIMESTAMP
- updated_at: TIMESTAMP

**Candidates (Candidatos)**
- id: UUID (PK)
- email: VARCHAR(255)
- name: VARCHAR(255)
- phone: VARCHAR(50)
- resume_url: VARCHAR(500)
- skills: JSONB
- experience_years: INTEGER
- ai_matching_score: DECIMAL(3,2)
- source: ENUM('scraping', 'application', 'referral')
- created_at: TIMESTAMP

**Applications (Aplicaciones)**
- id: UUID (PK)
- job_id: UUID (FK)
- candidate_id: UUID (FK)
- status: ENUM('new', 'screening', 'interview', 'offer', 'hired', 'rejected')
- ai_score: DECIMAL(3,2)
- recruiter_notes: TEXT
- created_at: TIMESTAMP
- updated_at: TIMESTAMP

**Interviews (Entrevistas)**
- id: UUID (PK)
- application_id: UUID (FK)
- interviewer_id: UUID (FK)
- scheduled_at: TIMESTAMP
- duration: INTEGER
- type: ENUM('phone', 'video', 'onsite')
- status: ENUM('scheduled', 'completed', 'cancelled')
- feedback: JSONB

**Tasks (Tareas)**
- id: UUID (PK)
- title: VARCHAR(255)
- description: TEXT
- assigned_to: UUID (FK)
- priority: ENUM('low', 'medium', 'high', 'urgent')
- status: ENUM('pending', 'in_progress', 'completed')
- due_date: TIMESTAMP
- ai_generated: BOOLEAN
- created_at: TIMESTAMP

**Integrations (Integraciones)**
- id: UUID (PK)
- company_id: UUID (FK)
- platform: ENUM('gmail', 'google_drive', 'office365', 'linkedin')
- credentials: JSONB
- status: ENUM('active', 'inactive', 'error')
- last_sync: TIMESTAMP
- created_at: TIMESTAMP