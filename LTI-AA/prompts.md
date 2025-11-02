# Prompt 1

Usa la tecnica de metaprompting para mejorar el siguiente prompt:

## Rol

Eres un experto en producto con experiencia en ATS (Applicant-Tracking System)

## Contexto

LTI es una startup que quiere desarrollar el ATS (Applicant-Tracking System) del futuro. Y busca implementar algo innovador por lo que se debe considerar las siguiente: - Aumentar la eficiencia para los departamentos de HR - Mejorar la colaboración en tiempo real entre reclutadores y managers - Automatizaciones - Asistencia de IA en diversas tareas

## Resultado deseado

Debes generar un markdown con los siguientes puntos:

    ✅ Descripción breve del software LTI, valor añadido y ventajas competitivas.
    ✅ Explicación de las funciones principales.
    ✅ Añadir un diagrama Lean Canvas para entender el modelo de negocio.
    ✅ Descripción de los 3 casos de uso principales, con el diagrama asociado a cada uno.
    ✅ Modelo de datos que cubra entidades, atributos (nombre y tipo) y relaciones.
    ✅ Diseño del sistema a alto nivel, tanto explicado como diagrama adjunto.
    ✅ Diagrama C4 que llegue en profundidad a uno de los componentes del sistema, el que prefieras.

## Restricciones

- Genera la documentación considerando que es un MVP, no hagas sobreingenieria
- Usa un tono técnico, además agrega comentarios si es absolutamente necesario
- Para los gráficos usa mermaid

## Resultado

Escribe el resultado en un archivo LTI-AA.md

Interactivamente hazme preguntas para aclarar si lo consideras necesario

# Prompt 2

## 🎯 Rol

Actúa como un **experto en producto y diseño de sistemas** especializado en **Applicant Tracking Systems (ATS)**.  
Tienes experiencia en:

- Product discovery y definición de MVPs.
- Diseño de arquitecturas escalables y modelos de datos.
- Comunicación técnica mediante documentación estructurada (Markdown + Mermaid).

Piensa y escribe como si fueras **el Product Architect de una startup tecnológica**.

---

## 🏗️ Contexto

**LTI** es una startup que desea construir **el ATS del futuro**. El producto busca **diferenciarse radicalmente** en el mercado combinando:

- ⚡ **Eficiencia para HR** → reducir fricción en flujos de reclutamiento.
- 🤝 **Colaboración en tiempo real** entre reclutadores, managers y candidatos.
- ⚙️ **Automatizaciones inteligentes** → manejo de procesos repetitivos.
- 🤖 **Asistencia de IA** en tareas de análisis, redacción, entrevistas y priorización.

Tu enfoque debe equilibrar **viabilidad técnica**, **claridad del modelo de negocio**, y **velocidad de ejecución (MVP)**.

---

## 🧩 Resultado deseado

Genera un documento en **Markdown** titulado `LTI-AA.md` que contenga las siguientes secciones, en este orden:

### 1. Resumen ejecutivo

- Breve descripción del software.
- Propuesta de valor y ventajas competitivas.

### 2. Funciones principales

- Explica las funcionalidades clave que definen el MVP.
- Usa subtítulos y bullets para claridad.

### 3. Lean Canvas (Mermaid)

- Dibuja el diagrama con Mermaid.
- Explica brevemente cada bloque del modelo de negocio.

### 4. Casos de uso (3 principales)

- Para cada caso: descripción + diagrama de flujo en Mermaid.

### 5. Modelo de datos (Entidad-Relación)

- Lista entidades, atributos (nombre y tipo), y relaciones.
- Incluye un diagrama Mermaid ER.

### 6. Diseño del sistema (Arquitectura general)

- Explica el diseño técnico a alto nivel.
- Agrega un diagrama C4 (nivel 1 o 2).

### 7. Profundización en un componente

- Elige uno (por ejemplo, “AI Recruiter Assistant” o “Workflow Engine”).
- Explica su lógica interna y agrega un **diagrama C4 más detallado** (nivel 3).

---

## ⚙️ Restricciones

- Mantén una **mentalidad MVP** → evita sobreingeniería.
- Emplea **tono técnico y claro**, con breves comentarios si es absolutamente necesario.
- Usa **Mermaid** para todos los diagramas.
- Evita repetir información.
- No inventes detalles de implementación que no sean coherentes con un MVP.

---

## 🧭 Instrucciones meta (para tu razonamiento)

1. Antes de escribir el resultado, **razona internamente** (no lo muestres) sobre:
   - Qué necesidades reales de mercado aborda LTI.
   - Qué funciones mínimas son imprescindibles.
   - Cómo representar gráficamente cada parte del sistema.
2. Si detectas **ambigüedad o falta de información**, **haz preguntas al usuario antes de continuar**.
3. La salida final debe ser **autoexplicativa**, **bien estructurada**, y **lista para compartir** como documentación de producto.
