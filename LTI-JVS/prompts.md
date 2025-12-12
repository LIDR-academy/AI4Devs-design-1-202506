# Prompts utilizados para generar LTI-JVS.md

A continuación se detallan los prompts que he utilizado para generar el contenido del diseño del sistema.

## 1. Definición del Producto y Valor
**Prompt:**
> Actúa como un Product Manager experto en HR Tech. Define la visión para "LTI", un Applicant Tracking System (ATS) del futuro. El objetivo es diferenciarse de los competidores tradicionales (como Workday o Greenhouse) mediante el uso intensivo de IA, automatización y colaboración en tiempo real.
>
> Genera:
> 1. Una descripción breve del producto.
> 2. 3 puntos clave de valor añadido.
> 3. 3 ventajas competitivas claras.

## 2. Funciones Principales
**Prompt:**
> Basado en la visión anterior, lista las 5 funciones principales que debe tener este sistema para cumplir su promesa de "eficiencia y colaboración". Incluye funcionalidades de IA específicas.

## 3. Lean Canvas
**Prompt:**
> Crea un Lean Canvas para LTI en formato tabla Markdown. Asegúrate de identificar claramente el problema (ineficiencia, falta de comunicación), los segmentos de clientes (Startups, Enterprise), la propuesta de valor única y los flujos de ingresos (SaaS).

## 4. Casos de Uso
**Prompt:**
> Describe los 3 casos de uso más críticos para el MVP del sistema. Deben cubrir el flujo desde la creación de la oferta hasta la contratación.
> Para cada caso de uso, genera un diagrama de secuencia usando sintaxis Mermaid que muestre la interacción entre el usuario (Recruiter/Manager), el Sistema LTI y actores externos si los hay.

## 5. Modelo de Datos
**Prompt:**
> Actúa como un Arquitecto de Software. Diseña el modelo de datos relacional para este ATS.
> Necesito un diagrama ER (Entity-Relationship) en sintaxis Mermaid.
> Entidades requeridas: Company, User, JobOpening, Candidate, Application, Interview, Feedback.
> Incluye claves primarias (PK), foráneas (FK) y atributos esenciales.

## 6. Arquitectura de Alto Nivel
**Prompt:**
> Diseña la arquitectura del sistema a alto nivel. Debido a los requisitos de IA y escalabilidad, propón una arquitectura basada en Microservicios o Modular Monolith.
> 1. Describe los componentes principales (Frontend, API Gateway, Servicios Core, Servicio de IA, etc.).
> 2. Genera un diagrama de arquitectura en sintaxis Mermaid que muestre cómo se conectan estos componentes y las bases de datos.

## 7. Diagrama C4 (Component Level)
**Prompt:**
> Profundiza en el componente más complejo: el "AI Matching Service".
> Crea un diagrama C4 a nivel de Componente (Component Diagram) usando sintaxis Mermaid C4Component.
> Muestra los sub-componentes internos (ej. Text Processor, Embedding Engine, LLM Wrapper) y sus interacciones con servicios externos (OpenAI API, Vector DB).
