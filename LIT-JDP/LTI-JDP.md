1. Descripción breve del software LTI, valor añadido y ventajas competitivas
LTI es un sistema ATS (Applicant-Tracking System) de nueva generación, diseñado para optimizar y automatizar el proceso de reclutamiento en empresas modernas. Su valor añadido radica en la integración de IA para filtrar candidatos, automatizar tareas repetitivas y facilitar la colaboración en tiempo real entre reclutadores y managers.
Ventajas competitivas:

Asistencia de IA para selección y ranking de candidatos
Automatización de comunicaciones y tareas administrativas
Colaboración en tiempo real y feedback centralizado
Integración sencilla con portales de empleo y herramientas de RRHH
Analítica avanzada y reportes personalizables

2. Explicación de las funciones principales
Gestión de vacantes: Creación, publicación y seguimiento de ofertas de empleo.
Recepción y filtrado de candidatos: Importación automática de CVs, análisis y ranking por IA.
Colaboración y feedback: Espacios para comentarios y evaluaciones entre reclutadores y managers.
Automatización de comunicaciones: Envío automático de emails y notificaciones a candidatos.
Panel de analítica: Métricas de procesos, tiempos y calidad de candidatos.
Integraciones: Con portales de empleo, correo electrónico y calendarios.

3. Diagrama Lean Canvas
| Problema                        | Solución                        | Métricas Clave           |
|---------------------------------|---------------------------------|--------------------------|
| Procesos de selección lentos    | ATS con IA y automatización     | Tiempo de contratación   |
| Falta de colaboración           | Feedback y chat en tiempo real  | % vacantes cubiertas     |
| Tareas repetitivas              | Automatización de tareas        | Satisfacción usuarios    |

| Propuesta de Valor              | Ventaja Injusta                 | Canales                  |
|---------------------------------|---------------------------------|--------------------------|
| ATS inteligente y colaborativo  | Algoritmos IA propios           | Web, integraciones HR    |
|                                | UX optimizada                   | Portales empleo, email   |

| Segmentos de Clientes           | Estructura de Costes            | Fuentes de Ingresos      |
|---------------------------------|---------------------------------|--------------------------|
| Empresas medianas y grandes     | Desarrollo, soporte, IA         | Suscripción mensual      |
| Consultoras de RRHH             | Infraestructura cloud           | Servicios premium        |

4. Casos de uso principales y diagramas
Caso de Uso 1: Publicar Vacante
Descripción:
El reclutador crea y publica una nueva vacante, que se distribuye automáticamente en portales de empleo.

Diagrama:
sequenceDiagram
    participant R as Reclutador
    participant LTI as Sistema LTI
    participant P as Portal de Empleo

    R->>LTI: Crear vacante
    LTI->>P: Publicar vacante
    P-->>LTI: Confirmación publicación
    LTI-->>R: Notificación de publicación

Caso de Uso 2: Filtrar y Rankear Candidatos
Descripción:
El sistema recibe CVs, los analiza con IA y presenta un ranking al reclutador.

Diagrama: 
sequenceDiagram
    participant C as Candidato
    participant LTI as Sistema LTI
    participant R as Reclutador

    C->>LTI: Enviar CV
    LTI->>LTI: Analizar y rankear con IA
    LTI-->>R: Mostrar lista priorizada

Caso de Uso 3: Colaboración y Feedback
Descripción:
Reclutadores y managers comentan y puntúan candidatos en tiempo real.

Diagrama:
sequenceDiagram
    participant R as Reclutador
    participant M as Manager
    participant LTI as Sistema LTI

    R->>LTI: Añadir comentario/puntuación
    M->>LTI: Añadir comentario/puntuación
    LTI-->>R: Notificación de feedback
    LTI-->>M: Notificación de feedback

5. Modelo de datos (entidades, atributos y relaciones)
Entidad	Atributos (nombre: tipo)	Relaciones
Usuario	id: UUID, nombre: string, email: string, rol: string	1:N Vacante, 1:N Comentario
Vacante	id: UUID, titulo: string, descripcion: text, estado: string, fecha_creacion: date	N:1 Usuario, 1:N Candidato
Candidato	id: UUID, nombre: string, email: string, cv: file, estado: string, ranking: float	N:1 Vacante, 1:N Comentario
Comentario	id: UUID, texto: text, fecha: date, puntuacion: int	N:1 Usuario, N:1 Candidato

6. Diseño del sistema a alto nivel
Explicación:
El sistema se compone de una interfaz web, una API backend, un motor de IA para análisis de CVs, un módulo de automatización y una base de datos centralizada. Se integra con portales de empleo y servicios externos.

Diagrama:
flowchart LR
    UI[Interfaz Web]
    API[API Backend]
    IA[Motor IA]
    DB[(Base de Datos)]
    EXT[Portales de Empleo/Servicios externos]
    AUTO[Módulo Automatización]

    UI -- Solicitudes --> API
    API -- Datos --> DB
    API -- Llama --> IA
    API -- Llama --> AUTO
    API -- Integración --> EXT
    IA -- Datos --> DB
    AUTO -- Notificaciones --> EXT

7. Diagrama C4 (nivel de componente: Motor de IA)
Contexto:
El Motor de IA es responsable de analizar los CVs, extraer información relevante y calcular el ranking de candidatos.

Diagrama:
flowchart TD
    API[API Backend]
    IA[Motor IA]
    ML[Modelo ML]
    EXTR[Extractor de Datos]
    RANK[Algoritmo de Ranking]
    DB[(Base de Datos)]

    API -- CV --> IA
    IA -- Extrae datos --> EXTR
    EXTR -- Datos estructurados --> ML
    ML -- Scoring --> RANK
    RANK -- Ranking --> API
    IA -- Guarda resultados --> DB