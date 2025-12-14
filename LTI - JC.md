# LTI (Live Talent Intelligence) - Documentación de Diseño

## 1. Descripción del Producto y Valor Añadido

**LTI** es un Sistema Operativo de Talento de próxima generación diseñado para transformar el reclutamiento de un proceso administrativo a una ventaja estratégica competitiva. Utiliza una arquitectura "AI-First" y colaboración en tiempo real para eliminar la fricción entre departamentos.

**Valor Añadido y Ventajas Competitivas:**
* **Centralización Radical:** Todo el ciclo de vida ocurre en la plataforma, eliminando emails y hojas de cálculo.
* **Colaboración Síncrona:** "Talent War Room" permite a reclutadores y managers evaluar y votar candidatos en vivo (estilo Google Docs).
* **Arquitectura "AI-First":** La IA no es un plugin; es el núcleo que gestiona el screening, agenda entrevistas y redacta feedback.
* **Equidad Algorítmica:** Motores de búsqueda semántica con "Bias Shield" para reducir sesgos inconscientes.
* **Experiencia Transparente:** Portales de estado en tiempo real para candidatos.

---

## 2. Funcionalidades Principales

1.  **Talent War Room:** Espacio de trabajo compartido para evaluación de perfiles en tiempo real con chat y votación en vivo.
2.  **LTI Autopilot:** Agentes autónomos que negocian calendarios y redactan correos de rechazo o feedback personalizados.
3.  **Smart-Rank con Bias Shield:** Matching semántico (no por keywords) que oculta datos sensibles (nombre, foto) en fases iniciales.
4.  **Generador de Ofertas Dinámico:** Creación, negociación y firma legal de ofertas dentro de la plataforma.
5.  **Predictive Hiring Health:** Analítica que predice cuellos de botella y tiempos de contratación futuros.

---

## 3. Lean Canvas

| Sección | Detalle |
| :--- | :--- |
| **Problema** | • Contratación lenta y burocrática.<br>• Silos de comunicación entre HR y Managers.<br>• Tareas manuales repetitivas.<br>• Mala experiencia del candidato. |
| **Segmentos** | • Startups High-Growth (Series A/B).<br>• Empresas Mid-Market (50-500 empleados).<br>• Agencias de Reclutamiento. |
| **Propuesta de Valor** | **"Contrata al mejor talento en la mitad de tiempo, juntos."**<br>Colaboración en tiempo real + Automatización de IA ética. |
| **Solución** | • SaaS ATS Colaborativo.<br>• IA Integrada (Screening/Scheduling).<br>• Mobile First para managers. |
| **Canales** | • Marketing de Contenidos (Hiring Culture).<br>• Ventas Directas B2B.<br>• Marketplaces (Slack/Teams). |
| **Ingresos** | • Suscripción SaaS B2B (por usuario/vacante).<br>• Freemium para pequeñas empresas.<br>• Enterprise (Custom). |
| **Costos** | • Desarrollo e Infraestructura Cloud (AWS/Azure).<br>• Consumo de APIs LLM (OpenAI).<br>• CAC (Ventas y Marketing). |
| **Métricas Clave** | • Time-to-Hire.<br>• NPS (Recruiter & Candidate).<br>• Automation Rate. |
| **Ventaja Injusta** | • Algoritmo de "Cultural Fit" basado en retención.<br>• UX de consumo masivo (cero curva de aprendizaje). |

---

## 4. Casos de Uso Principales

### Caso 1: Publicación de Oferta con "Generative AI"
El reclutador ingresa parámetros básicos y el sistema genera una Job Description optimizada, permitiendo refinamiento antes de publicar.

```mermaid
sequenceDiagram
    autonumber
    actor Recruiter as 👤 Reclutador
    participant FE as 💻 LTI Frontend
    participant BE as ⚙️ LTI Backend
    participant AI as 🧠 AI Service (LLM)
    participant DB as 🗄️ Database

    Recruiter->>FE: Ingresa: Título, Skills, Seniority
    FE->>BE: POST /api/jobs/generate-draft
    BE->>AI: Prompt: "Generar Job Description..."
    AI-->>BE: Retorna texto (Markdown)
    BE-->>FE: Muestra borrador
    Recruiter->>FE: Clic en "Publicar"
    FE->>BE: POST /api/jobs/publish
    BE->>DB: INSERT JobRecord
    BE-->>FE: Éxito
```

### Caso 2: Smart-Rank (Filtrado Automático)
El sistema recibe el CV, lo procesa asíncronamente con IA para extraer entidades y compararlas semánticamente con la vacante, generando un score de compatibilidad.

```mermaid
sequenceDiagram
    autonumber
    actor Candidate as 👤 Candidato
    participant FE as 💻 Portal Carreras
    participant BE as ⚙️ LTI Backend
    participant AI as 🧠 AI Match Engine
    participant DB as 🗄️ Database

    Candidate->>FE: Carga CV (PDF)
    FE->>BE: POST /api/apply
    BE->>DB: INSERT Application (Status: Received)
    BE-->>FE: 200 OK
    BE->>AI: Trigger Analyze (Async)
    Note right of AI: Extracción + Embedding + Ranking
    AI-->>BE: Retorna: MatchScore + Summary
    BE->>DB: UPDATE Application SET Score=XX
```

### Caso 3: Entrevista Colaborativa (War Room)
Reclutador y Manager comparten una sesión en vivo donde las notas y calificaciones se sincronizan instantáneamente mediante WebSockets.

```mermaid
sequenceDiagram
    autonumber
    actor Recruiter as 👤 Reclutador
    actor Manager as 👤 Hiring Manager
    participant FE as 💻 LTI Frontend
    participant BE as ⚙️ LTI Backend (WS)
    participant DB as 🗄️ Database

    Recruiter->>FE: Abre "Live Interview"
    Manager->>FE: Se une a la sesión
    FE->>BE: WS Connect (Room: 123)
    Recruiter->>FE: Escribe nota
    FE->>BE: WS Send: {type: NOTE}
    par Persistencia y Sync
        BE->>DB: INSERT Note
        BE-->>FE: Broadcast (a todos)
    end
    Manager->>FE: Ve la nota aparecer
```

---

## 5. Modelo de Datos

### Entidades Principales

- **Users:** (Reclutadores, Managers, Admins).
- **Jobs:** Vacantes con descripciones enriquecidas.
- **Candidates:** Perfiles con metadatos parseados (JSONB).
- **Applications:** Tabla transaccional (Candidato <-> Vacante).
- **AI_Assessments:** Resultados del análisis de IA (Score, Summary).
- **Interviews:** Eventos de calendario.
- **Feedback:** Evaluaciones colaborativas.

### Diagrama Entidad-Relación (ERD)

```mermaid
erDiagram
    USERS ||--o{ JOBS : "creates"
    USERS ||--o{ FEEDBACK : "writes"
    
    JOBS ||--o{ APPLICATIONS : "receives"
    
    CANDIDATES ||--o{ APPLICATIONS : "submits"
    CANDIDATES {
        UUID id PK
        string resume_url
        jsonb parsed_data
    }
    
    APPLICATIONS ||--|| AI_ASSESSMENTS : "has"
    APPLICATIONS ||--o{ INTERVIEWS : "triggers"
    APPLICATIONS ||--o{ FEEDBACK : "collects"
    
    AI_ASSESSMENTS {
        decimal match_score
        text summary
        boolean bias_check
    }
```

---

## 6. Diseño del Sistema (Alto Nivel)

Arquitectura: Microservicios Orientados a Eventos. Se utiliza un bus de mensajes para desacoplar las tareas pesadas de IA (OCR, Embeddings) de la experiencia de usuario, y WebSockets para la colaboración en tiempo real.

```mermaid
graph TD
    ClientWeb[🖥️ Web SPA] -->|HTTPS/WSS| Gateway[🛡️ API Gateway]
    
    subgraph Backend
        Gateway --> Auth[🔐 Auth Service]
        Gateway --> Core[⚙️ Core API]
        Gateway --> RT[⚡ WebSocket Service]
    end
    
    subgraph Async Processing
        Core -->|Publish| Queue[📨 Message Broker]
        Queue -->|Consume| AI[🧠 AI Worker]
    end
    
    subgraph Data
        Core --> DB[(🗄️ PostgreSQL)]
        AI --> DB
        AI -->|API| LLM[🤖 OpenAI/Anthropic]
    end
    
    AI -->|Notify| RT
    RT -->|Push| ClientWeb
```

---

## 7. Diagrama C4: Componente (AI Matching Engine)

Zoom-in al funcionamiento interno del worker de IA, mostrando el flujo de tuberías y filtros para procesar candidatos.

```mermaid
graph TD
    subgraph AI_Container [📦 AI Matching Service]
        Consumer[⚙️ Event Consumer] --> Orchestrator[🧠 Orchestrator]
        Orchestrator --> DocParser[📄 Document Parser]
        Orchestrator --> Anonymizer[🛡️ PII Anonymizer]
        Orchestrator --> PromptMgr[📝 Prompt Manager]
        Orchestrator --> LLMClient[🔌 LLM Gateway]
        Orchestrator --> Repo[💾 Assessment Repo]
    end
    
    subgraph External
        MsgBroker(📨 Queue) --> Consumer
        LLMClient --> OpenAI(🤖 External API)
        Repo --> MainDB[(🗄️ DB)]
    end
```