# LTI - Applicant Tracking System

## 1. Resumen ejecutivo

LTI es un ATS diseñado específicamente para **startups en fase de crecimiento** con equipos de reclutamiento pequeños (1-5 personas). El producto combina la simplicidad operativa que necesitan equipos ágiles con capacidades avanzadas de IA para asistencia en entrevistas.

### Propuesta de valor

- **Reducción del tiempo de contratación en 40%** mediante automatización inteligente de tareas repetitivas y asistencia de IA durante entrevistas.
- **Decisiones de contratación más objetivas** gracias al sistema de feedback colaborativo estructurado.
- **Onboarding en menos de 1 hora** - diseñado para equipos que no tienen tiempo para configuraciones complejas.

### Ventajas competitivas

1. **IA Interview Assistant**: Primer ATS que asiste activamente durante la entrevista con preguntas contextuales y captura automática de notas.
2. **Colaboración sin fricción**: Sistema de feedback que elimina emails y hojas de cálculo, diseñado para decisiones rápidas.
3. **Precio accesible para startups**: Modelo SaaS simple sin costos ocultos ni barreras de entrada.

---

## 2. Funciones principales

### Gestión de candidatos
- Pipeline visual personalizable por posición con drag & drop.
- Perfiles de candidatos unificados (CV parseado + historial de interacciones).
- Importación masiva de CVs con parsing automático.
- Búsqueda y filtrado avanzado por skills, experiencia, educación.

### Gestión de posiciones
- Creación y publicación de ofertas de trabajo.
- Estados del proceso de selección configurables por posición.
- Asignación de responsables (reclutador + hiring manager).

### Asistencia de IA en entrevistas
- **Generación de guías de entrevista** basadas en la descripción del puesto.
- **Asistente en tiempo real** que sugiere preguntas de profundización según respuestas del candidato.
- **Transcripción y resumen automático** de entrevistas.
- **Extracción de competencias evaluadas** y señales positivas/negativas.

### Sistema de feedback colaborativo
- Formularios de evaluación post-entrevista estructurados.
- Matriz de comparación de candidatos.
- Comentarios y conversaciones por candidato.
- Sistema de votación para decisiones finales.

### Programación de entrevistas
- Integración bidireccional con Google Calendar y Outlook.
- Disponibilidad automática de entrevistadores.
- Envío automático de invitaciones con enlaces de videollamada.
- Recordatorios automáticos.

### Reportes y analytics
- Métricas clave: tiempo de contratación, tasa de conversión por etapa, fuentes de candidatos.
- Dashboard ejecutivo con estado de todas las posiciones activas.

---

## 3. Lean Canvas

```mermaid
graph TB
    subgraph "LEAN CANVAS - LTI ATS"
        Problem["<b>PROBLEMA</b><br/>1. Procesos de reclutamiento<br/>caóticos en startups<br/>2. Entrevistas inconsistentes<br/>sin estructura<br/>3. Feedback disperso en<br/>emails y chats<br/>4. Herramientas enterprise<br/>son complejas y caras"]

        Solution["<b>SOLUCIÓN</b><br/>1. ATS simple con IA<br/>2. Asistente de entrevistas<br/>inteligente<br/>3. Feedback colaborativo<br/>centralizado<br/>4. Setup en < 1 hora"]

        UVP["<b>PROPUESTA ÚNICA</b><br/>El único ATS que te<br/>asiste durante la<br/>entrevista en tiempo<br/>real y centraliza<br/>decisiones de hiring"]

        Advantage["<b>VENTAJA INJUSTA</b><br/>- Motor de IA específico<br/>para entrevistas<br/>- UX optimizada para<br/>equipos de 1-5<br/>- Time-to-value < 1 día"]

        Segments["<b>SEGMENTOS</b><br/>Startups tech en<br/>Serie A/B con:<br/>- 10-100 empleados<br/>- Hiring activo<br/>- Equipo HR: 1-5"]

        Channels["<b>CANALES</b><br/>1. Product-led growth<br/>2. Content marketing<br/>3. Community en Slack<br/>4. Partnerships con VCs"]

        Cost["<b>ESTRUCTURA COSTOS</b><br/>- Desarrollo producto<br/>- Infraestructura cloud<br/>- APIs de IA (OpenAI)<br/>- Marketing digital"]

        Revenue["<b>FUENTES INGRESO</b><br/>SaaS Subscription:<br/>- Plan Starter: 99 USD/mes<br/>- Plan Growth: 249 USD/mes<br/>- Plan Scale: 499 USD/mes<br/>(facturación anual)"]

        Metrics["<b>MÉTRICAS CLAVE</b><br/>- MRR/ARR<br/>- Churn rate<br/>- Time-to-first-hire<br/>- NPS<br/>- Usuarios activos semanales"]
    end

    Problem -.-> Solution
    Solution -.-> UVP
    UVP -.-> Advantage
    UVP -.-> Segments
    Segments -.-> Channels
    Solution -.-> Cost
    Segments -.-> Revenue
    Revenue -.-> Metrics
```

### Explicación del modelo

**Problema**: Startups con equipos pequeños sufren procesos de reclutamiento desorganizados. Las herramientas enterprise (Greenhouse, Lever) son sobredimensionadas y caras. Las entrevistas carecen de estructura y el feedback se pierde en emails.

**Solución**: ATS ligero con IA integrada que asiste durante entrevistas, centraliza feedback y permite setup rápido sin consultores.

**Propuesta única**: Ningún ATS actual asiste en tiempo real durante la entrevista. LTI combina simplicidad operativa con IA contextual.

**Segmentos**: Startups tech (Serie A/B) con crecimiento activo que necesitan contratar rápido pero no tienen procesos maduros de HR.

**Canales**: Crecimiento liderado por producto (freemium/trial), contenido educativo sobre hiring, y partnerships con VCs que recomiendan a sus portfolio companies.

**Ingresos**: Modelo SaaS con tres tiers según volumen de contratación y features avanzados (analytics, integraciones enterprise).

**Métricas**: Foco en retención (churn), adopción real (usuarios activos) y value delivery (reducción tiempo de contratación).

---

## 4. Casos de uso principales

### Caso de uso 1: Conducir entrevista con asistencia de IA

**Descripción**: Un reclutador realiza una entrevista técnica con un candidato a desarrollador senior. Durante la conversación, el AI Interview Assistant sugiere preguntas de profundización, toma notas automáticamente y genera un resumen estructurado al finalizar.

**Actores**: Reclutador, Candidato, Sistema de IA

**Flujo**:

```mermaid
flowchart TD
    Start([Reclutador inicia entrevista]) --> A[Sistema carga perfil<br/>del candidato y job description]
    A --> B[IA genera guía de entrevista<br/>con preguntas sugeridas]
    B --> C[Reclutador hace pregunta<br/>de la guía]
    C --> D{Candidato<br/>responde}
    D --> E[IA transcribe respuesta<br/>en tiempo real]
    E --> F[IA analiza respuesta y sugiere<br/>pregunta de profundización]
    F --> G{Reclutador quiere<br/>continuar?}
    G -->|Sí| C
    G -->|No| H[Reclutador finaliza entrevista]
    H --> I[IA genera resumen:<br/>- Competencias evaluadas<br/>- Señales positivas/negativas<br/>- Puntos destacados]
    I --> J[Sistema guarda transcripción<br/>y resumen en perfil candidato]
    J --> End([Reclutador completa<br/>formulario de feedback])
```

**Valor**: Reduce tiempo de preparación de entrevistas en 80%, elimina toma manual de notas, y estandariza evaluaciones.

---

### Caso de uso 2: Toma de decisión colaborativa sobre candidato

**Descripción**: Después de que 3 personas entrevistan a un candidato (reclutador, tech lead, founder), el equipo necesita decidir si avanzar a oferta. El sistema centraliza todos los feedbacks y facilita la decisión.

**Actores**: Reclutador, Hiring Manager, Entrevistadores, Sistema

**Flujo**:

```mermaid
flowchart TD
    Start([3 entrevistas completadas]) --> A{Todos los entrevistadores<br/>completaron feedback?}
    A -->|No| B[Sistema envía recordatorio<br/>automático]
    B --> A
    A -->|Sí| C[Sistema agrega feedbacks<br/>en perfil de candidato]
    C --> D[Reclutador revisa matriz<br/>de evaluación consolidada]
    D --> E{Evaluaciones<br/>alineadas?}
    E -->|Sí, positivas| F[Reclutador inicia votación:<br/>Avanzar a oferta?]
    E -->|No, mixtas| G[Reclutador abre thread<br/>de discusión]
    G --> H[Equipo comenta y debate<br/>en tiempo real]
    H --> F
    E -->|Sí, negativas| I[Reclutador rechaza candidato<br/>con feedback automático]
    F --> J{Mayoría vota<br/>a favor?}
    J -->|Sí| K[Candidato pasa a etapa<br/>Offer]
    J -->|No| L[Candidato pasa a etapa<br/>On Hold]
    K --> End1([Sistema notifica a candidato])
    L --> End2([Sistema archiva para<br/>futura revisión])
    I --> End3([Email de rechazo<br/>personalizado])
```

**Valor**: Elimina emails de "qué te pareció X candidato", reduce tiempo de decisión de días a horas, y documenta el razonamiento.

---

### Caso de uso 3: Programar entrevista con sincronización de calendarios

**Descripción**: Un reclutador necesita agendar una entrevista técnica con disponibilidad de 2 entrevistadores internos y el candidato. El sistema encuentra slots compatibles automáticamente.

**Actores**: Reclutador, Candidato, Entrevistadores, Integración de Calendario

**Flujo**:

```mermaid
flowchart TD
    Start([Reclutador mueve candidato<br/>a etapa Interview]) --> A[Sistema detecta tipo de<br/>entrevista configurada<br/>Tech Interview: 2 entrevistadores]
    A --> B[Reclutador selecciona<br/>entrevistadores del equipo]
    B --> C[Sistema consulta calendarios<br/>vía Google Calendar API]
    C --> D[Sistema identifica slots<br/>disponibles para ambos<br/>próximos 7 días]
    D --> E[Reclutador selecciona<br/>3 opciones de horario]
    E --> F[Sistema envía email a candidato<br/>con link de self-scheduling]
    F --> G{Candidato elige<br/>horario}
    G --> H[Sistema crea evento en<br/>calendarios de todos]
    H --> I[Sistema genera link de<br/>videollamada automático]
    I --> J[Sistema envía confirmación<br/>con agenda de la entrevista]
    J --> K[24h antes: recordatorio<br/>automático a todos]
    K --> L[1h antes: notificación push<br/>con link de videollamada]
    L --> End([Entrevista se realiza])
```

**Valor**: Reduce emails de coordinación de 8-12 a cero, elimina scheduling de 2 días a 2 minutos, y previene no-shows con recordatorios.

---

## 5. Modelo de datos

### Entidades principales

#### **User**
- `id`: UUID (PK)
- `email`: String (unique)
- `name`: String
- `role`: Enum (Admin, Recruiter, Hiring Manager, Interviewer)
- `avatar_url`: String (nullable)
- `created_at`: Timestamp
- `last_login`: Timestamp

#### **JobPosition**
- `id`: UUID (PK)
- `title`: String
- `description`: Text
- `department`: String
- `employment_type`: Enum (Full-time, Part-time, Contract)
- `seniority`: Enum (Junior, Mid, Senior, Lead)
- `status`: Enum (Draft, Active, Paused, Closed)
- `recruiter_id`: UUID (FK → User)
- `hiring_manager_id`: UUID (FK → User)
- `created_at`: Timestamp
- `closed_at`: Timestamp (nullable)

#### **Candidate**
- `id`: UUID (PK)
- `first_name`: String
- `last_name`: String
- `email`: String (unique)
- `phone`: String (nullable)
- `linkedin_url`: String (nullable)
- `resume_url`: String
- `parsed_resume`: JSON (skills, experience, education)
- `source`: Enum (LinkedIn, Referral, Direct, Agency)
- `created_at`: Timestamp

#### **Application**
- `id`: UUID (PK)
- `candidate_id`: UUID (FK → Candidate)
- `job_position_id`: UUID (FK → JobPosition)
- `current_stage_id`: UUID (FK → Stage)
- `applied_at`: Timestamp
- `last_activity`: Timestamp
- `status`: Enum (Active, Hired, Rejected, Withdrawn)

#### **Stage**
- `id`: UUID (PK)
- `job_position_id`: UUID (FK → JobPosition)
- `name`: String (ej: "Phone Screen", "Technical", "Final")
- `order`: Integer
- `type`: Enum (Review, Interview, Assignment, Offer)

#### **Interview**
- `id`: UUID (PK)
- `application_id`: UUID (FK → Application)
- `stage_id`: UUID (FK → Stage)
- `scheduled_at`: Timestamp
- `duration_minutes`: Integer
- `meeting_url`: String (nullable)
- `calendar_event_id`: String (ID externo de Google Calendar)
- `status`: Enum (Scheduled, Completed, Cancelled, No-show)
- `ai_transcript`: Text (nullable)
- `ai_summary`: JSON (nullable)

#### **InterviewParticipant**
- `id`: UUID (PK)
- `interview_id`: UUID (FK → Interview)
- `user_id`: UUID (FK → User)
- `role`: Enum (Interviewer, Observer)

#### **Feedback**
- `id`: UUID (PK)
- `interview_id`: UUID (FK → Interview)
- `author_id`: UUID (FK → User)
- `rating`: Integer (1-5)
- `recommendation`: Enum (Strong Yes, Yes, Maybe, No, Strong No)
- `strengths`: Text
- `concerns`: Text
- `notes`: Text
- `submitted_at`: Timestamp

#### **Comment**
- `id`: UUID (PK)
- `application_id`: UUID (FK → Application)
- `author_id`: UUID (FK → User)
- `content`: Text
- `created_at`: Timestamp
- `parent_id`: UUID (FK → Comment, nullable, para threads)

#### **AIInterviewGuide**
- `id`: UUID (PK)
- `interview_id`: UUID (FK → Interview)
- `suggested_questions`: JSON (array de objetos con pregunta y contexto)
- `generated_at`: Timestamp

### Diagrama Entidad-Relación

```mermaid
erDiagram
    User ||--o{ JobPosition : "recruiter"
    User ||--o{ JobPosition : "hiring_manager"
    User ||--o{ InterviewParticipant : "participates"
    User ||--o{ Feedback : "writes"
    User ||--o{ Comment : "authors"

    JobPosition ||--o{ Application : "receives"
    JobPosition ||--o{ Stage : "has"

    Candidate ||--o{ Application : "applies"

    Application ||--o{ Interview : "has"
    Application ||--o{ Comment : "receives"
    Application }o--|| Stage : "current"

    Stage ||--o{ Interview : "in"

    Interview ||--o{ InterviewParticipant : "has"
    Interview ||--o{ Feedback : "generates"
    Interview ||--|| AIInterviewGuide : "has"

    User {
        UUID id PK
        String email
        String name
        Enum role
        String avatar_url
        Timestamp created_at
    }

    JobPosition {
        UUID id PK
        String title
        Text description
        Enum status
        UUID recruiter_id FK
        UUID hiring_manager_id FK
        Timestamp created_at
    }

    Candidate {
        UUID id PK
        String first_name
        String last_name
        String email
        String resume_url
        JSON parsed_resume
        Enum source
    }

    Application {
        UUID id PK
        UUID candidate_id FK
        UUID job_position_id FK
        UUID current_stage_id FK
        Enum status
        Timestamp applied_at
    }

    Stage {
        UUID id PK
        UUID job_position_id FK
        String name
        Integer order
        Enum type
    }

    Interview {
        UUID id PK
        UUID application_id FK
        UUID stage_id FK
        Timestamp scheduled_at
        String meeting_url
        Enum status
        Text ai_transcript
        JSON ai_summary
    }

    InterviewParticipant {
        UUID id PK
        UUID interview_id FK
        UUID user_id FK
        Enum role
    }

    Feedback {
        UUID id PK
        UUID interview_id FK
        UUID author_id FK
        Integer rating
        Enum recommendation
        Text strengths
        Text concerns
        Timestamp submitted_at
    }

    Comment {
        UUID id PK
        UUID application_id FK
        UUID author_id FK
        Text content
        Timestamp created_at
        UUID parent_id FK
    }

    AIInterviewGuide {
        UUID id PK
        UUID interview_id FK
        JSON suggested_questions
        Timestamp generated_at
    }
```

---

## 6. Diseño del sistema (Arquitectura general)

### Visión de alto nivel

LTI sigue una arquitectura de **microservicios ligera** con separación clara entre frontend, backend API, servicios de IA, y integraciones externas. El sistema está diseñado para escalar horizontalmente y prioriza la modularidad.

### Principios arquitectónicos

1. **API-first**: Toda funcionalidad expuesta vía REST API documentada.
2. **Event-driven para async**: Notificaciones, emails y procesamiento de IA mediante eventos.
3. **Stateless services**: Permite scaling horizontal sin complejidad.
4. **External AI providers**: Uso de OpenAI API en lugar de modelos propios (MVP).

### Diagrama C4 - Nivel 1 (Contexto del Sistema)

```mermaid
C4Context
    title System Context - LTI ATS

    Person(recruiter, "Recruiter", "Usuario principal que gestiona procesos de selección")
    Person(hiring_manager, "Hiring Manager", "Toma decisiones finales sobre candidatos")
    Person(candidate, "Candidate", "Persona aplicando a posiciones")

    System(lti, "LTI ATS", "Applicant Tracking System con asistencia de IA")

    System_Ext(google_calendar, "Google Calendar", "Sincronización de eventos y disponibilidad")
    System_Ext(outlook, "Outlook Calendar", "Sincronización de eventos")
    System_Ext(openai, "OpenAI API", "Servicios de IA: transcripción, análisis, generación")
    System_Ext(email_service, "SendGrid", "Envío transaccional de emails")
    System_Ext(storage, "AWS S3", "Almacenamiento de CVs y archivos")

    Rel(recruiter, lti, "Gestiona candidatos y posiciones", "HTTPS")
    Rel(hiring_manager, lti, "Revisa candidatos y da feedback", "HTTPS")
    Rel(candidate, lti, "Aplica y selecciona horarios de entrevista", "HTTPS")

    Rel(lti, google_calendar, "Lee/escribe eventos", "Calendar API")
    Rel(lti, outlook, "Lee/escribe eventos", "Graph API")
    Rel(lti, openai, "Transcribe, resume, genera preguntas", "REST API")
    Rel(lti, email_service, "Envía notificaciones y confirmaciones", "SMTP/API")
    Rel(lti, storage, "Almacena/recupera archivos", "S3 API")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

### Diagrama C4 - Nivel 2 (Contenedores)

```mermaid
C4Container
    title Container Diagram - LTI ATS

    Person(user, "User", "Recruiter/Manager/Candidate")

    Container(web_app, "Web Application", "React SPA", "Interfaz de usuario responsive")
    Container(api_gateway, "API Gateway", "Node.js/Express", "Punto de entrada único, autenticación JWT")

    Container(core_service, "Core Service", "Node.js", "Gestión de candidatos, posiciones, aplicaciones")
    Container(interview_service, "Interview Service", "Node.js", "Lógica de entrevistas y scheduling")
    Container(ai_service, "AI Service", "Python/FastAPI", "Orquestación de llamadas a IA, procesamiento")
    Container(notification_service, "Notification Service", "Node.js", "Emails, reminders, webhooks")

    ContainerDb(database, "Database", "PostgreSQL", "Datos transaccionales")
    ContainerDb(cache, "Cache", "Redis", "Sesiones, rate limiting, jobs queue")
    ContainerDb(file_storage, "File Storage", "AWS S3", "CVs, transcripciones")

    System_Ext(calendar_apis, "Calendar APIs", "Google/Outlook")
    System_Ext(openai_api, "OpenAI API", "GPT-4, Whisper")
    System_Ext(email_api, "SendGrid API", "Email delivery")

    Rel(user, web_app, "Uses", "HTTPS")
    Rel(web_app, api_gateway, "Calls", "REST/JSON")

    Rel(api_gateway, core_service, "Routes requests", "HTTP")
    Rel(api_gateway, interview_service, "Routes requests", "HTTP")
    Rel(api_gateway, ai_service, "Routes requests", "HTTP")

    Rel(core_service, database, "Reads/Writes", "SQL")
    Rel(interview_service, database, "Reads/Writes", "SQL")
    Rel(interview_service, calendar_apis, "Syncs events", "REST")
    Rel(interview_service, cache, "Enqueues jobs", "Redis Queue")

    Rel(ai_service, openai_api, "Calls", "REST")
    Rel(ai_service, database, "Reads/Writes", "SQL")
    Rel(ai_service, file_storage, "Reads transcripts", "S3 API")

    Rel(notification_service, cache, "Consumes jobs", "Redis Queue")
    Rel(notification_service, email_api, "Sends emails", "REST")
    Rel(notification_service, database, "Reads data", "SQL")

    Rel(core_service, file_storage, "Stores/retrieves CVs", "S3 API")

    UpdateLayoutConfig($c4ShapeInRow="2", $c4BoundaryInRow="1")
```

### Descripción de contenedores

**Web Application (React SPA)**:
- Interfaz de usuario moderna con React + TypeScript.
- Tailwind CSS para estilos, React Query para state management.
- WebSocket connection para updates en tiempo real (comentarios, notificaciones).

**API Gateway**:
- Autenticación JWT con refresh tokens.
- Rate limiting y validación de requests.
- Routing a microservicios internos.

**Core Service**:
- CRUD de entidades principales: Users, Candidates, Applications, JobPositions.
- Lógica de negocio para pipeline de candidatos.
- Parsing de CVs usando librerías especializadas.

**Interview Service**:
- Scheduling de entrevistas con integración de calendarios.
- Gestión de disponibilidad y conflicts.
- Generación de links de videollamada (Google Meet via API).

**AI Service**:
- Orquestación de llamadas a OpenAI (GPT-4 para generación, Whisper para transcripción).
- Generación de guías de entrevista basadas en job description.
- Análisis de transcripciones para extracción de competencias.
- Resúmenes automáticos de entrevistas.

**Notification Service**:
- Worker que procesa cola de eventos (Redis Queue).
- Templates de emails transaccionales.
- Recordatorios automáticos 24h y 1h antes de entrevistas.

**Database (PostgreSQL)**:
- Almacenamiento relacional para entidades del dominio.
- Índices optimizados para queries frecuentes (búsqueda de candidatos).

**Cache (Redis)**:
- Sesiones de usuario.
- Job queue para tareas asíncronas.
- Rate limiting data.

---

## 7. Profundización: AI Service

### Responsabilidad

El **AI Service** es el componente diferenciador de LTI. Su función principal es **asistir en tiempo real durante entrevistas** y **generar insights automáticos** para reducir carga cognitiva de reclutadores.

### Funcionalidades clave

1. **Generación de guías de entrevista**: Basado en job description y perfil del candidato, genera preguntas estructuradas por competencia.
2. **Transcripción en tiempo real**: Convierte audio de entrevista a texto usando Whisper API.
3. **Sugerencias contextuales**: Analiza respuestas del candidato y sugiere follow-up questions.
4. **Resumen automático**: Al finalizar, genera reporte estructurado con competencias evaluadas, señales positivas/negativas, y recomendaciones.
5. **Extracción de competencias**: Identifica skills técnicos y soft skills mencionados durante la entrevista.

### Diagrama C4 - Nivel 3 (Componentes del AI Service)

```mermaid
C4Component
    title Component Diagram - AI Service

    Container_Ext(api_gateway, "API Gateway", "Express", "Enruta requests autenticados")
    Container_Ext(interview_service, "Interview Service", "Node.js", "Gestiona entrevistas")

    Component(interview_guide_controller, "Interview Guide Controller", "FastAPI Endpoint", "POST /ai/interview-guide")
    Component(realtime_assistant_controller, "Realtime Assistant Controller", "FastAPI Endpoint", "POST /ai/realtime-suggest")
    Component(transcription_controller, "Transcription Controller", "FastAPI Endpoint", "POST /ai/transcribe")
    Component(summary_controller, "Summary Controller", "FastAPI Endpoint", "POST /ai/summarize")

    Component(prompt_engine, "Prompt Engineering Module", "Python", "Construye prompts contextuales para GPT-4")
    Component(openai_client, "OpenAI Client", "Python SDK", "Wrapper para llamadas a OpenAI API")
    Component(competency_extractor, "Competency Extractor", "Python/NLP", "Identifica skills en texto usando patterns")
    Component(cache_manager, "Cache Manager", "Redis Client", "Cachea resultados de IA costosos")

    ComponentDb(database, "PostgreSQL", "DB Connection", "Lee job descriptions, candidatos")

    System_Ext(openai_api, "OpenAI API", "GPT-4, Whisper")
    Container_Ext(redis, "Redis", "Cache")

    Rel(api_gateway, interview_guide_controller, "Routes request", "HTTP")
    Rel(api_gateway, realtime_assistant_controller, "Routes request", "HTTP")
    Rel(api_gateway, transcription_controller, "Routes request", "HTTP")
    Rel(api_gateway, summary_controller, "Routes request", "HTTP")

    Rel(interview_guide_controller, prompt_engine, "Requests prompt", "")
    Rel(realtime_assistant_controller, prompt_engine, "Requests prompt", "")
    Rel(summary_controller, prompt_engine, "Requests prompt", "")

    Rel(prompt_engine, database, "Fetches job data", "SQL")
    Rel(prompt_engine, openai_client, "Sends prompt", "")

    Rel(transcription_controller, openai_client, "Sends audio", "")

    Rel(openai_client, openai_api, "API calls", "HTTPS/JSON")
    Rel(openai_client, cache_manager, "Checks cache", "")

    Rel(cache_manager, redis, "Get/Set", "Redis Protocol")

    Rel(summary_controller, competency_extractor, "Extract competencies", "")
    Rel(competency_extractor, database, "Matches against job skills", "SQL")

    UpdateLayoutConfig($c4ShapeInRow="3", $c4BoundaryInRow="1")
```

### Descripción de componentes

#### **Interview Guide Controller**
- **Input**: `interview_id`, opcionalmente `focus_areas` (ej: "leadership", "system design")
- **Output**: JSON con array de preguntas categorizadas por competencia
- **Lógica**:
  1. Obtiene job description y perfil del candidato de DB.
  2. Construye prompt usando Prompt Engine.
  3. Llama a GPT-4 para generar 8-12 preguntas estructuradas.
  4. Cachea resultado por 24h (las guías no cambian frecuentemente).

#### **Realtime Assistant Controller**
- **Input**: `interview_id`, `candidate_last_response` (texto transcrito)
- **Output**: JSON con 2-3 follow-up questions sugeridas
- **Lógica**:
  1. Recupera contexto de la conversación actual (últimas 5 preguntas/respuestas).
  2. Analiza respuesta con GPT-4 identificando señales de profundización.
  3. Genera preguntas de follow-up contextuales.
  4. **Streaming response** para baja latencia (Server-Sent Events).

#### **Transcription Controller**
- **Input**: Audio file (upload) o audio stream (WebSocket)
- **Output**: Texto transcrito con timestamps
- **Lógica**:
  1. Valida formato de audio (MP3, WAV, WebM).
  2. Envía a Whisper API de OpenAI.
  3. Procesa response y segmenta por speaker si es posible (usando diarization básico).
  4. Retorna JSON con array de segments: `{speaker, text, timestamp}`.

#### **Summary Controller**
- **Input**: `interview_id`
- **Output**: JSON con estructura:
  ```json
  {
    "overall_impression": "string",
    "competencies_evaluated": [
      {"name": "Problem Solving", "rating": 4, "evidence": "..."}
    ],
    "strengths": ["..."],
    "concerns": ["..."],
    "recommendation": "Yes | Maybe | No",
    "key_quotes": ["..."]
  }
  ```
- **Lógica**:
  1. Obtiene transcripción completa de la entrevista.
  2. Extrae competencias con Competency Extractor.
  3. Construye prompt de análisis con job description como referencia.
  4. GPT-4 genera resumen estructurado.
  5. Almacena resultado en `Interview.ai_summary` (JSON column).

#### **Prompt Engineering Module**
- Centraliza construcción de prompts para consistencia.
- Usa templates con variables: `{job_title}`, `{candidate_name}`, `{years_experience}`, etc.
- Implementa few-shot examples para mejorar calidad de outputs.
- Ejemplo de template para guía:
  ```
  You are an expert technical interviewer hiring for a {job_title} position.

  Job Description:
  {job_description}

  Candidate Background:
  {candidate_summary}

  Generate 10 interview questions that:
  1. Assess core competencies: {required_skills}
  2. Are behavior-based (STAR format)
  3. Include follow-up probes
  4. Range from technical to cultural fit

  Format as JSON array with: question, competency, difficulty_level
  ```

#### **OpenAI Client**
- Wrapper robusto con retry logic (exponential backoff).
- Manejo de rate limits de OpenAI API.
- Logging de uso para tracking de costos.
- Fallback a cache si API está caída (para queries repetitivas).

#### **Competency Extractor**
- Usa regex patterns + keyword matching para identificar skills técnicos en transcripciones.
- Database de 500+ skills comunes en tech (ej: "React", "Kubernetes", "agile methodology").
- Scoring basado en frecuencia y contexto de mención.
- Output: `[{skill: "React", mentions: 3, context: "Used React hooks extensively"}]`

#### **Cache Manager**
- Cachea resultados costosos:
  - Interview guides (TTL: 24h)
  - Summaries ya generados (no expiración)
  - Transcripciones procesadas (TTL: 7 días)
- Key structure: `ai:{type}:{entity_id}` (ej: `ai:guide:interview-123`)
- Reduce costos de OpenAI API en 30-40% para queries repetidas.

### Flujo de datos ejemplo: Asistencia en tiempo real

```mermaid
sequenceDiagram
    participant I as Interviewer (Frontend)
    participant AG as API Gateway
    participant AI as AI Service
    participant PE as Prompt Engine
    participant OAI as OpenAI API
    participant DB as Database

    Note over I: Durante entrevista, candidato responde
    I->>AG: POST /ai/realtime-suggest<br/>{interview_id, candidate_response}
    AG->>AI: Forward authenticated request

    AI->>DB: Fetch interview context<br/>(last 5 Q&A pairs)
    DB-->>AI: Returns conversation history

    AI->>PE: buildRealtimePrompt(context, latest_response)
    PE-->>AI: Prompt with conversation context

    AI->>OAI: POST /chat/completions<br/>{model: gpt-4, stream: true}

    loop Streaming response
        OAI-->>AI: Chunk of suggested question
        AI-->>AG: Server-Sent Event
        AG-->>I: Stream to frontend
    end

    Note over I: Interviewer sees suggestions<br/>in real-time (< 2 seconds)

    I->>AG: POST /feedback/accept-suggestion<br/>(optional: tracking analytics)
```

### Consideraciones de escalabilidad

- **Async processing**: Summaries y transcripciones largas se procesan en background jobs.
- **Rate limiting**: Max 10 requests/min por interview para proteger costos de OpenAI.
- **Cost optimization**: Usar GPT-3.5-turbo para tareas simples (follow-up suggestions), GPT-4 solo para generation y summaries.
- **Monitoring**: Track tokens consumidos, latencia de OpenAI, y cache hit rate.

### Seguridad y privacidad

- Transcripciones encriptadas en reposo (S3 encryption).
- No se almacenan conversaciones indefinidamente: TTL de 90 días después de cierre de posición.
- Candidatos pueden solicitar eliminación de datos (GDPR compliance).
- No se entrena modelo custom con datos de clientes (uso de OpenAI API directamente).

---

## Conclusión

LTI está diseñado para ser el **ATS más eficiente para startups en crecimiento**, combinando simplicidad operativa con asistencia de IA avanzada. El MVP se enfoca en:

1. **Reducir fricción** en procesos de reclutamiento caóticos.
2. **Asistir activamente** durante entrevistas con IA contextual.
3. **Centralizar decisiones** mediante feedback colaborativo.
4. **Integrar calendarios** para eliminar coordinación manual.

La arquitectura modular permite iterar rápidamente en funcionalidades de IA mientras se mantiene un core sólido de gestión de candidatos. El modelo SaaS de suscripción asegura predictibilidad de ingresos y alineación de incentivos (más contrataciones exitosas = mayor retención).

**Next steps para desarrollo**:
1. Implementar Core Service + Database schema (semanas 1-2)
2. Integración básica con Google Calendar (semana 3)
3. MVP de AI Service con generación de guías (semana 4)
4. Frontend con pipeline visual y perfiles de candidatos (semanas 5-6)
5. Beta privada con 5 startups para feedback (semana 7)
