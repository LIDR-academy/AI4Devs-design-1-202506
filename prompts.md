# Prompts de Diseño - Proyecto LTI

A continuación se detallan los prompts utilizados con el Asistente de IA para generar la documentación de arquitectura y producto.

## 1. Definición de Producto y Lean Canvas

**Prompt:**
> Actúa como un Product Manager experto y Arquitecto de Software con experiencia en sistemas ATS (Applicant Tracking Systems). Estamos diseñando, un ATS del futuro. Objetivos clave: Aumentar eficiencia de departamentos de HR, Colaboración en tiempo real, Automatizaciones inteligentes, Asistencia de IA.
>
> Tu tarea inicial es:
> 1. Redactar una descripción breve del software, su valor añadido y ventajas competitivas (Bullet points).
> 2. Explicar las 5 funcionalidades principales que nos diferenciarán de la competencia.
> 3. Generar un LEAN CANVAS para este modelo de negocio. Preséntalo en formato de tabla Markdown.

## 2. Casos de Uso y Diagramas de Secuencia

**Prompt:**
> Basado en la descripción de LTI que acabamos de definir, necesito documentar los 3 casos de uso principales (ej: "Publicar oferta con asistencia de IA", "Filtrado automático de candidatos", "Entrevista colaborativa en tiempo real").
>
> Para cada caso de uso:
> 1. Escribe una breve descripción textual.
> 2. Genera el código para un diagrama de secuencia usando sintaxis MERMAID.js. El diagrama debe mostrar la interacción entre: Usuario, Frontend, Backend, y Servicios Externos.

## 3. Modelo de Datos (ERD)

**Prompt:**
> Ahora actúa como un Arquitecto de Datos. Necesito diseñar el modelo de datos relacional para LTI.
> 1. Identifica las entidades principales (ej: Candidates, JobOffers, Applications, etc.).
> 2. Define los atributos clave de cada entidad y sus tipos de datos.
> 3. Genera un diagrama Entidad-Relación (ERD) usando sintaxis MERMAID.js. Asegúrate de definir correctamente las relaciones y las claves foráneas.

## 4. Arquitectura de Alto Nivel

**Prompt:**
> Actúa como un Arquitecto de Soluciones Cloud. Diseña la arquitectura de alto nivel para LTI.
> Consideraciones: Moderna (Microservicios/Modular), incluir servicios de IA, soportar tiempo real.
>
> Tareas:
> 1. Explica la arquitectura elegida y por qué.
> 2. Genera un diagrama de arquitectura de alto nivel usando sintaxis MERMAID.js (graph TD). Debe mostrar: Cliente Web, Gateway, Servicios principales, Base de datos y Colas de mensajes.

## 5. Diagrama C4 (Nivel de Componente)

**Prompt:**
> Finalmente, vamos a utilizar el modelo C4 para documentar la arquitectura. Quiero que hagas "Zoom In" en el componente "AI Matching Engine".
>
> Genera un diagrama de "Componente" (Nivel 3 del modelo C4) usando sintaxis MERMAID.js. Debe mostrar: El contenedor de la API, componentes internos (Controlador, Lógica, Cliente LLM, Repositorio) y sus interacciones.
