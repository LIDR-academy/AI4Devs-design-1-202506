### Tu misión es diseñar la primera versión del sistema, entregando los siguientes artefactos:

- ✅ **Descripción breve del software LTI**, valor añadido y ventajas competitivas.  

## Descripción del Software
LTS es un Applicant Tracking System (ATS) moderno diseñado para optimizar el proceso de reclutamiento mediante automatización inteligente, analítica integrada y una experiencia fluida tanto para candidatos como para equipos de recursos humanos.
Su propuesta de valor es reducir drásticamente el tiempo y esfuerzo necesarios para publicar vacantes, filtrar candidatos y coordinar entrevistas, centralizando todo el ciclo de contratación en una sola plataforma visual y colaborativa.

Ventajas competitivas:
- Arquitectura modular y API-first, que permite integrar fácilmente herramientas externas (LinkedIn, calendarios, pruebas técnicas, HRIS) y escalar sin fricciones.

- Analítica predictiva y automatización del flujo de selección, ofreciendo métricas en tiempo real y recomendaciones inteligentes para mejorar la calidad de contratación.

LTS redefine la eficiencia del reclutamiento moderno con un enfoque centrado en datos, colaboración y experiencia de usuario.


- ✅ **Explicación de las funciones principales.**  

## Funcionalidades Principales
1.
**Módulo / Funcionalidad:** Gestión de vacantes
Descripción breve: Permite crear, publicar y actualizar ofertas de empleo en múltiples canales (portal corporativo, redes, bolsas de trabajo) desde una sola interfaz.

2.
**Módulo / Funcionalidad:** Gestión de Candidatos
Descripción breve: Centraliza todos los perfiles aplicantes, con parsing automático de CVs y visualización de información relevante (skills, experiencia, fuente).

3.
**Módulo / Funcionalidad:** Pipeline de Selección
Descripción breve: Define etapas personalizables del proceso de reclutamiento (aplicación, entrevista, prueba técnica, oferta) con seguimiento visual y automatizaciones.

4.
**Módulo / Funcionalidad:** Evaluación y Feedback Colaborativo
Descripción breve: Facilita la evaluación de candidatos mediante scorecards, comentarios y calificaciones compartidas por los entrevistadores.

5.
**Módulo / Funcionalidad:** Programación de Entrevistas
Descripción breve: Sincroniza calendarios (Google/Microsoft), envía recordatorios automáticos y permite agendar entrevistas presenciales o virtuales.

6.
**Módulo / Funcionalidad:** Reportes y Analítica de Reclutamiento
Descripción breve: Muestra métricas clave (tiempo de contratación, tasa de conversión, fuente más efectiva) para optimizar decisiones de RRHH.


- ✅ **Añadir un diagrama Lean Canvas** para entender el modelo de negocio.  

## Diagrama Lean Canvas

```mermaid
graph TD
    A[Lean Canvas - LTS Applicant Tracking System]

    A --> B[1. Problema<br>- Procesos de reclutamiento dispersos<br>- Falta de visibilidad en el pipeline<br>- Tareas manuales que consumen tiempo]
    A --> C[2. Segmentos de Clientes<br>- Departamentos de RRHH de pymes y empresas medianas<br>- Consultoras de reclutamiento<br>- Startups en expansión]
    A --> D[3. Propuesta de Valor<br>- Centraliza todo el proceso de contratación<br>- Automatiza tareas repetitivas<br>- Ofrece analítica y predicciones en tiempo real]
    A --> E[4. Solución<br>- Plataforma modular con arquitectura API-first<br>- Dashboard visual y colaborativo<br>- Automatización de publicaciones y entrevistas]
    A --> F[5. Canales<br>- Plataforma web SaaS en la nube<br>- Integraciones con LinkedIn, Indeed y Glassdoor<br>- Marketing digital B2B y alianzas HR Tech]
    A --> G[6. Métricas Clave<br>- Tasa de conversión de candidatos a contratados<br>- Tiempo promedio de contratación<br>- Satisfacción del reclutador y del candidato]
    A --> H[7. Estructura de Costos<br>- Infraestructura en la nube y desarrollo continuo<br>- Marketing y soporte técnico<br>- Integraciones de terceros y servicios AI]
    A --> I[8. Fuentes de Ingreso<br>- Suscripción mensual por usuario o empresa<br>- Add-ons premium como análisis avanzado y parsing inteligente<br>- Servicios de integración personalizados]
    A --> J[9. Ventaja Injusta<br>- Motor de analítica predictiva propio<br>- Integración flexible con ecosistemas de recursos humanos<br>- Experiencia de usuario centrada en el candidato]
```



- ✅ **Descripción de los 3 casos de uso principales**, con el diagrama asociado a cada uno.  

## Diagramas de casos de uso:
🎯 Caso de Uso 1: Publicar una Vacante

Descripción:
El reclutador crea una nueva vacante ingresando el título, descripción, requisitos y nivel de experiencia.
El sistema permite publicar automáticamente la oferta en múltiples canales (portal corporativo, redes sociales, bolsas de trabajo).
El objetivo es ahorrar tiempo en la difusión de vacantes y centralizar la gestión de publicaciones.

Resultado esperado:
La vacante queda visible para los candidatos en los canales seleccionados y queda registrada en el pipeline de reclutamiento.

```mermaid
sequenceDiagram
    participant R as Reclutador
    participant LTS as Sistema LTS
    participant JB as Portales de Empleo
    participant RS as Redes Sociales

    R->>LTS: Crear nueva vacante (título, requisitos, descripción)
    LTS->>LTS: Validar datos y guardar en base de datos
    R->>LTS: Seleccionar canales de publicación
    LTS->>JB: Publicar oferta en portales de empleo
    LTS->>RS: Compartir oferta en redes sociales
    LTS-->>R: Confirmar publicación y mostrar estado
```

Actor principal: Reclutador
Objetivo: Crear y publicar una vacante en distintos canales (portal corporativo, redes sociales y bolsas de empleo).
Valor agregado: Centraliza la publicación y reduce el tiempo para abrir posiciones.

```plantuml
@startuml
left to right direction
actor "Reclutador" as Recruiter
rectangle LTS {
    (Crear Vacante) as UC1
    (Validar Información) as UC2
    (Seleccionar Canales de Publicación) as UC3
    (Publicar Vacante) as UC4
    (Notificar Publicación Exitosa) as UC5
}

Recruiter --> UC1
UC1 --> UC2
UC2 --> UC3
UC3 --> UC4
UC4 --> UC5

@enduml
```


👤 Caso de Uso 2: Gestión de Candidatos y Pipeline

Descripción:
El reclutador revisa las postulaciones recibidas, visualiza los perfiles con parsing automático de CV y mueve al candidato entre las etapas del pipeline (por ejemplo: Aplicación → Entrevista Técnica → Oferta).
También puede dejar notas y puntuaciones colaborativas.

Resultado esperado:
El reclutador mantiene visibilidad total del estado de cada candidato y puede filtrar, evaluar o descartar postulaciones de forma ágil.

```mermaid
sequenceDiagram
    participant C as Candidato
    participant LTS as Sistema LTS
    participant R as Reclutador

    C->>LTS: Envía postulación y CV
    LTS->>LTS: Analiza y parsea el CV (skills, experiencia)
    LTS-->>R: Notifica nueva aplicación
    R->>LTS: Revisa perfil y asigna etapa en pipeline
    R->>LTS: Agrega notas o calificación
    LTS-->>R: Actualiza dashboard del proceso
```
Actores: Candidato, Reclutador
Objetivo: Gestionar postulaciones, revisar CVs, clasificar candidatos y moverlos por las etapas del proceso.
Valor agregado: Mejora la trazabilidad y eficiencia en la selección de talento.

```plantuml
@startuml
left to right direction
actor "Candidato" as Candidate
actor "Reclutador" as Recruiter

rectangle LTS {
    (Enviar Postulación) as UC1
    (Subir CV) as UC2
    (Registrar Datos Personales) as UC3
    (Revisar Candidatos) as UC4
    (Analizar CV) as UC5
    (Actualizar Estado del Pipeline) as UC6
    (Agregar Notas y Evaluaciones) as UC7
}

Candidate --> UC1
UC1 --> UC2
UC1 --> UC3

Recruiter --> UC4
UC4 --> UC5
UC4 --> UC6
UC4 --> UC7

UC6 --> (Mover Candidato a Etapa)
UC7 --> (Guardar Feedback)

@enduml
```



🗓️ Caso de Uso 3: Programar Entrevista

Descripción:
El reclutador selecciona a un candidato y agenda una entrevista en el calendario integrado (Google o Microsoft).
El sistema envía automáticamente invitaciones y recordatorios tanto al candidato como a los entrevistadores.
El objetivo es automatizar la coordinación y reducir los errores o tiempos muertos en la agenda.

Resultado esperado:
La entrevista queda confirmada en el calendario y registrada en la ficha del candidato.

```mermaid
sequenceDiagram
    participant R as Reclutador
    participant LTS as Sistema LTS
    participant C as Candidato
    participant CAL as Calendario Integrado

    R->>LTS: Selecciona candidato y fecha para entrevista
    LTS->>CAL: Sincroniza evento en calendario
    CAL-->>C: Envía invitación de entrevista
    CAL-->>R: Confirma evento agendado
    LTS-->>R: Actualiza estado del candidato a "Entrevista Programada"
```

Actores: Reclutador, Candidato, Sistema de Calendario
Objetivo: Agendar entrevistas sincronizadas con herramientas externas (Google Calendar, Outlook, etc.) y notificar a los involucrados.
Valor agregado: Automatiza la coordinación de agendas y mantiene actualizado el estado del proceso.

```plantuml
@startuml
left to right direction
actor "Reclutador" as Recruiter
actor "Candidato" as Candidate
actor "Sistema de Calendario" as CalendarSystem

rectangle LTS {
    (Seleccionar Candidato para Entrevista) as UC1
    (Definir Fecha y Hora) as UC2
    (Sincronizar con Calendario) as UC3
    (Confirmar Evento) as UC4
    (Enviar Invitaciones) as UC5
    (Actualizar Estado del Candidato) as UC6
}

Recruiter --> UC1
UC1 --> UC2
UC2 --> UC3
UC3 --> CalendarSystem
CalendarSystem --> UC4
UC4 --> UC5
UC5 --> Candidate
UC5 --> Recruiter
UC4 --> UC6

@enduml
```

- ✅ **Modelo de datos** que cubra entidades, atributos (nombre y tipo) y relaciones.  

El modelo de datos de LTS está diseñado para soportar los procesos esenciales del ciclo de reclutamiento: publicación de vacantes, gestión de candidatos, seguimiento del pipeline y programación de entrevistas.
La estructura se compone de entidades principales como Job, Candidate, Application e Interview, que representan las etapas del flujo de contratación.
Además, incorpora componentes adicionales como PipelineStage, ApplicationStageHistory y Evaluation, los cuales permiten configurar y auditar el avance de los candidatos, así como centralizar la retroalimentación de los reclutadores.
El modelo equilibra simplicidad y extensibilidad, asegurando una base sólida para evolucionar hacia integraciones con canales externos de empleo, calendarios y sistemas de evaluación en futuras versiones del producto.

## Modelo de Datos

```mermaid
erDiagram
    USER {
        BIGINT id PK
        VARCHAR username
        VARCHAR email
        VARCHAR password_hash
        VARCHAR role
        DATETIME created_at
    }

    JOB {
        BIGINT id PK
        VARCHAR title
        TEXT description
        VARCHAR location
        VARCHAR employment_type
        VARCHAR status
        DATETIME created_at
        BIGINT recruiter_id FK
    }

    CANDIDATE {
        BIGINT id PK
        VARCHAR first_name
        VARCHAR last_name
        VARCHAR email
        VARCHAR phone
        VARCHAR resume_url
        VARCHAR linkedin_url
        DATETIME created_at
    }

    PIPELINESTAGE {
        BIGINT id PK
        VARCHAR name
        INT order_index
        VARCHAR description
        DATETIME created_at
    }

    APPLICATION {
        BIGINT id PK
        BIGINT job_id FK
        BIGINT candidate_id FK
        BIGINT current_stage_id FK
        VARCHAR status
        DATETIME created_at
        DATETIME updated_at
    }

    APPLICATIONSTAGEHISTORY {
        BIGINT id PK
        BIGINT application_id FK
        BIGINT stage_id FK
        BIGINT changed_by FK
        DATETIME changed_at
        TEXT comments
    }

    EVALUATION {
        BIGINT id PK
        BIGINT application_id FK
        BIGINT evaluator_id FK
        INT score
        TEXT feedback
        DATETIME created_at
    }

    INTERVIEW {
        BIGINT id PK
        BIGINT application_id FK
        DATETIME scheduled_date
        VARCHAR meeting_link
        VARCHAR status
        TEXT feedback
        DATETIME created_at
    }

    JOBCHANNEL {
        BIGINT id PK
        VARCHAR name
        VARCHAR channel_type
        VARCHAR base_url
    }

    JOBPUBLICATION {
        BIGINT id PK
        BIGINT job_id FK
        BIGINT job_channel_id FK
        DATETIME publication_date
        VARCHAR status
    }

    %% Relaciones
    USER ||--o{ JOB : "publica"
    JOB ||--o{ APPLICATION : "tiene"
    CANDIDATE ||--o{ APPLICATION : "postula"
    APPLICATION ||--o{ INTERVIEW : "agenda"
    APPLICATION ||--o{ EVALUATION : "tiene"
    APPLICATION ||--o{ APPLICATIONSTAGEHISTORY : "registra"
    PIPELINESTAGE ||--o{ APPLICATION : "define etapa actual"
    PIPELINESTAGE ||--o{ APPLICATIONSTAGEHISTORY : "se registra cambio"
    USER ||--o{ EVALUATION : "realiza"
    USER ||--o{ APPLICATIONSTAGEHISTORY : "modifica"
    JOB ||--o{ JOBPUBLICATION : "se publica en"
    JOBCHANNEL ||--o{ JOBPUBLICATION : "es canal de"
```

- ✅ **Diseño del sistema a alto nivel**, tanto explicado como diagrama adjunto.  
- ✅ **Diagrama C4** que llegue en profundidad a uno de los componentes del sistema, el que prefieras. 

## Diseño del Sistema a Alto Nivel

Patrón arquitectónico principal
Microservicios (API-first) con comunicación híbrida: REST para request/response y event-driven (mensajería) para integraciones asíncronas y procesos long-running.

Distribución de componentes clave:
- Frontend: SPA (React) que consume APIs públicas y viaja a través de un API Gateway (autenticado). Panels para Reclutadores, Hiring Managers y Candidate Career Site.

- Backend: Conjunto de microservicios alineados por dominio: JobService, CandidateService, ApplicationService, InterviewService, NotificationService, AnalyticsService, AuthService. Cada servicio es independiente, desplegable y con su propia persistencia lógica (base de datos compartida o schema por servicio).

- Persistencia: PostgreSQL como principal RDBMS; Redis para caching y locks; Elasticsearch para búsqueda / CV full-text; Object storage (S3/MinIO) para CVs y assets.

- Infra y mensajes: Kafka o RabbitMQ para eventos del dominio (candidate.applied, interview.scheduled). CI/CD, observabilidad (Prometheus + Grafana), tracing (OpenTelemetry), logging centralizado (ELK).

- Servicios externos: Job Boards (LinkedIn/Indeed), Email/SMS providers, Calendar providers (Google/Outlook), Assessment providers, SSO / Identity Provider.

Patrones de comunicación clave:
- Synchronous REST/JSON para CRUD y workflows de usuario (frontend ↔ API Gateway ↔ microservicios).

- Asynchronous events por Kafka/RabbitMQ para notificaciones, sincronizaciones y procesamientos (parseo CV, scoring, analytics).

- Back-channel: Webhooks para job boards y assessment providers.

- Auth / Security: OAuth2 / OpenID Connect para SSO (Auth0, Keycloak), JWT para propagation de identidad entre servicios.

Escalabilidad / Disponibilidad / Mantenimiento:
- Cada microservicio se escala horizontalmente.
- Uso de CQRS leve: read models indexados en Elasticsearch para búsquedas y performance.
- Versionado de API + backward compatibility.
- Observabilidad y health checks para autoscaling y SRE.

## Diagrama C4 — Nivel 1: Contexto (System Context Diagram)

```mermaid
graph TD
  subgraph ExternalActors
    R[Reclutador]
    HM[Hiring Manager]
    C[Candidate]
    Admin[Administrador TI]
  end

  subgraph ExternalSystems
    JB[Job Boards - LinkedIn, Indeed]
    AuthIDP[Auth Provider  - OIDC / SSO]
    EmailSvc[Email / SMS Provider]
    Calendar[Calendar Providers - Google, Outlook]
    Assess[Assessment Providers]
    HRIS[HRIS / Payroll]
  end

  LTS[LTS ATS System]

  R -->|Usa UI / Publica vacantes| LTS
  HM -->|Revisa candidatos / Aprueba ofertas| LTS
  C -->|Busca vacantes / Aplica| LTS
  Admin -->|Gestiona plataforma| LTS

  LTS -->|Publicar oferta via API| JB
  LTS -->|Enviar correos / notificaciones| EmailSvc
  LTS -->|Agenda entrevistas| Calendar
  LTS -->|Solicita evaluaciones| Assess
  LTS -->|SSO / Autenticación| AuthIDP
  LTS -->|Sincronización empleados| HRIS
```
Notas rápidas: el diagrama muestra LTS como caja central y sus actores humanos + sistemas externos principales. Comunicaciones principales: UI ↔ LTS, LTS ↔ Job Boards, LTS ↔ Email/Calendar/Assessment/HRIS, LTS ↔ Auth Provider.


## Diagrama C4 — Nivel 2: Contenedores (Container Diagram)

```mermaid
graph TD
  subgraph ClientSide
    SPA[Web SPA<br>React]
    Mobile[Mobile App optional]
  end

  subgraph Edge
    APIGW[API Gateway<br>Nginx / Kong / AWS ALB]
    CDN[CDN]
  end

  subgraph Backend
    AuthSvc[Auth Service<br>Keycloak or Spring Security]
    JobSvc[Job Service<br>Spring Boot / Kotlin]
    CandidateSvc[Candidate Service<br>Spring Boot]
    ApplicationSvc[Application Service<br>Spring Boot]
    InterviewSvc[Interview Service<br>Spring Boot]
    NotificationSvc[Notification Service<br>Node.js or Spring Boot]
    AnalyticsSvc[Analytics Service<br>Python / Spark Jobs]
    ParserSvc[CV Parser Worker<br>Python/ML]
  end

  subgraph DataLayer
    Postgres[PostgreSQL]
    Redis[Redis - cache, locks]
    ES[Elasticsearch - search]
    S3[Object Storage - CVs and assets]
    Kafka[Kafka / RabbitMQ - event bus]
  end

  subgraph External
    JobBoards[Job Boards API]
    EmailProvider[Email / SMS Provider]
    CalendarAPI[Google / Microsoft Calendar]
    AssessmentAPI[Assessment Providers]
    HRIS[HRIS / Payroll]
    SSO[External Identity Provider]
  end

  %% client to edge
  SPA -->|HTTPS REST / GraphQL| APIGW
  Mobile -->|HTTPS REST / GraphQL| APIGW

  %% edge to backend
  APIGW -->|Auth / JWT| AuthSvc
  APIGW --> JobSvc
  APIGW --> CandidateSvc
  APIGW --> ApplicationSvc
  APIGW --> InterviewSvc
  APIGW --> NotificationSvc
  APIGW --> AnalyticsSvc

  %% backend internal sync
  JobSvc -->|events| Kafka
  CandidateSvc -->|events| Kafka
  ApplicationSvc -->|events| Kafka
  InterviewSvc -->|events| Kafka

  ParserSvc -->|push parsed data| CandidateSvc
  NotificationSvc -->|send emails| EmailProvider
  InterviewSvc -->|calendar calls| CalendarAPI
  JobSvc -->|publish via APIs| JobBoards
  AnalyticsSvc -->|read events| Kafka

  %% storage
  JobSvc --> Postgres
  CandidateSvc --> Postgres
  ApplicationSvc --> Postgres
  InterviewSvc --> Postgres

  CandidateSvc --> ES
  JobSvc --> ES
  CandidateSvc --> Redis
  NotificationSvc --> S3
  ParserSvc --> S3

  %% external integrations
  APIGW --> SSO
  JobSvc --> JobBoards
  NotificationSvc --> EmailProvider
  InterviewSvc --> CalendarAPI
  ApplicationSvc --> AssessmentAPI
  JobSvc --> HRIS
```
Tecnologías sugeridas
- Frontend: React (TypeScript), SPA.
- API Gateway: Kong / Nginx / AWS ALB.
- Backend: Spring Boot (Java/Kotlin) microservices (aligns con pila Java existente) o Node/TypeScript donde se prefiera.
- DB: PostgreSQL; Cache: Redis; Search: Elasticsearch; Messaging: Kafka; Object store: S3/MinIO.
- CI/CD: GitHub Actions / GitLab CI; Infra: Kubernetes/EKS.
- Escalado: Horizontal con Kubernetes, Vertical con JVM tuning.

## Diagrama C4 — Nivel 3: Componentes del Candidate Service

```mermaid
graph TD
  subgraph CandidateService [Candidate Service - Spring Boot]
    APICtrl[API Controller<br>Spring MVC / Webflux]
    CandidateApp[Application / Domain Layer]
    CandidateRepo[Repository<br>JPA / Hibernate]
    CVParserClient[CV Parser Client<br>gRPC/REST]
    EventPublisher[Event Publisher<br>Kafka Producer]
    CacheLayer[Cache Adapter<br>Redis]
    SearchSync[Search Indexer<br>ES Syncer]
    ScoringEngine[Scoring Engine<br>Rules + ML client]
    DTOMapper[DTO Mapper<br>MapStruct / Jackson]
    AuthClient[Auth Client<br>JWT introspect]
  end

  APICtrl --> CandidateApp
  CandidateApp --> CandidateRepo
  CandidateApp --> CacheLayer
  CandidateApp --> SearchSync
  CandidateApp --> EventPublisher
  CandidateApp --> ScoringEngine
  CandidateApp --> DTOMapper
  CandidateApp --> AuthClient
  CandidateApp --> CVParserClient
  CandidateRepo --> PostgresDB[(PostgreSQL)]
  CacheLayer --> RedisDB[(Redis)]
  SearchSync --> ES[(Elasticsearch)]
  EventPublisher --> Kafka[(Kafka)]
  CVParserClient --> ParserSvc[(CV Parser Worker)]
  ScoringEngine --> MLService[(ML Scoring Service)]
```

Component responsibilities
- API Controller: expone endpoints REST (CRUD candidate, upload CV, get profile). Valida JWT y aplica rate-limits.
- Application / Domain Layer: contiene la lógica de casos de uso (crear candidato, actualizar status, iniciar parseo).
- Repository: abstracción JPA para persistencia en Postgres.

- Cache Adapter: cachea perfiles calientes en Redis, también usado para locks y distributed rate limits.

- Search Indexer: mantiene índice en Elasticsearch para búsquedas por skills y full-text de CVs.

- CV Parser Client: invoca servicio asíncrono que extrae NER/skills; resulta en un evento que el servicio consume para enriquecer el candidato.

- Event Publisher: publica eventos de dominio a Kafka (candidate.created, candidate.updated).

- Scoring Engine: componente que aplica reglas + llamada a ML service para ranking/predictive score.

- DTO Mapper: transforma entidades <-> DTOs.

- Auth Client: verifica identidad / roles usando introspection JWT o token exchange.


Tecnologías por componente:
- API Controller: Spring Boot WebFlux / MVC

- Domain: Java/Kotlin, Spring Boot

- Repository: Spring Data JPA, Hibernate

- Cache: Redis (lettuce/jedis)

- SearchSync: Elastic Java client

- EventPublisher: spring-kafka

- CV Parser: Python microservice with spaCy / ML models (separate service)

- ScoringEngine: lightweight rules (Drools or custom) + external ML microservice (Python)

- Observability: OpenTelemetry traces, Prometheus metrics, Grafana dashboards


Consideraciones de seguridad y cumplimiento (breve):
- Autenticación central (OIDC) y autorización basada en roles (RBAC) y scopes.

- Protección de datos PII: encryption at rest (DB, S3) y in transit (TLS). Data retention configurable y GDPR flows (consent, erasure).

- Auditoría: logging de cambios críticos y audit trail en ApplicationStageHistory.

- Secrets management: Vault / K8s Secrets.


Operacional / DevOps (breve):

- Despliegue en Kubernetes con Helm charts.

- Pipeline CI/CD automático por microservicio.

- Health checks, liveness/readiness, circuit breakers (Resilience4j).

- Backups y recovery para Postgres + ES snapshots.