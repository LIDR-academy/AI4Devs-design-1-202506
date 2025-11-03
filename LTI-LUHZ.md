# LTI – Applicant Tracking System del Futuro

## 1. Descripción breve del software LTI

**LTI** es una plataforma **ATS (Applicant Tracking System)** moderna diseñada para **digitalizar y automatizar el ciclo completo de reclutamiento**, desde la publicación de vacantes hasta la contratación, combinando **automatización no-code, IA explicable y colaboración inteligente** entre reclutadores, managers y candidatos.

### Valor añadido de LTI
- Automatiza tareas repetitivas (screening, agendamiento, comunicaciones) mediante IA.  
- Fomenta la colaboración fluida entre reclutadores y managers con una interfaz simple, tipo “inbox de decisiones”.  
- Reduce tiempos de contratación mediante flujos inteligentes, recordatorios automáticos y agendamiento 1-click.  
- Ofrece transparencia total en el proceso, tanto para candidatos como para equipos de contratación.  
- IA explicable y ética, que prioriza la transparencia, la detección de sesgos y el control humano.

### Ventajas competitivas frente a otros ATS

| Ventaja | Diferencial LTI |
|----------|-----------------|
| Automatización no-code real | Motor visual que permite crear flujos sin programar (reglas tipo "if/then") |
| IA explicable | Cada decisión o ranking de candidatos viene con una justificación legible |
| Experiencia Manager-first | Interfaz centrada en managers con resúmenes y acciones rápidas |
| Integración total | Conectores nativos (Slack, Google, HRIS, job boards) desde el MVP |
| Implementación rápida | Plantillas por industria y flujo guiado (Time-to-value reducido) |

---

## 2. Funciones principales (MVP)

| Área | Funcionalidad clave | Descripción |
|------|---------------------|-------------|
| Gestión de vacantes y pipeline | Creación de vacantes, etapas y asignación de roles | Core del ATS: organiza el proceso de principio a fin |
| Publicación multicanal | Envío automático a portales y redes (LinkedIn, Indeed, etc.) | Amplía el alcance sin duplicar esfuerzos |
| Automatización no-code | Constructor visual de reglas | Permite definir acciones automáticas: mover etapas, enviar recordatorios, notificar al manager |
| IA asistida y explicable | Screening inteligente + generación de textos | Resume CVs, genera descripciones de puesto, correos o mensajes con IA explicable |
| Scheduling inteligente | Integración con calendarios y reprogramación automática | Reduce el tiempo y errores de coordinación de entrevistas |
| Colaboración estructurada | Feedback guiado y scorecards compartidos | Mejora la calidad y objetividad de las evaluaciones |
| Portal del candidato | Seguimiento del proceso + e-signature de oferta | Mejora la experiencia y reduce abandono |
| Analítica operativa | Dashboards de funnel, TTH, conversión, fuentes | Permite decisiones basadas en datos desde el día 1 |
| Integraciones | Slack/Teams, Google/Microsoft, HRIS básicos | Crea un ecosistema conectado sin fricción |
| Cumplimiento y seguridad | GDPR, logs, gestión de consentimiento | Cubre aspectos legales y éticos desde el MVP |

---

## 3. Lean Canvas de LTI

| Bloque | Contenido | Explicación |
|--------|------------|-------------|
| **1. Problema** | - Procesos de reclutamiento lentos y manuales<br>- Falta de colaboración entre RRHH y managers<br>- ATS actuales complejos o poco intuitivos<br>- Poca transparencia para candidatos | Define las ineficiencias que el producto soluciona |
| **2. Segmentos de clientes** | - Departamentos de RRHH (startups, pymes, medianas empresas)<br>- Agencias de reclutamiento<br>- Hiring managers<br>- Candidatos (como usuarios secundarios) | Describe quién se beneficia directamente del software |
| **3. Propuesta de valor única (UVP)** | “El ATS inteligente que automatiza el reclutamiento, explica sus decisiones y hace fácil colaborar.” | Define el mensaje central que diferencia a LTI del resto |
| **4. Solución** | - Plataforma SaaS con flujos de contratación visuales<br>- IA para screening y redacción<br>- Automatizaciones no-code<br>- Portal colaborativo para equipos y candidatos | Explica cómo se materializa la propuesta de valor |
| **5. Canales** | - Ventas directas B2B (demos y free trial)<br>- Marketing de contenidos y LinkedIn Ads<br>- Partners de consultoría HR tech<br>- Integraciones marketplace (HRIS, job boards) | Cómo llegar a los clientes objetivo |
| **6. Ingresos (Revenue Streams)** | - Suscripción mensual/anual por usuario o vacante activa<br>- Planes escalables (Startup, Growth, Enterprise)<br>- Add-ons premium (IA avanzada, analítica, integraciones) | Modelo de ingresos sostenible y escalable |
| **7. Costos clave** | - Desarrollo del producto (frontend, backend, IA)<br>- Infraestructura cloud (AWS/Azure)<br>- Soporte y onboarding<br>- Marketing digital y partnerships | Principales drivers de gasto |
| **8. Métricas clave** | - Time-to-hire promedio<br>- Ahorro de horas/reclutador<br>- NPS de manager y candidato<br>- Retención de clientes (churn)<br>- % de automatizaciones activas | Indicadores de éxito del producto |
| **9. Ventaja injusta (Unfair Advantage)** | - Tecnología de IA explicable propia<br>- Motor de automatización visual sin código<br>- UX optimizada para managers (punto débil de la competencia) | Lo que hace difícil que otros repliquen LTI rápidamente |

---
 Descripción de los 3 casos de uso principales, con el diagrama asociado a cada uno.

# Caso de uso 1: Gestión de Vacantes

## Descripción
El reclutador utiliza **LTI** para crear, publicar y administrar vacantes dentro del sistema. Puede definir requisitos del puesto, etapas del proceso, responsables y canales de publicación (LinkedIn, Indeed, portal del candidato). Este módulo constituye el núcleo del flujo de contratación, ya que inicia el pipeline de candidatos y se conecta con automatizaciones e IA para acelerar el reclutamiento.

## Actores
- **Reclutador (Principal):** crea y configura la vacante.  
- **Manager (Secundario):** valida los requisitos y participa en la aprobación.  
- **Sistema LTI (Automatización e IA):** ejecuta acciones automáticas (publicación, notificaciones, creación de pipeline).  

## Relaciones
- `<<include>>` con **“Publicar Vacante”**.  
- `<<extend>>` hacia **“Evaluar Candidatos”** (flujo siguiente en el ciclo).  

## Flujo principal
1. El reclutador accede al módulo de vacantes y selecciona **“Crear nueva vacante”**.  
2. Define título, requisitos, salario, modalidad y etapas del proceso.  
3. Asigna un manager responsable y activa la publicación.  
4. El sistema ejecuta automatizaciones no-code: publica en portales seleccionados, envía notificaciones al manager y abre el pipeline para recibir postulaciones.  
5. Se registra la vacante activa y comienza la fase de recepción de candidatos.  


 @startuml
left to right direction

' Definición de los Actores
actor Reclutador as R
actor Manager as M
actor "Sistema LTI (Automatización e IA)" as S

' Definición del Sistema (Boundary)
rectangle "Sistema de Gestión de Talento" {
    usecase "Crear y Administrar Vacante" as UC1
    usecase "Publicar Vacante" as UC2
    usecase "Evaluar Candidatos" as UC3
    usecase "Validar Requisitos de Vacante" as UC4
}

' 1. Relaciones de los Actores con el Caso de Uso Principal
R --> UC1 : Crea y Configura
M --> UC4 : Valida y Aprueba
S --> UC1 : Ejecuta Automatización

' 2. Relaciones <<include>> y <<extend>>
' El UC principal (UC1) INCLUYE la publicación
UC1 .> UC2 : <<include>>

' El UC de Evaluación se EXTENDE a partir del principal (es el flujo siguiente)
UC1 .> UC3 : <<extend>>

' 3. Flujo Secundario (Validación del Manager)
UC1 ..> UC4 : <<include>> ' Podríamos ver la validación como parte esencial de la creación, si ocurre antes de la publicación.

' 4. Notas Adicionales para Claridad
note right of UC1
  Define: Título, Requisitos, Salario,
  Etapas, Responsables, Canales
end note

note bottom of S
  Ejecuta: Publicación, Notificaciones,
  Creación de Pipeline de Candidatos
end note

@enduml




# Caso de uso 2: Gestión de Candidatos

## Descripción
El reclutador y el manager gestionan el flujo completo de candidatos desde su recepción hasta la decisión final. **LTI** centraliza las postulaciones, ejecuta un screening automático mediante IA explicable y organiza las etapas del pipeline (revisión, entrevistas, oferta). Este caso de uso garantiza que las evaluaciones sean objetivas, trazables y colaborativas.

## Actores
- **Reclutador (Principal):** administra el pipeline, revisa perfiles y mueve candidatos entre etapas.  
- **Manager (Secundario):** participa en la evaluación y feedback.  
- **Candidato (Externo):** envía su postulación y recibe notificaciones de estado.  
- **Sistema LTI (Automatización e IA):** ejecuta screening, clasifica y prioriza candidatos, notifica a los actores.  

## Relaciones
- `<<include>>` con **“Screening Automático”**.  
- `<<include>>` con **“Evaluar y Calificar Candidato”**.  
- `<<extend>>` hacia **“Agendar Entrevista”**.  

## Flujo principal
1. El candidato postula a una vacante publicada.  
2. El sistema LTI registra la postulación y ejecuta el screening automático.  
3. El reclutador revisa las recomendaciones y decide avanzar o descartar al candidato.  
4. El manager recibe los perfiles prefiltrados y deja su feedback o puntuación.  
5. El sistema actualiza el estado del candidato y notifica automáticamente los resultados.  


@startuml
left to right direction

' Definición de los Actores
actor Reclutador as R
actor Manager as M
actor Candidato as C
actor "Sistema LTI (Automatización e IA)" as S

' Definición del Sistema (Boundary)
rectangle "Módulo de Gestión de Candidatos (ATS)" {
    usecase "Administrar Pipeline de Candidatos" as UC1_GC
    usecase "Screening Automático" as UC2_SA
    usecase "Evaluar y Calificar Candidato" as UC3_EC
    usecase "Agendar Entrevista" as UC4_AE
    usecase "Postular a Vacante" as UC5_PV
}

' 1. Relaciones de los Actores con los Casos de Uso
' El Reclutador administra el pipeline completo
R --> UC1_GC : Administra Flujo

' El Manager evalúa y da feedback
M --> UC3_EC : Participa en Evaluación

' El Candidato inicia el flujo de postulación
C --> UC5_PV : Envía Postulación

' El Sistema es central para el screening y las notificaciones
S --> UC1_GC : Clasifica y Notifica
S --> UC2_SA : Ejecuta Análisis

' 2. Relaciones <<include>> y <<extend>>
' El UC principal INCLUYE el Screening y la Evaluación/Calificación (obligatorio para el flujo)
UC1_GC .> UC2_SA : <<include>>
UC1_GC .> UC3_EC : <<include>>

' Agendar Entrevista es un paso que EXTENDE el flujo principal, ocurriendo si el candidato avanza
UC1_GC .> UC4_AE : <<extend>>

' Postular a Vacante INCLUYE o es PRECEDIDO por el Screening
UC5_PV --> UC1_GC : Inicia el Flujo
UC5_PV .> UC2_SA : <<include>>

' 3. Notas Adicionales
note right of UC1_GC
  Centraliza: Recepción, Revisión,
  Notificaciones, Decisión Final
end note

note bottom of S
  Ejecuta: Screening con IA,
  Actualización de Estados, Notificaciones
end note
@enduml



# Caso de uso 3: Gestión de Entrevistas

## Descripción

El módulo de Gestión de Entrevistas permite coordinar, agendar y realizar entrevistas de forma automática y colaborativa. A través de integraciones con calendarios (Google, Outlook) y un motor de scheduling inteligente, el sistema LTI sincroniza la disponibilidad de reclutadores, managers y candidatos, enviando invitaciones y recordatorios automáticos. Además, centraliza la retroalimentación posterior mediante scorecards y feedback estructurado.

## Actores

- **Reclutador (Principal):** coordina la entrevista y gestiona la logística.
- **Manager (Secundario):** participa en la entrevista y completa la evaluación.
- **Candidato (Externo):** recibe invitaciones y confirma su disponibilidad.
- **Sistema LTI (Automatización):** verifica agendas, propone horarios, envía recordatorios y actualiza estados.

## Relaciones

- `<<include>>` con “Verificar Disponibilidad”.
- `<<include>>` con “Enviar Invitación”.
- `<<extend>>` hacia “Registrar Feedback”.

## Flujo principal

1. El reclutador selecciona a los candidatos que avanzan a entrevista.
2. LTI consulta la disponibilidad del manager y del candidato en sus calendarios.
3. El sistema propone horarios óptimos y envía invitaciones automáticas.
4. Una vez confirmada la reunión, se generan recordatorios previos al evento.
5. Tras la entrevista, el manager y el reclutador registran el feedback en el scorecard correspondiente.
6. El sistema actualiza el estado del candidato y envía notificaciones automáticas.



@startuml
left to right direction

' Definición de los Actores
actor Reclutador as R
actor Manager as M
actor Candidato as C
actor "Sistema LTI (Scheduling e Integración)" as S

' Definición del Sistema (Boundary)
rectangle "Módulo de Gestión de Entrevistas" {
    usecase "Agendar y Coordinar Entrevista" as UC1_GE
    usecase "Verificar Disponibilidad" as UC2_VD
    usecase "Enviar Invitación y Recordatorios" as UC3_EI
    usecase "Registrar Feedback (Scorecard)" as UC4_RF
    usecase "Confirmar Disponibilidad" as UC5_CD
}

' 1. Relaciones de los Actores con los Casos de Uso
' El Reclutador inicia el proceso y registra feedback
R --> UC1_GE : Inicia Coordinación
R --> UC4_RF : Registra Evaluación

' El Manager participa en la entrevista y registra feedback
M --> UC4_RF : Registra Evaluación

' El Candidato interactúa para confirmar y recibir invitaciones
C --> UC5_CD : Confirma Disponibilidad
C <-- UC3_EI : Recibe Invitación

' El Sistema es el motor de la automatización
S --> UC1_GE : Ejecuta Scheduling Inteligente
S --> UC2_VD : Consulta Calendarios (Outlook/Google)

' 2. Relaciones <<include>> y <<extend>>
' El UC principal INCLUYE la verificación y el envío de invitación (obligatorio para coordinar)
UC1_GE .> UC2_VD : <<include>>
UC1_GE .> UC3_EI : <<include>>

' El registro de feedback EXTENDE el flujo, ya que ocurre DESPUÉS de la entrevista agendada y realizada.
UC1_GE .> UC4_RF : <<extend>>

' 3. Relación de la Confirmación del Candidato
' La confirmación es necesaria para finalizar el agendamiento.
UC3_EI <.. UC5_CD : Confirma

' 4. Notas Adicionales
note right of UC1_GE
  Implica: Sincronización de agendas,
  Propuesta de horarios óptimos
end note

note bottom of UC4_RF
  Usa: Scorecards y Feedback Estructurado
end note

@enduml




##  Documentación del Modelo de Datos: LTI (Applicant Tracking System)

### 1. Introducción

Este documento detalla la arquitectura de la base de datos relacional (PostgreSQL) diseñada para el **LTI (Applicant Tracking System)**. El modelo ha sido creado para dar soporte directo a los requisitos del Producto Mínimo Viable (MVP) y a las ventajas competitivas clave del sistema, tal como se definen en la documentación del proyecto.

**Objetivos del Modelo:**

* **Modularidad:** Soportar los tres casos de uso principales: Gestión de Vacantes, Gestión de Candidatos y Gestión de Entrevistas.
* **Colaboración:** Facilitar la "colaboración inteligente" entre reclutadores y managers mediante tablas de feedback estructurado.
* **Automatización:** Proveer la infraestructura para el motor de "automatización no-code" (if/then).
* **IA Explicable:** Crear los campos necesarios para almacenar tanto los resultados de la IA (scores, resúmenes) como sus justificaciones.

El siguiente esquema, compatible con [dbdiagram.io](https://dbdiagram.io), representa la base fundacional sobre la cual se construirán todas las funcionalidades de LTI.

### 2. Explicación de la Arquitectura del Modelo

El modelo se organiza en tres capas lógicas principales que interactúan entre sí.

#### Módulo 1: El Núcleo del Reclutamiento (El "Quién" y el "Qué")

Este es el fundamento del ATS. Define a los actores y los objetos principales del sistema.

* **`Usuarios`**: Representa a los actores internos (Reclutadores, Managers) que operan el sistema.
* **`Vacantes`**: Es la entidad central que define un puesto de trabajo. Contiene la descripción, el estado y, crucialmente, al `responsable_id` (el manager) y el `etapas_json` (el pipeline de contratación personalizado).
* **`Candidatos`**: Almacena la información de las personas que postulan. Incluye campos para la asistencia de IA, como `resumen_ia`.

**Relación Central (Tabla Pivote):**
La tabla `Postulaciones` es el corazón del sistema. Es una tabla pivote N:M que conecta a un `Candidato` con una `Vacante`. Esta tabla es la que "mueve" al candidato a través del embudo, registrando su `etapa_actual`, `estado_general` y el `score_ia` inicial.

#### Módulo 2: Colaboración y Scheduling (El "Cómo" y el "Cuándo")

Este módulo habilita las funciones inteligentes y colaborativas que diferencian a LTI.

* **`Entrevistas`**: Habilita el "Scheduling inteligente". Cada registro es una cita programada (con fecha, enlace de reunión, etc.) que se vincula directamente a una `Postulacion`.
* **`Participantes_Entrevista`**: Resuelve la necesidad de que múltiples evaluadores (Managers, Reclutadores) asistan a una misma `Entrevista` (relación N:M).
* **`Evaluaciones`**: Materializa la "Colaboración estructurada" y los "scorecards compartidos". Cada vez que un `Usuario` da feedback sobre una `Postulacion`, se crea un registro aquí. Se vincula opcionalmente a una `entrevista_id` para una trazabilidad completa (saber qué feedback corresponde a qué entrevista).

#### Módulo 3: Automatización No-Code (El "Disparador")

Este módulo da poder al usuario y cumple la promesa de la "Automatización no-code real".

* **`Reglas_Automatizacion`**: Esta tabla almacena las reglas "if/then".
    * El campo `condicion_json` define el "IF" (ej. `{"campo": "score_ia", "operador": ">", "valor": 80}`).
    * El campo `accion_json` define el "THEN" (ej. `{"tipo": "mover_etapa", "destino": "Entrevista Técnica"}`).
    * Un servicio en el backend leerá esta tabla para ejecutar automáticamente acciones sobre la tabla `Postulaciones` (como mover etapas o enviar notificaciones).




    // **********************************************
// Modelo de Base de Datos Consolidado para LTI - ATS
// Versión: 4.0
// Módulos Incluidos:
// 1. Core (Usuarios, Vacantes, Candidatos, Postulaciones)
// 2. Scheduling (Entrevistas, Participantes)
// 3. Automatización (Reglas_Automatizacion)
// 4. Colaboración (Evaluaciones)
// **********************************************

// Tabla de Usuarios (Reclutadores, Managers)
Table Usuarios {
  id uuid [pk] // UUID como Primary Key
  nombre varchar(100)
  email varchar(100) [unique]
  rol varchar(20) // 'Reclutador', 'Manager', 'Admin'
  fecha_creacion timestamp
}

// 1. Entidad Principal: Vacantes
Table Vacantes {
  id uuid [pk] // UUID como Primary Key
  titulo varchar(255) // Título del puesto
  descripcion text // Descripción del puesto generada por IA
  etapas_json json // Estructura del pipeline (ej. Screening, Entrevista, Oferta)
  
  // Relación 1:N: Un usuario (1) es responsable de muchas vacantes (N)
  responsable_id uuid [ref: > Usuarios.id] // Manager o Reclutador responsable (FK)
  
  estado varchar(50) // 'Abierta', 'Cerrada', 'Pausada'
  fecha_publicacion date
  cumplimiento_gdpr boolean
}

// 2. Entidad Principal: Candidatos
Table Candidatos {
  id uuid [pk]
  nombre_completo varchar(100)
  email varchar(100) [unique]
  telefono varchar(20)
  cv_url varchar(255) // Enlace al CV
  resumen_ia text // Resumen del CV generado por IA
  fecha_registro timestamp
}

// Tabla Pivote (N:M): Postulaciones
// Conecta Candidatos con Vacantes y registra el estado en el proceso
Table Postulaciones {
  id uuid [pk]
  
  // Relación 1:N: Un Candidato (1) tiene muchas Postulaciones (N)
  candidato_id uuid [ref: > Candidatos.id] // FK a Candidatos
  
  // Relación 1:N: Una Vacante (1) tiene muchas Postulaciones (N)
  vacante_id uuid [ref: > Vacantes.id] // FK a Vacantes
  
  fecha_postulacion timestamp
  etapa_actual varchar(50) // La etapa en la que se encuentra
  score_ia float // Puntuación inicial del Screening Inteligente de LTI
  estado_general varchar(50) // 'Activo', 'Contratado', 'Descartado'
}

// Módulo de Scheduling inteligente para coordinar reuniones
Table Entrevistas {
  id uuid [pk]
  
  // Relación 1:N: Una Postulación (1) puede tener muchas Entrevistas (N)
  postulacion_id uuid [ref: > Postulaciones.id] // FK a Postulaciones
  
  tipo_entrevista varchar(50) // 'Screening', 'Técnica', 'Cultural', 'Final'
  fecha_hora_inicio timestamp // Consultada via Scheduling inteligente
  duracion_minutos int
  enlace_reunion varchar(255) // Link de Google Meet/Zoom, etc.
  estado_agendamiento varchar(50) // 'Pendiente', 'Confirmada', 'Cancelada'
  
  // Opcional: El usuario que inició la coordinación
  coordinador_id uuid [ref: > Usuarios.id] 
}

// Tabla Pivote para la relación N:M entre Entrevistas y Usuarios (Evaluadores)
Table Participantes_Entrevista {
  entrevista_id uuid [ref: > Entrevistas.id] // FK a Entrevistas
  usuario_id uuid [ref: > Usuarios.id] // FK a Usuarios (Manager o Reclutador)
  
  rol_participante varchar(50) // Ej: 'Entrevistador Principal', 'Observador'
  confirmacion_asistencia boolean // Confirma su disponibilidad
  
  // Clave compuesta para unicidad
}

// Módulo de Automatización No-Code
// Almacena la lógica "no-code" definida por el usuario (if/then)
Table Reglas_Automatizacion {
  id uuid [pk]
  
  // Relación 1:N: Un usuario (1) crea muchas reglas (N)
  creador_id uuid [ref: > Usuarios.id]
  
  // Relación 1:N: Una vacante (1) puede tener muchas reglas específicas (N). Puede ser NULL para reglas globales/plantillas.
  vacante_id uuid [ref: > Vacantes.id, null] 
  
  nombre_regla varchar(100)
  
  // Condición de la regla (la parte "IF")
  condicion_json json // Ej: {"campo": "score_ia", "operador": ">", "valor": 80}
  
  // Acción de la regla (la parte "THEN")
  accion_json json // Ej: {"tipo": "mover_etapa", "destino": "Entrevista Técnica"}
  
  activa boolean // Indica si la regla está en uso
  fecha_creacion timestamp
}

// Módulo de Colaboración (Feedback y Scorecards)
Table Evaluaciones {
  id uuid [pk]
  
  // Relación 1:N: Una Postulación (1) tiene muchas Evaluaciones (N)
  postulacion_id uuid [ref: > Postulaciones.id] // FK a la postulación evaluada
  
  // Relación 1:N: Un Usuario (1) es evaluador de muchas Evaluaciones (N)
  evaluador_id uuid [ref: > Usuarios.id] // FK al Evaluador
  
  // Relación 1:1 o 1:N: Opcionalmente vincular la evaluación a una entrevista específica
  entrevista_id uuid [ref: > Entrevistas.id, null] 
  
  etapa_proceso varchar(50) // Etapa de la evaluación
  score float // Puntuación objetiva (scorecard)
  feedback_texto text // Retroalimentación detallada
  justificacion_ia text // Justificación explicable si la IA asistió en la decisión
  fecha_evaluacion timestamp
}



# Diseño de Sistema a Alto Nivel: LTI (Stack Definido)

## 1. Tipo de Arquitectura General

**Arquitectura Híbrida: Orientada a Servicios y Dirigida por Eventos (EDA)**

Se mantiene la arquitectura híbrida. Los servicios se desacoplan mediante un bus de eventos, permitiendo escalar la IA y la automatización de forma independiente al núcleo del ATS.

---

## 2. Componentes Principales (con Stack Definido)

A continuación se describen los componentes clave de la arquitectura LTI con el stack tecnológico prescriptivo seleccionado:

### A. Clientes (Frontend)
1.  **Aplicación Web (React):** El cliente principal para Reclutadores y Managers, construido en React. Provee la interfaz de gestión de pipelines y colaboración.
2.  **Portal de Candidato (Next.js):** Aplicación renderizada en servidor (SSR) usando Next.js para optimizar el SEO de las vacantes publicadas y gestionar el portal de postulación.

### B. Capa de Acceso y Seguridad
3.  **API Gateway (Kong):** Punto de entrada único desplegado sobre Kubernetes. Enruta peticiones a los servicios correctos, valida JWTs y aplica rate limiting.
4.  **Servicio de Autenticación (Auth0):** Servicio externo gestionado para manejar el registro, login, SSO (Google/Microsoft) y la emisión de JSON Web Tokens (JWT).

### C. Servicios de Backend
5.  **Servicio Core (Node.js/TypeScript):** El servicio principal que gestiona la lógica de negocio y las APIs para Usuarios, Vacantes, Candidatos y Postulaciones. Escrito en TypeScript para mayor robustez.
6.  **Servicio de IA (Python/FastAPI):** Un microservicio en Python que expone los modelos de "IA explicable" (screening, generación de texto) a través de una API REST de alto rendimiento (FastAPI).
7.  **Servicio de Automatización (Node.js/TypeScript):** El motor "if/then". Es un consumidor de eventos (RabbitMQ) que lee las `Reglas_Automatizacion` de PostgreSQL y ejecuta acciones publicando nuevos eventos.
8.  **Servicio de Notificaciones (Node.js/TypeScript):** Un servicio simple que escucha eventos de notificación de RabbitMQ y se integra con APIs externas (SendGrid, Slack).

### D. Capa de Persistencia y Datos
9.  **Base de Datos Principal (PostgreSQL):** La base de datos relacional que almacena todos los datos estructurados, aprovechando el soporte JSONB para los campos de automatización.
10. **Bus de Eventos (RabbitMQ):** El message broker que implementa la arquitectura EDA, gestionando las colas de eventos entre servicios.
11. **Almacenamiento de Objetos (AWS S3):** Almacenamiento externo para archivos binarios (CVs, documentos), referenciados por URL en PostgreSQL.
12. **Caché (Redis):** Almacén de datos en memoria para sesiones y caché de aplicación, reduciendo la carga sobre PostgreSQL.

### E. Plataforma y Orquestación
13. **Contenerización (Docker):** Cada servicio (Core, IA, Automatización) se empaqueta como una imagen de Docker.
14. **Orquestación (Kubernetes):** La plataforma base para desplegar, escalar y gestionar los servicios contenerizados, asegurando alta disponibilidad.

---

## 3. Flujos de Comunicación

### Flujo 1: Síncrono (Reclutador abre un perfil)
1.  **React App** envía `GET /api/v1/postulaciones/ID` al **Balanceador de Carga**.
2.  El Balanceador reenvía a **Kong (API Gateway)**.
3.  Kong valida el JWT (consultando las claves públicas de **Auth0**) y enruta la petición al **Servicio Core (Node.js)**.
4.  El Servicio Core consulta **Redis** (caché) y luego **PostgreSQL** para obtener los datos.
5.  La respuesta (JSON) viaja de regreso por la misma ruta.

### Flujo 2: Asíncrono (Un candidato postula)
1.  **Next.js Portal** envía `POST /api/v1/postulaciones` (con el CV) al **Balanceador**.
2.  La petición llega (vía Kong) al **Servicio Core (Node.js)**.
3.  **Servicio Core:**
    a. Sube el CV a **AWS S3**.
    b. Guarda la postulación en **PostgreSQL**.
    c. **Publica un evento `PostulacionCreada`** en **RabbitMQ**.
    d. Responde `201 Created` al portal (la petición síncrona termina).
4.  **En paralelo (Asíncrono):**
    * El **Servicio de IA (Python)** (suscrito a `PostulacionCreada` en RabbitMQ) recibe el evento, descarga el CV de S3, ejecuta el screening y publica `ScreeningCompleto` en RabbitMQ.
    * El **Servicio de Automatización (Node.js)** (suscrito a `PostulacionCreada`) recibe el evento, consulta las `Reglas_Automatizacion` en PostgreSQL y publica `EnviarNotificacion` en RabbitMQ.
5.  El **Servicio de Notificaciones (Node.js)** consume `EnviarNotificacion` y envía el email vía SendGrid.


@startuml
!theme plain
skinparam rectangle {
    shadowing false
    BorderColor #505050
}
skinparam component {
    BorderColor #0066CC
    BackgroundColor #EBF4FF
    ArrowColor #333
}
skinparam cloud {
    BorderColor #008000
    BackgroundColor #E6F3E6
}
skinparam database {
    BorderColor #B85B00
    BackgroundColor #FFF3E6
}
skinparam queue {
    BorderColor #FF6600
    BackgroundColor #FFF3E6
}
skinparam node {
    BorderColor #777
    BackgroundColor #f9f9f9
}

' --- Actores ---
actor "Reclutador / Manager" as User
actor "Candidato" as Candidate

' --- Clientes (Navegador) ---
package "Clientes (Navegador)" {
    node "Web App (React)" as SPA
    node "Portal Candidato (Next.js)" as Portal
}

' --- Infraestructura Cloud LTI (SaaS) ---
package "Infraestructura Cloud (Ej. AWS/GCP/Azure)" {
    
    node "Balanceador de Carga" as ALB
    
    package "Orquestación (Kubernetes)" {
        
        node "API Gateway (Kong)" as Gateway
        
        package "Servicios de Backend (Dockerizados)" {
            component "Servicio Core (Node.js)\n(API Principal, Lógica de Negocio)" as Core
            component "Servicio de IA (Python)\n(Screening, Generación)" as AI
            component "Servicio de Automatización (Node.js)\n(Motor No-Code)" as Automation
            component "Servicio de Notificaciones (Node.js)" as Notif
        }

        package "Persistencia y Estado" {
            database "BD Principal (PostgreSQL)" as DB
            queue "Bus de Eventos (RabbitMQ)" as Bus
            database "Caché (Redis)" as Cache
        }
    }
    
    storage "Almacén de Objetos (AWS S3)\n(para CVs)" as S3

    ' --- Flujos de Red ---
    ALB --> Gateway
    Gateway --> Core : <<REST API>>
    Gateway --> AI : <<REST API>>

    Core .> DB : <<JDBC/TCP>>
    Core .> Cache : <<TCP>>
    Core .> S3 : <<HTTPS>>
    Core .> Bus : <<Publica (AMQP)>>
    Core <. Bus : <<Consume (AMQP)>>

    AI .> Bus : <<Publica (AMQP)>>
    AI <. Bus : <<Consume (AMQP)>>

    Automation <. Bus : <<Consume (AMQP)>>
    Automation .> Bus : <<Publica (AMQP)>>
    Automation .> DB : <<Lee Reglas>>

    Notif <. Bus : <<Consume (AMQP)>>
}

' --- Servicios Externos (Integraciones) ---
package "Servicios Externos (SaaS)" {
    cloud "Autenticación (Auth0)" as Auth
    cloud "Pasarela de Pagos (Stripe)" as Payment
    cloud "Servicios de Correo (SendGrid)" as Email
    cloud "APIs de Calendario (Google, MS Graph)" as Calendar
    cloud "APIs de Mensajería (Slack, Teams)" as Messaging
}

' --- Conexiones Principales ---
User --> SPA
Candidate --> Portal
SPA ..> ALB : <<HTTPS>>
Portal ..> ALB : <<HTTPS>>

' Autenticación
SPA ..> Auth : <<OAuth2 / OIDC>>
Portal ..> Auth : <<OAuth2 / OIDC>>
Gateway ..> Auth : <<Valida JWT>>

' Integraciones de Servicios
Core ..> Payment : <<API>>
Core ..> Calendar : <<API>>
Notif ..> Email : <<API>>
Notif ..> Messaging : <<API>>

' Nota de Flujo
note right of Bus
  **Flujo Asíncrono (RabbitMQ):**
  1. Core publica `PostulacionCreada`
  2. AI y Automation consumen el evento
  3. AI publica `ScreeningCompleto`
  4. Automation publica `EnviarNotificacion`
end note

@enduml


El modelo C4 nos permite "hacer zoom" en el sistema, comenzando con una vista de alto nivel (Contexto) y descendiendo hasta el nivel de código.

1. Nivel 1: Diagrama de Contexto del Sistema
Este diagrama ofrece la visión de más alto nivel. Sitúa al Sistema LTI en el centro y muestra cómo interactúa con sus usuarios (actores) y con otros sistemas de software externos.

Sistema: El LTI - Applicant Tracking System. Su propósito es automatizar y optimizar el ciclo de reclutamiento mediante flujos no-code e IA explicable.

Actores:

Reclutador: El usuario principal que gestiona vacantes, pipelines y candidatos.

Manager (Hiring Manager): Colabora en la definición de vacantes, evalúa candidatos y da feedback.

Candidato: El usuario externo que postula a vacantes y sigue el estado de su proceso.

Sistemas Externos:

Auth0: Gestiona la identidad y autenticación de Reclutadores y Managers.

Portales de Empleo (LinkedIn, Indeed): LTI publica vacantes en estos sistemas.

Sistemas de Calendario (Google/Microsoft): Usados para el agendamiento inteligente de entrevistas.

Plataformas de Notificación (Email, Slack): LTI envía alertas, recordatorios y comunicaciones a través de ellos.

HRIS Externos: Sistemas de RRHH (como HRIS básicos) con los que LTI se integra para sincronizar contrataciones.

2. Nivel 2: Diagrama de Contenedores
Este diagrama "hace zoom" dentro del Sistema LTI para mostrar los principales "contenedores" (aplicaciones, servicios, bases de datos, etc.) que lo componen. Se basa directamente en la Arquitectura Híbrida (Orientada a Servicios y EDA) definida en la documentación.

Clientes:

Aplicación Web (React): El frontend para Reclutadores y Managers.

Portal de Candidato (Next.js): La aplicación pública para que los candidatos vean vacantes y postulen.

Servicios de Backend:

API Gateway (Kong): Punto de entrada único que enruta el tráfico y valida tokens JWT.

Servicio Core (Node.js): El cerebro del sistema. Gestiona la lógica de negocio de vacantes, candidatos y postulaciones.

Servicio de IA (Python/FastAPI): Expone la IA explicable para screening de CVs y generación de texto.

Servicio de Automatización (Node.js): El motor no-code "if/then" que reacciona a eventos.

Servicio de Notificaciones (Node.js): Gestiona el envío de comunicaciones a sistemas externos.

Persistencia y Mensajería:

Base de Datos (PostgreSQL): Almacena todos los datos relacionales (vacantes, candidatos, reglas, etc.).

Bus de Eventos (RabbitMQ): Desacopla los servicios para la comunicación asíncrona.

Almacén de Objetos (AWS S3): Almacena archivos binarios, principalmente CVs.

Caché (Redis): Almacena sesiones y datos temporales para mejorar el rendimiento.

3. Nivel 3: Diagrama de Componentes
Este diagrama "hace zoom" en un contenedor específico. Elegimos el Servicio Core (Node.js), ya que es fundamental para la lógica de negocio y coincide con la solicitud de "Servicio de Reclutamiento".

Muestra los principales componentes lógicos dentro de este servicio:

API Controllers: El punto de entrada para las peticiones HTTP desde el API Gateway. Desglosado en controladores por recurso (Vacantes, Postulaciones, Entrevistas).

Servicios de Negocio (Application, Vacancy, Scheduling): Componentes que encapsulan la lógica de negocio principal para cada caso de uso (Gestión de Candidatos, Gestión de Vacantes, Gestión de Entrevistas).

Adaptador de Persistencia (Repositorio): Una capa de abstracción que maneja la comunicación con la base de datos PostgreSQL, ocultando el SQL o el ORM.

Publicador de Eventos: Un componente que abstrae la publicación de mensajes en el Bus de Eventos (RabbitMQ).

Cliente de IA: Un cliente HTTP responsable de comunicarse con el Servicio de IA externo para tareas como la generación de descripciones de puesto.

4. Nivel 4: Diagrama de Código (Esquemático)
Este es el nivel más profundo de "zoom", mostrando una vista esquemática a nivel de clases o módulos para un componente específico. Nos centramos en el ApplicationService (del Nivel 3) para ilustrar sus dependencias clave.

ApplicationService: La clase principal que orquesta la lógica de las postulaciones.

IApplicationRepository: Una interfaz (o puerto) que define cómo el servicio interactúa con la persistencia (implementada por el PersistenceAdapter del Nivel 3).

IEventPublisher: Una interfaz que define cómo se publican eventos (como PostulacionCreada).

Application (Entidad): El modelo de dominio que representa una postulación, sobre el cual opera el servicio.
