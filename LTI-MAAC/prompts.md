## Fase de investigación:
**Gemini 2.5 Flash** 
Prompt:
Con base a la siguiente imagen que representa lo que es un "Applicant-Tracking System" ATS generame un diagrama mermaid que represente esa misma imagen.

**ChatGPT**
Prompt:
Eres un analista de software experto. Estoy construyendo un sistema de "Applicant-Tracking System" ATS online del futuro y ayudame a saber lo siguiente: - ¿Que "Applicant-Tracking System" ATS open source son más conocidos? - Que "Applicant-Tracking System" ATS comerciales son más conocidos? - Compáralos en funcion de las principales funciones que debe tener un ATS (Las que generan valor para RRHH) y valora cuales serian mejor opción. - Puedes usar internet para realizar la investigación. - Te comparto un diagrama mermaid donde represento lo que es un ATS para un mayor entendimiento: 
graph TD A[Creating Jobs] --> B(Jobs Published on Job Boards, Website, Social Media, etc.) B --> C{Job Applications Received} C --> D[Applications are Reviewed] D --> E(Online Tests are Conducted) E --> F{Interviews are Scheduled} F --> G[Selected Applicants are Hired] G --> A


**Gemini 2.5 Flash** 
Prompt:
Eres un experto en prompt engineer y vas a interpretar y mejorar el siguiente texto para que sea un buen prompt lo principal que requiero es generar los siguientes documentos:
1. Descripción breve del software LTI (al agente previamente le explique que es y como funicona el software LTI)
2. Explicación de las funciones principales (le sugieri que maximo sean 6)
3. Añadir un diagrama Lean Canvas.

El texto es:
Con base  a  la información obtenida de la investigación elige los casos de uso más importantes a implementar maximo (6) para lograr una funcionalidad básica para un "Applicant-Tracking System" ATS y vamos generar nuestra primer versión del sistema ATS llamado LTS, y comencemos por la creación de los siguientes documentos:
- ✅ **Descripción breve del software LTI**, valor añadido y ventajas competitivas.  
- ✅ **Explicación de las funciones principales.**  
- ✅ **Añadir un diagrama Lean Canvas** para entender el modelo de negocio. 


## Inicia proceso de generación de documentos:

**ChatGPT**
Prompt:
INSTRUCCIÓN PRINCIPAL Y ROL:

Actúa como un Jefe de Producto (Product Manager) y estratega de software, enfocado en el diseño del Minimum Viable Product (MVP) para un nuevo Applicant Tracking System (ATS) llamado LTS.

Tu objetivo es generar tres (3) documentos clave para la definición inicial del producto, siguiendo las restricciones y formatos indicados a continuación.

TAREA 1: Descripción del Software

Genera una descripción profesional y concisa del software LTS (máximo 150 palabras). El texto debe incluir:

Propuesta de Valor (Valor Añadido): ¿Qué problema resuelve para el cliente?

Ventajas Competitivas: Menciona dos (2) características o enfoques que distinguen a LTS de la competencia.

TAREA 2: Funcionalidades Principales

Identifica los casos de uso más importantes para lograr una funcionalidad básica de un ATS. Lista y describe un máximo de seis (6) funcionalidades o módulos principales del sistema LTS (e.g., Creación de Puestos, Gestión de Candidatos).

TAREA 3: Modelo de Negocio (Lean Canvas)

Desarrolla un diagrama Lean Canvas completo que represente el modelo de negocio para el software LTS.

Requisito de Formato: El Lean Canvas debe ser generado utilizando la sintaxis de Mermaid para asegurar que se pueda visualizar como un diagrama estructural. Utiliza un diagrama de flujo simple (graph TD) o un diagrama de clases (classDiagram) si lo consideras más apropiado para estructurar los nueve bloques del canvas (Problema, Solución, Métricas Clave, etc.).


Prompt:
Continua con la 4ta tarea: - ✅ **Descripción de los 3 casos de uso principales**, con el diagrama asociado a cada uno

Prompt:
Generame tambien sus diagramas de casos de uso, ya que los generados son de secuencia (me son funcionales) pero tambien necesito diagramas de casos de uso

Prompt:
Crea los 3 casos de uso "TAREA 4: Casos de Uso Principales del MVP de LTS" pero en formato plantuml

Prompt:
Ahora como TAREA 5: - Genera el modelo de datos ✅ **Modelo de datos** que cubra entidades, atributos (nombre y tipo) y relaciones.


**Gemini 2.5 Flash** 
Prompt:
Eres un experto en prompt engineer y vas a interpretar y mejorar el siguiente texto para que sea un buen prompt :
Para nuestro tarea 6,
- ✅ **Diseño del sistema a alto nivel**, tanto explicado como diagrama adjunto.

- ✅ **Diagrama C4** que llegue en profundidad a uno de los componentes del sistema, el que prefieras, puede ser el que consideres principal.

"En esta etapa el objetivo es definir la estructura general del sistema, incluyendo la arquitectura de software, la distribución de componentes, la integración de sistemas externos y los patrones de comunicación. Esto ayuda a garantizar que el sistema sea escalable, seguro y fácil de mantener."

Para el diagrama C4 contempla:
Estos niveles son:
Contexto: Muestra el sistema completo en el contexto de su entorno, incluyendo otros sistemas, actores y entidades externas. Este diagrama proporciona una vista de alto nivel de cómo el sistema interactúa con sus partes interesadas y otros sistemas.
Contenedores: Descompone el sistema en varios contenedores (aplicaciones, servicios de datos, etc.), mostrando la tecnología principal y cómo se comunican estos contenedores.
Componentes: Se adentra en un contenedor específico para mostrar los componentes o bloques de construcción principales y sus interacciones.
Código: El nivel más detallado, muestra cómo están implementados los componentes a nivel de clases o, en algunos casos, de funciones.


**ChatGPT**
Prompt:
Para iniciar nuestra tarea 6 INSTRUCCIÓN PRINCIPAL Y ROL: Actúa como un Arquitecto de Software Senior experto en sistemas de gestión de talento (ATS). Tu tarea es definir la estructura arquitectónica del sistema LTS, el Applicant Tracking System (ATS) que estamos desarrollando. Tu objetivo es generar un diseño de sistema de alto nivel que cumpla con los objetivos de escalabilidad, seguridad y mantenimiento. TAREAS REQUERIDAS Genera los siguientes cuatro (4) documentos: 1. Diseño del Sistema a Alto Nivel (Explicación): Proporciona una descripción concisa de la arquitectura de software general de LTS. Incluye: El patrón arquitectónico principal (ej., Microservicios, Arquitectura de Capas). La distribución de los componentes clave (Backend, Frontend, Base de Datos, Servicios Externos). Los patrones de comunicación clave (ej., REST, colas de mensajes). 2. Diagrama C4 - Nivel 1: Contexto (System Context Diagram) Genera el Diagrama de Contexto del Sistema (Nivel 1 del C4 Model). Este debe mostrar: El sistema LTS como una caja central. Los actores humanos (ej., Reclutador, Gerente de Contratación, Candidato). Los sistemas externos principales con los que interactúa LTS (ej., Bolsas de Trabajo, Servicio de Email, Servicio de Autenticación). 3. Diagrama C4 - Nivel 2: Contenedores (Container Diagram) Genera el Diagrama de Contenedores (Nivel 2 del C4 Model) de LTS. Descompón el sistema LTS en sus principales unidades de despliegue/tecnología. Este debe mostrar: Contenedores clave (ej., Aplicación Web SPA, API Gateway, Servicio de Candidatos, Base de Datos PostgreSQL, Fila de Mensajes/Queue). La tecnología principal de cada contenedor (ej., React, Python/FastAPI, PostgreSQL). Las relaciones de comunicación entre estos contenedores. 4. Diagrama C4 - Nivel 3: Componentes (Component Diagram) Genera el Diagrama de Componentes (Nivel 3 del C4 Model) para el contenedor principal de la lógica de negocio: el Servicio de Candidatos. Este debe mostrar: Los componentes internos principales del servicio (ej., Controlador API, Lógica de Negocio/Dominio, Repositorio de Datos, Motor de Puntuación LTI). Sus relaciones y dependencias internas (ej., la Lógica de Negocio usa el Repositorio). Las tecnologías usadas por cada componente (ej., Python, SQLAlchemy, Redis). REQUISITOS DE FORMATO (Diagramas) Lenguaje de Diagramación: Todos los diagramas deben utilizar la sintaxis de Mermaid.



# Conversación en Gemini:
https://gemini.google.com/share/2c7b5adf255c

# Conversación en ChatGPT:
https://chatgpt.com/share/6906b031-55ac-8002-8729-19b039fc9485