# 🧩 LTI-FJLTT.md  
### Sistema ATS — *Larga Cola de Talento e Integración*  
**Máster AI4Devs — Práctica de Diseño de Sistemas**

---

## 01️⃣ Lean Canvas — *Visión general del producto*

### 🧠 Explicación y Decisiones

El Lean Canvas define la estrategia inicial del ATS **LTI (Larga Cola de Talento e Integración)**.  
Su propósito es priorizar problemas, soluciones y ventajas competitivas para el segmento B2B mid-market.  
El objetivo central es reducir la carga operativa de los recruiters, mejorar la colaboración con los hiring managers y automatizar tareas repetitivas mediante IA responsable.  

El MVP se centrará en parsing y matching IA, flujo visual de pipeline, colaboración en tiempo real y cumplimiento RGPD.  
La diferenciación se logra con una UX moderna, automatizaciones simples y explicabilidad IA nativa.  
El modelo SaaS por vacantes activas reduce fricción comercial y facilita escalado por cliente.  
Azure se selecciona por su integración con ecosistemas empresariales y servicios gestionados de seguridad (Entra ID, Key Vault, Defender).

```mermaid
graph TD
A[**Problema**] -->|1| B[**Segmentos de Clientes**]
A -->|2| C[**Propuesta de Valor Única**]
C -->|3| D[**Solución**]
D -->|4| E[**Canales**]
E -->|5| F[**Relaciones con Clientes**]
F -->|6| G[**Flujos de Ingresos**]
G -->|7| H[**Estructura de Costes**]
H -->|8| I[**Métricas Clave**]
I -->|9| J[**Ventaja Competitiva**]

classDef box fill:#f5f5f5,stroke:#aaa,stroke-width:1px;
classDef highlight fill:#e6f7ff,stroke:#00aaff,stroke-width:1.5px;

A["**Problema**  
- Procesos dispersos (hojas, correos).  
- Falta de trazabilidad/reporting.  
- Colaboración recruiter–manager ineficiente.  
- Experiencia inconsistente para candidatos.  
- Cumplimiento RGPD complejo."]

B["**Segmentos de Clientes**  
- Mid-market (50–1.000 empleados).  
- RRHH con 3–15 recruiters.  
- Hiring Managers activos.  
- Consultoras medianas."]

C["**Propuesta de Valor Única**  
'ATS colaborativo impulsado por IA responsable,  
que automatiza tareas, mejora experiencia  
y garantiza cumplimiento RGPD.'"]

D["**Solución (MVP)**  
- Pipeline visual + automatizaciones.  
- Parsing/matching/resumen IA.  
- Colaboración real-time (menciones).  
- Portal candidato (estado + RGPD).  
- Métricas: time-to-hire, conversión.  
- Integraciones: Email, Calendario, SSO, Job boards."]

E["**Canales**  
- Ventas B2B directas.  
- Partnerships HR Tech.  
- Integraciones marketplace.  
- Inbound (webinars, guías)."]

F["**Relación con Clientes**  
- Onboarding asistido.  
- Customer Success + Comunidad."]

G["**Ingresos**  
- SaaS mensual (vacantes activas).  
- Add-ons IA premium.  
- Servicios profesionales."]

H["**Costes**  
- Infraestructura Azure.  
- Procesamiento IA.  
- Personal técnico/producto.  
- Marketing/partners."]

I["**Métricas Clave**  
- Time-to-hire.  
- % automatizaciones.  
- Conversión funnel.  
- NPS usuarios.  
- Auditorías RGPD."]

J["**Ventajas Competitivas**  
- IA explicable y controlable.  
- UX colaborativa.  
- Configurable sin código.  
- Cumplimiento RGPD nativo.  
- Integraciones plug & play."]
```

---

## 02️⃣ Casos de Uso Principales

### 🎯 Explicación General

Los tres casos de uso cubren el flujo completo del ATS: publicación de vacantes, gestión del pipeline y evaluación con IA.  
Se eligieron por su valor demostrable en el MVP y su trazabilidad hacia los objetivos del Lean Canvas (eficiencia, colaboración e IA responsable).

```plantuml
@startuml
left to right direction
actor "Recruiter" as R
actor "Hiring Manager" as HM
actor "Candidato" as C

rectangle "Sistema LTI (ATS)" {
  usecase "CU1: Publicar vacante y recibir candidatos" as UC1
  usecase "CU2: Gestionar pipeline de selección" as UC2
  usecase "CU3: Evaluar y seleccionar candidato con IA" as UC3
}

R --> UC1
R --> UC2
R --> UC3
HM --> UC2
HM --> UC3
C --> UC1
@enduml
```

#### CU1 - Publicar vacante y recibir candidatos

Permite crear vacantes y conectar con fuentes externas. Incluye parsing IA y deduplicación.
```plantuml
@startuml
actor Recruiter
participant "Vacantes" as Job
participant "Job Boards" as Board
participant "Motor IA Parsing" as AI
participant "DB" as DB

Recruiter -> Job: Crear vacante
Job -> Board: Publicar
Board -> AI: Enviar CV
AI -> DB: Guardar candidato
@enduml
```

#### CU2 - Gestionar pipeline de selección

Control visual del estado de candidatos, colaboración recruiter–manager y automatizaciones.
```plantuml
@startuml
actor Recruiter
actor HiringManager
participant "Pipeline" as Pipe
participant "Motor Automatización" as Auto
participant "DB" as DB

Recruiter -> Pipe: Mover candidato
Pipe -> Auto: Ejecutar regla
Auto -> HiringManager: Notificar
HiringManager -> Pipe: Feedback
Pipe -> DB: Registrar acción
@enduml
```

#### CU3 - Evaluar y seleccionar candidato con IA

Genera resumen IA, fit score y explicación transparente.
```plantuml
@startuml
actor Recruiter
actor HiringManager
participant "Evaluación" as Eval
participant "Motor IA Matching" as AIM
participant "DB" as DB

Recruiter -> Eval: Solicitar resumen IA
Eval -> AIM: Analizar
AIM --> Eval: Fit Score + Explicación
Eval -> DB: Guardar decisión
@enduml
```

---

## 03️⃣ Modelo de Datos

### 🧱 Explicación del diseño

Basado en los casos CU1–CU3, se estructura en torno a la entidad `Application`, que conecta candidatos y vacantes.  
El modelo sigue principios de normalización, auditabilidad y RGPD.  
Se incluyen tablas para IA (resultados y resúmenes), pipeline y automatizaciones.

```mermaid
erDiagram
USER {
 int Id PK
 string FullName
 string Email
 string Role
}
JOBPOSTING {
 int Id PK
 string Title
 string Department
}
CANDIDATE {
 int Id PK
 string FirstName
 string LastName
 string Email
 bool ConsentRGPD
}
APPLICATION {
 int Id PK
 int CandidateId FK
 int JobPostingId FK
 string Status
 decimal FitScore
}
FEEDBACK {
 int Id PK
 int ApplicationId FK
 int AuthorId FK
 text Comment
 int Score
}
AIMATCHRESULT {
 int Id PK
 int ApplicationId FK
 decimal FitScore
 text Explanation
}
USER ||--o{ JOBPOSTING : crea
JOBPOSTING ||--o{ APPLICATION : recibe
CANDIDATE ||--o{ APPLICATION : envía
APPLICATION ||--o{ FEEDBACK : genera
APPLICATION ||--o| AIMATCHRESULT : tiene
```
---

## 04️⃣ Arquitectura a Alto Nivel (Hexagonal + Azure + SOLID)

### 🧠 Explicación General

Se implementa **Arquitectura Hexagonal** siguiendo **principios SOLID**.  
El dominio queda desacoplado de infraestructura gracias a puertos y adaptadores.  
Azure provee seguridad, escalabilidad y observabilidad integrada.

```plantuml
@startuml
title LTI - Arquitectura Hexagonal

package "Dominio" {
 [Entidades + Servicios de Aplicación]
 [Puertos IN/OUT]
}
package "Adaptadores Entrantes" {
 [REST API]
 [SPA Web]
}
package "Adaptadores Salientes" {
 [PostgreSQL]
 [Blob Storage]
 [Azure OpenAI]
 [Graph API]
 [Service Bus]
}
@enduml
```

### ☁️ Despliegue en Azure (con seguridad)

```plantuml
@startuml
title LTI - Azure Deployment

cloud "Azure" {
 node "Front Door + WAF"
 node "App Service (API)"
 node "Static Web App (SPA)"
 node "SignalR"
 database "PostgreSQL (Private Link)"
 node "Blob Storage (SSE)"
 node "Service Bus/Event Grid"
 node "Azure AI Services"
 node "Entra ID (SSO, MFA)"
 node "Key Vault"
 node "Defender + App Insights"
}
@enduml
```

#### Principales componentes de seguridad Azure
- **Entra ID** para SSO y MFA.  
- **Key Vault** para secretos y Managed Identity.  
- **Private Link / RBAC / DDoS Protection**.  
- **Defender for Cloud + App Insights** para observabilidad y postura de seguridad.

---

## 05️⃣ C4 - Motor de Evaluación/Matching IA

### 🧩 Explicación General

El servicio IA calcula **fit score** candidato–vacante y genera **resúmenes explicables**.  
Está desacoplado del Core ATS y diseñado para trazabilidad, portabilidad y control de costes.

#### C4-Context
```plantuml
@startuml
Person(recruiter, "Recruiter")
System(ats, "Core ATS")
System(aimatch, "Motor IA Evaluación/Matching")
System_Ext(azureai, "Azure OpenAI")

recruiter -> ats : Usa
ats -> aimatch : Solicita fit/resumen
aimatch -> azureai : Inferencias
@enduml
```

#### C4-Container
```plantuml
@startuml
Container(api, "API Core", "ASP.NET")
ContainerDb(pg, "PostgreSQL", "Azure Database")
Container_Boundary(ai, "Servicio IA") {
 Container(orch, "AI Orchestrator", "Worker Service")
 Container(redis, "Redis", "Cache embeddings")
 ContainerDb(pgvec, "pgvector", "Vector Store")
 Container(adapter, "Model Adapter", "Azure OpenAI")
}
api -> orch
orch -> adapter
orch -> pgvec
@enduml
```

#### C4-Component
```plantuml
@startuml
Container_Boundary(ai, "Servicio IA") {
 Component(ing, "Extractor Features")
 Component(embed, "Embedding Generator")
 Component(match, "Matching Engine")
 Component(exp, "Explicador")
 Component(guard, "Guardrails")
 Component(tel, "Telemetry")
}
ing -> embed
embed -> match
match -> exp
exp -> tel
@enduml
```

#### Consideraciones
- **Guardrails**: redacción PII, límites, auditoría.  
- **Telemetría ML**: precisión@K, drift, coste/inferencia.  
- **pgvector + Redis** para búsqueda semántica eficiente.  
- **Portabilidad IA** mediante adaptadores.  
- **Ejecución** on-demand y batch asíncrona vía Service Bus.

---

## ✅ Resumen Ejecutivo
1. ATS **colaborativo e inteligente** con IA explicable.  
2. **Hexagonal**, **SOLID**, **Azure-first**.  
3. **RGPD by design** y seguridad gestionada.  
4. **Casos CU1–CU3** = flujo completo del reclutamiento.  
5. **Modelo de datos** centrado en Application.  
6. **Arquitectura** modular, escalable y auditable.  
7. **Motor IA** portable, medible y ético.  
8. **Telemetría** y métricas integradas.  
9. **Cumplimiento** con RGPD/privacidad.  
10. **Preparado** para multi-tenant y evolución futura.

---

## ❓Cuestiones Abiertas
1. Umbrales de fit score globales o por tenant.  
2. Uso de Cognitive Search desde MVP.  
3. Retención de embeddings alineada a RGPD.  
4. SLA de latencia IA (<2s).  
5. Aprendizaje continuo de ponderaciones.
