# 🧠 Applicant Tracking System (ATS)

## 📋 Descripción general

El **Applicant Tracking System (ATS)** es un software diseñado para **digitalizar, automatizar y optimizar el proceso completo de selección de personal**.  
Permite **centralizar candidaturas**, **coordinar al equipo de reclutamiento** y ofrecer una **experiencia fluida** tanto para el candidato como para el personal de recursos humanos.

---

### 🎯 Valor añadido

El sistema transforma un proceso manual y disperso en un **flujo de trabajo unificado, transparente y medible**, eliminando tareas repetitivas y errores humanos.  
Además, ofrece **automatizaciones inteligentes** que reducen el tiempo de contratación, mejoran la calidad de los candidatos y garantizan el **cumplimiento normativo (GDPR)**.

---

### 🏆 Ventajas competitivas

- **Automatización avanzada:** reduce más del 60% del tiempo administrativo del reclutador.  
- **Pipeline visual e intuitivo:** seguimiento en tiempo real de cada candidato y etapa.  
- **Matching inteligente:** priorización automática de perfiles según requisitos definidos.  
- **Integraciones nativas:** conexión con portales de empleo, calendarios, correo y software de RRHH.  
- **Cumplimiento legal garantizado:** consentimiento y retención de datos conforme a la normativa europea.  
- **Analítica en tiempo real:** métricas e informes automáticos sobre fuentes, tiempos y conversiones.  

---

## ⚙️ Funciones principales

### 🧩 1. Gestión de ofertas y vacantes
- Creación, edición y publicación de ofertas en múltiples canales (web, portales, redes).  
- Control del estado de cada vacante y gestión del presupuesto de publicación.  
- Plantillas y etiquetado por departamento, ubicación o tipo de contrato.  

### 📥 2. Captura y centralización de candidaturas
- Recolección automática de CVs y solicitudes desde diferentes fuentes.  
- Eliminación de duplicados y normalización de datos.  
- Importación de perfiles desde LinkedIn u otras plataformas.  

### 🔄 3. Pipeline de selección visual
- Vista tipo **kanban** con etapas personalizables (Aplicado → Entrevista → Oferta → Contratado).  
- Movimiento sencillo de candidatos por arrastre.  
- Automatización de acciones (envío de emails, recordatorios, avisos).  

### ✉️ 4. Comunicación con candidatos
- Bandeja de entrada integrada para correo y mensajes.  
- Plantillas y secuencias automatizadas de comunicación.  
- Confirmaciones, recordatorios y feedback automatizados.  

### 🧑‍🤝‍🧑 5. Colaboración con hiring managers
- Comentarios internos, puntuaciones y **scorecards compartidas**.  
- Flujo de aprobación de ofertas y contratación digital.  
- Historial completo de interacciones y decisiones.  

### 🧾 6. Cumplimiento legal (GDPR)
- Solicitud y almacenamiento del consentimiento.  
- Eliminación o anonimización automática de datos caducados.  
- Registro de accesos y auditorías.  

### 📊 7. Analítica y reporting
- Métricas clave: tiempo medio de contratación, fuentes más efectivas, conversión por etapa.  
- Dashboards personalizables y exportación a CSV o Excel.  
- Detección automática de cuellos de botella.  

### 🧠 8. IA y recomendaciones (opcional)
- Ranking de candidatos según adecuación al puesto.  
- Análisis semántico de CVs y descripciones.  
- Sugerencias de mejora en redacción de ofertas y proceso de selección.  

---

## 🚀 Beneficios para el equipo de RRHH

- Reducción del **time-to-hire** hasta un **50%**.  
- Mejora de la **calidad y consistencia** en las contrataciones.  
- Mayor **coordinación entre departamentos**.  
- Mejora notable en la **experiencia del candidato** y la **imagen de marca empleadora**.  

---

💡 *Este sistema convierte la gestión de talento en un proceso ágil, medible y centrado en las personas.*


## 📊 Lean Canvas para entender el modelo de negocio

```mermaid
flowchart LR
%% Comparación de aspectos clave
classDef left fill:#EAF2FF,stroke:#BFD0FF,color:#111;
classDef right fill:#FFFFFF,stroke:#DADDE6,color:#111;
classDef title fill:#333,stroke:#333,color:#fff;

T[Comparación de aspectos clave]:::title

L0[Característica]:::left --- R0[Descripción]:::right

L1[Problema]:::left --- R1[Procesos manuales que consumen tiempo]:::right
L2[Segmento de clientes]:::left --- R2[Empresas medianas y startups tecnológicas]:::right
L3[Propuesta de valor]:::left --- R3[Centraliza la selección para una contratación más rápida]:::right
L4[Solución]:::left --- R4[Gestión de vacantes y pipeline visual]:::right
L5[Canales]:::left --- R5[Marketing entrante y ventas salientes]:::right
L6[Fuentes de ingresos]:::left --- R6[Modelo SaaS y servicios complementarios]:::right
L7[Estructura de costes]:::left --- R7[Desarrollo de software e infraestructura]:::right
L8[Métricas clave]:::left --- R8[Tiempo de contratación y tasa de conversión]:::right
L9[Ventaja injusta]:::left --- R9[Arquitectura flexible e IA de coincidencia semántica]:::right
```

## 📝 Casos de uso

### 🔄 Caso de uso 1: Gestión completa de procesos de selección

```mermaid
sequenceDiagram
  title Caso de uso 1: Gestión completa de procesos de selección
  participant R as Reclutador
  participant ATS as ATS
  participant P as Portales de empleo / Web corporativa
  participant C as Candidato
  participant CAL as Calendario (Google/Outlook)
  participant AS as Proveedor de pruebas/Assessments
  participant ES as Firma electrónica
  participant HR as HRIS / Nómina

  R->>ATS: Crea vacante (JD, requisitos, etapas)
  ATS->>P: Publica oferta (multiposting)
  C->>P: Aplica a la vacante
  P->>ATS: Envía candidatura (CV, datos)
  ATS-->>ATS: Parseo de CV + knockout + scoring
  ATS->>C: Confirmación automática de recepción
  R->>ATS: Filtro/búsqueda y selección de prefinalistas
  R->>CAL: Propone slots (self-schedule)
  CAL-->>C: Enlace de autoprogramación
  C-->>CAL: Selecciona fecha/hora
  CAL-->>ATS: Evento confirmado (entrevista)
  R->>AS: Envía assessment (opcional)
  AS-->>ATS: Resultados y puntuación
  R->>ATS: Actualiza estado del candidato (kanban)
  R->>ATS: Inicia oferta (plantilla y aprobaciones)
  ATS->>ES: Solicita firma digital
  ES-->>C: Firma de oferta
  ES-->>ATS: Contratación firmada
  ATS->>HR: Alta en HRIS / traspaso de datos
  ATS->>C: Mensaje de bienvenida / onboarding
```

### 🤝 Caso de uso 2: Coordinación y colaboración del equipo de reclutamiento

```mermaid
sequenceDiagram
  title Caso de uso 2: Coordinación y colaboración del equipo de reclutamiento
  participant R as Reclutador
  participant HM as Hiring Manager
  participant INT as Entrevistadores
  participant ATS as ATS
  participant CAL as Calendario
  participant MAIL as Email/Mensajería

  R->>ATS: Asigna candidatos a HM/INT con scorecards
  ATS-->>HM: Notificación de revisión pendiente
  HM->>ATS: Evalúa perfil (comentarios + puntuación)
  ATS-->>INT: Recordatorio para completar scorecard tras entrevista
  R->>CAL: Agenda entrevistas (disponibilidades)
  CAL-->>ATS: Confirmación de eventos y recordatorios
  INT->>ATS: Sube feedback estructurado (scorecard)
  ATS-->>R: Vista consolidada (comparativa y ranking)
  R->>HM: Solicita decisión final (aprobación)
  HM->>ATS: Decisión (avanzar / descartar)
  R->>MAIL: Envía feedback a candidatos (plantillas)
  ATS-->>R: Auditoría y trazabilidad de decisiones
```

### 📈 Caso de uso 3: Analítica y mejora continua del proceso de contratación

```mermaid
sequenceDiagram
  title Caso de uso 3: Analítica y mejora continua del proceso de contratación
  participant ATS as ATS (Analytics)
  participant R as Reclutador / RRHH
  participant DIR as Dirección
  participant BI as BI/Datamart (opcional)
  participant CH as Canales (LinkedIn/Portales)
  participant CAL as Calendario

  ATS-->>ATS: Registra eventos (aplicaciones, entrevistas, ofertas)
  ATS-->>ATS: Calcula KPIs (time-to-hire, conversión, fuentes)
  ATS-->>R: Dashboard diario (cuellos de botella)
  R->>ATS: Drilla métricas por vacante/fuente/etapa
  R->>CH: Reasigna presupuesto a canales efectivos
  R->>CAL: Reduce tiempos entre etapas (SLA, recordatorios)
  ATS-->>DIR: Informe semanal automatizado (PDF/CSV)
  ATS->>BI: Exportación/Sync de datos (opcional)
  R->>ATS: Itera reglas (knockout, scorecards, plantillas)
  ATS-->>R: Mejora de KPIs tras cambios (tendencias)
```

## 🗄️ Modelo de datos

```mermaid
erDiagram
  Company ||--o{ Department : has
  Company ||--o{ User : employs
  Company ||--o{ Job : owns

  Department ||--o{ Job : includes

  User ||--o{ JobHiringTeam : assigned
  Job  ||--o{ JobHiringTeam : needs

  Candidate ||--o{ Resume : has
  Candidate ||--o{ Application : submits
  Candidate ||--o{ Message : communicates
  Candidate ||--o{ Interview : attends
  Candidate ||--o{ Offer : receives
  Candidate ||--o{ Note : annotated

  Job ||--o{ JobPosting : published_as
  Job ||--o{ Application : receives
  Job ||--o{ Interview : schedules
  Job ||--o{ Offer : generates
  Job ||--o{ PipelineStage : defines

  Application ||--o{ ApplicationStageHistory : tracks
  Application ||--o{ Interview : includes
  Application ||--o{ AssessmentResult : evaluates
  Application ||--o{ Message : exchanges
  Application ||--o{ Offer : may_end_in
  Application }o--|| Candidate : belongs_to_candidate
  Application }o--|| Job : belongs_to_job
  Application }o--|| PipelineStage : current_stage

  Interview ||--o{ InterviewParticipant : includes
  Interview ||--o{ Scorecard : produces
  InterviewParticipant }o--|| User : interviewer

  Offer ||--o{ OfferApproval : requires
  Offer }o--|| Application : for_application
  Offer }o--|| Candidate : for_candidate
  Offer }o--|| Job : for_job

  Note }o--|| User : written_by

  Company {
    uuid id PK
    string name
    string domain
    string timezone
    datetime created_at
  }

  Department {
    uuid id PK
    uuid company_id FK
    string name
    string cost_center
  }

  User {
    uuid id PK
    uuid company_id FK
    string email
    string full_name
    string role
    string status
  }

  Candidate {
    uuid id PK
    string full_name
    string email
    string phone
    string location
    string linkedin_url
    string source
    string consent_status
    datetime consent_at
  }

  Resume {
    uuid id PK
    uuid candidate_id FK
    string storage_url
    json parsed_json
    string language
  }

  Job {
    uuid id PK
    uuid company_id FK
    uuid department_id FK
    string title
    string description
    string location_type
    string location
    string employment_type
    float salary_range_min
    float salary_range_max
    string currency
    string status
  }

  JobPosting {
    uuid id PK
    uuid job_id FK
    string channel
    string posting_url
    datetime published_at
    string status
  }

  PipelineStage {
    uuid id PK
    uuid job_id FK
    string name
    int position
  }

  Application {
    uuid id PK
    uuid candidate_id FK
    uuid job_id FK
    uuid current_stage_id FK
    datetime applied_at
    string source
    string status
    float score
  }

  ApplicationStageHistory {
    uuid id PK
    uuid application_id FK
    uuid stage_id FK
    uuid changed_by_user_id FK
    datetime entered_at
    datetime exited_at
  }

  Interview {
    uuid id PK
    uuid application_id FK
    uuid candidate_id FK
    uuid job_id FK
    datetime scheduled_start
    datetime scheduled_end
    string location
    string status
  }

  InterviewParticipant {
    uuid id PK
    uuid interview_id FK
    uuid user_id FK
    string role
  }

  Scorecard {
    uuid id PK
    uuid interview_id FK
    uuid user_id FK
    json criteria_json
    string overall_recommendation
    string notes
    datetime submitted_at
  }

  AssessmentResult {
    uuid id PK
    uuid application_id FK
    string provider
    string test_name
    float score
    boolean passed
    string report_url
    datetime completed_at
  }

  Offer {
    uuid id PK
    uuid application_id FK
    uuid candidate_id FK
    uuid job_id FK
    float base_salary
    float variable_comp
    string currency
    string contract_type
    date start_date
    string status
    string doc_url
  }

  OfferApproval {
    uuid id PK
    uuid offer_id FK
    uuid approver_user_id FK
    string status
    string comment
    datetime decided_at
  }

  Message {
    uuid id PK
    uuid application_id FK
    uuid candidate_id FK
    string direction
    string channel
    string subject
    string body
    datetime sent_at
    string status
  }

  Note {
    uuid id PK
    string entity_type
    uuid entity_id
    uuid author_user_id FK
    string content
    datetime created_at
  }

  JobHiringTeam {
    uuid id PK
    uuid job_id FK
    uuid user_id FK
    string role
  }
```

## 🏗️ Arquitectura

### ⚙️ Objetivos arquitectónicos

- **Escalabilidad:** servicios stateless detrás de un API Gateway, colas para picos, caches para lecturas calientes, búsqueda externa.
- **Seguridad & Cumplimiento:** OIDC/OAuth2, RBAC multi-tenant, cifrado en tránsito/reposo, WAF, rate-limit, auditoría y retención GDPR.
- **Mantenibilidad:** límites claros por dominio (Jobs, Candidatos, Aplicaciones, Entrevistas, Ofertas, Mensajería, Integraciones), contratos estables, BFF para UI, feature flags.
- **Observabilidad:** tracing (OpenTelemetry), logs centralizados, métricas de negocio (time-to-hire, conversiones) y técnicas (p95, saturación).

### 🧩 Macro-componentes

#### Frontends

- Career Site (público) con CDN y SSR/ISR.
- Recruiter App (privado) SPA/SSR con BFF.
- BFF (Backend For Frontend): adapta APIs a vistas, agrega datos, aplica caché de corta vida.

#### Servicios de dominio (microservicios o módulos)

- Jobs Service (vacantes & pipeline stages)
- Candidates Service (candidatos, CV parsing)
- Applications Service (candidaturas, stage history)
- Interviews Service (agenda, entrevistadores)
- Messaging Service (email/SMS/WhatsApp, plantillas)
- Assessments Service (tests externos)
- Offers Service (ofertas, aprobaciones, e-signature)
- Search Service (búsqueda full-text/semántica)
- Compliance Service (consent, data retention, anonimización)
- Integrations Hub (job boards, calendario, HRIS, firma)

#### Infra/Plataforma

- API Gateway + AuthN/AuthZ (OIDC/JWT/RBAC)
- Message Broker (RabbitMQ/SQS/PubSub) y Event Bus (Kafka) para eventos de dominio
- Cache (Redis), Object Storage (S3), DB (PostgreSQL principal + réplicas), Search (OpenSearch/ES)
- Scheduler/Workers (jobs asíncronos), CDN, WAF
- Observabilidad (Prometheus + Grafana, ELK/Opensearch Dashboards, Jaeger/Tempo)

### 🔄 Patrones de comunicación

- **Sincrono:** REST/JSON (o gRPC) entre BFF ↔ servicios; API externas con webhooks cuando las haya.
- **Asíncrono:** eventos de dominio (p.ej. ApplicationStageChanged, OfferSigned) en Event Bus; colas para tareas (envíos, parsing CV, sincronizaciones, anonimización).
- **CQRS ligera:** para lecturas complejas (dashboards) usando materialized views/caches.

### 🔌 Integraciones externas

- Portales de empleo (LinkedIn/Indeed/InfoJobs): multiposting + webhook/ingest.
- Correo/SMS/WhatsApp (SendGrid/SES/Twilio): saliente y tracking.
- Calendario (Google/Outlook): disponibilidad, invitaciones, recordatorios.
- Assessments (HackerRank/SHL): envío y recogida de resultados.
- Firma electrónica (DocuSign/Adobe): ofertas y contratos.
- HRIS/Payroll (Factorial/Personio): alta de contratado.
- SSO/IdP (AzureAD/Okta/Google): OIDC + SCIM (opcional).

### 🔒 Seguridad y multi-tenancy

- Aislamiento por tenant: company_id + filtros RLS (si DB lo permite) y separación lógica de secretos; opción de BYOK/KMS.
- AuthN con OIDC, AuthZ con RBAC/ABAC por recurso (job/candidate/application).
- Auditoría de cambios y accesos; retención/anonimización por políticas.

### 🚀 DevOps/Entrega

- CI/CD (tests, SAST/DAST, migraciones), IaC (Terraform), blue/green o canary con feature flags.
- Backups y restore probados; migraciones idempotentes (Liquibase/Flyway).

### 🏛️ Patrón de diseño (Arquitectura hexagonal)

```mermaid
flowchart LR
  %% --- Núcleo del dominio ---
  subgraph Domain["Domain Core"]
    UC["Use Cases / Application Services"]
    ENT["Entities & Aggregates"]
    DOMS["Domain Services - Workflow, GDPR, Scoring"]
    PORTS["Ports (Interfaces)"]
  end

  %% --- Adaptadores de entrada ---
  subgraph InAdapters["Inbound Adapters"]
    REST["REST / GraphQL API"]
    BFF["BFF Web"]
    WEBH["Webhooks (JobBoards / Assessments)"]
    SCHED["Scheduler"]
  end

  %% --- Adaptadores de salida ---
  subgraph OutAdapters["Outbound Adapters"]
    DB["PostgreSQL Repository"]
    SEARCH["OpenSearch Adapter"]
    MQ["Event Bus / Outbox Adapter"]
    MSG["Email - SMS - WhatsApp Adapter"]
    CAL["Calendar Adapter"]
    SIGN["E-Signature Adapter"]
    HRIS["HRIS / Payroll Adapter"]
    STORE["Object Storage (S3)"]
    AUD["Audit / Logging Adapter"]
    COMP["Compliance / Anonymizer"]
  end

  %% --- Relaciones ---
  REST --> UC
  BFF --> UC
  WEBH --> UC
  SCHED --> UC

  UC --> PORTS
  PORTS --> DB
  PORTS --> SEARCH
  PORTS --> MQ
  PORTS --> MSG
  PORTS --> CAL
  PORTS --> SIGN
  PORTS --> HRIS
  PORTS --> STORE
  PORTS --> AUD
  PORTS --> COMP

  ENT --- DOMS
  UC --- ENT
```

### 📐 Diagramas C4

#### C4-1: Contexto (vista de alto nivel)

```mermaid
flowchart LR
  %% Actores
  R[Reclutador / Hiring Manager]
  C[Candidato]

  %% Sistema
  subgraph ATS[ATS System]
    UI["Career Site - Public Web"]
    APP["Recruiter Web App"]
    API["API Gateway + Auth"]
  end

  %% Sistemas externos
  JB[Job Boards]
  MSG[Email - SMS - WhatsApp]
  CAL[Calendarios]
  ASM[Assessments]
  SIGN[ESignature]
  HRIS[HRIS - Payroll]
  SSO[IdP - SSO]

  %% Relaciones principales
  R --> APP
  C --> UI
  UI --> API
  APP --> API

  API <--> JB
  API <--> MSG
  API <--> CAL
  API <--> ASM
  API <--> SIGN
  API <--> HRIS
  APP <--> SSO
```

#### C4-2: Contenedores (macro distribución)

```mermaid
flowchart TB
  %% Borde
  subgraph Edge
    CDN[CDN + WAF]
  end

  %% Front
  subgraph Frontends
    CS["Career Site - SSR"]
    REC["Recruiter App - SPA/SSR"]
    BFF["BFF Web"]
  end

  %% Plataforma
  subgraph Platform
    GATE["API Gateway"]
    AUTH["Auth - OIDC - RBAC"]
    BUS["Event Bus - Kafka"]
    QUEUE["Message Broker - SQS/Rabbit"]
    CACHE["Redis"]
  end

  %% Dominios
  subgraph Domain Services
    JOBS["Jobs Service"]
    CAND["Candidates Service"]
    APPS["Applications Service"]
    INTV["Interviews Service"]
    OFF["Offers Service"]
    MSGS["Messaging Service"]
    SRCH["Search API"]
    COMP["Compliance Service"]
    INTEG["Integrations Hub"]
    ANALYT["Analytics API"]
  end

  %% Datos
  subgraph Data
    PG["PostgreSQL - OLTP"]
    ES["OpenSearch"]
    S3["Object Storage"]
    CFG["Feature Flags - Config"]
  end

  %% Flujo front
  CDN --> CS
  CDN --> REC
  CS --> GATE
  REC --> BFF --> GATE

  %% Sincrono
  GATE --> AUTH
  GATE --> JOBS
  GATE --> CAND
  GATE --> APPS
  GATE --> INTV
  GATE --> OFF
  GATE --> MSGS
  GATE --> SRCH
  GATE --> COMP
  GATE --> INTEG
  GATE --> ANALYT

  %% Datos
  JOBS --> PG
  CAND --> PG
  APPS --> PG
  INTV --> PG
  OFF --> PG
  COMP --> PG
  ANALYT --> PG

  SRCH --> ES
  CAND --> S3
  APPS --> S3
  OFF --> S3

  BFF --> CACHE
  SRCH --> CACHE
  ANALYT --> CACHE

  %% Asíncrono
  APPS --> BUS
  OFF --> BUS
  INTV --> BUS
  COMP --> BUS

  MSGS --> QUEUE
  INTEG --> QUEUE
```

#### C4-3: Componentes (dentro del Applications Service)

```mermaid
flowchart LR
  %% Adaptadores de entrada
  subgraph Inbound Adapters
    REST["HTTP Controller - Applications"]
    EVH["Event Handler - Webhooks"]
    SCH["Scheduler - Jobs nocturnos"]
  end

  %% Núcleo del servicio
  subgraph Application Service Core
    UC1["Use Case - CreateApplication"]
    UC2["Use Case - AdvanceStage"]
    UC3["Use Case - ScheduleInterview"]
    DOM["Domain - Application Aggregate"]
    POL["Domain Service - Workflow Policy"]
    PORTS["Ports - Repos - Message - Search - EventBus"]
  end

  %% Adaptadores de salida
  subgraph Outbound Adapters
    REPO["PostgreSQL Repository - Applications"]
    OUTBOX["Outbox Publisher - Kafka"]
    INDEX["Search Indexer - OpenSearch"]
    MAIL["Message Port - Email - SMS"]
    AUD["Audit Logger"]
  end

  %% Relaciones
  REST --> UC1
  REST --> UC2
  REST --> UC3
  EVH --> UC2
  SCH --> UC2

  UC1 --> DOM
  UC2 --> DOM
  UC3 --> DOM
  UC2 --> POL

  UC1 --> PORTS
  UC2 --> PORTS
  UC3 --> PORTS

  PORTS --> REPO
  PORTS --> OUTBOX
  PORTS --> INDEX
  PORTS --> MAIL
  PORTS --> AUD
```

#### C4-4: Código (clases e interfaces del dominio y adapters)

```mermaid
classDiagram
  class Application {
    +UUID id
    +UUID candidateId
    +UUID jobId
    +Stage currentStage
    +List~StageHistory~ history
    +float score
    +advanceTo(next: Stage): void
    +canAdvanceTo(next: Stage, policy: WorkflowPolicy): boolean
  }

  class Stage {
    <<enumeration>>
    Applied
    PhoneScreen
    Interview
    Offer
    Hired
    Rejected
    Withdrawn
  }

  class StageHistory {
    +UUID stageId
    +datetime enteredAt
    +datetime exitedAt
    +UUID changedBy
  }

  class WorkflowPolicy {
    <<interface>>
    +validateTransition(current: Stage, next: Stage): void
    +preconditions(app: Application): void
  }

  class DefaultWorkflowPolicy {
    +validateTransition(current: Stage, next: Stage): void
    +preconditions(app: Application): void
  }

  class ApplicationRepository {
    <<interface>>
    +save(app: Application): void
    +getById(id: UUID): Application
    +findByJob(jobId: UUID): List~Application~
  }

  class SqlApplicationRepository {
    -DataSource ds
    +save(app: Application): void
    +getById(id: UUID): Application
    +findByJob(jobId: UUID): List~Application~
  }

  class EventBus {
    <<interface>>
    +publish(event: DomainEvent): void
  }

  class OutboxEventBus {
    -DataSource ds
    +publish(event: DomainEvent): void
  }

  class DomainEvent {
    <<abstract>>
    +UUID id
    +string type
    +datetime occurredAt
  }

  class ApplicationStageChanged {
    +UUID applicationId
    +Stage from
    +Stage to
  }

  class SearchIndexer {
    <<interface>>
    +indexApplication(app: Application): void
  }

  class OpenSearchIndexer {
    +indexApplication(app: Application): void
  }

  %% Relaciones
  Application --> Stage
  Application --> StageHistory
  DefaultWorkflowPolicy ..|> WorkflowPolicy
  SqlApplicationRepository ..|> ApplicationRepository
  OutboxEventBus ..|> EventBus
  ApplicationStageChanged --|> DomainEvent
  OpenSearchIndexer ..|> SearchIndexer

  %% Uso en casos de uso
  Application --> WorkflowPolicy : uses
  Application --> ApplicationRepository : persists via
  Application --> EventBus : emits events via
  Application --> SearchIndexer : updates read model
```
