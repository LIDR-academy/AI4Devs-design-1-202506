# Bitácora de Prompts: Definición de Proyecto ATS

Este documento registra los prompts utilizados durante la sesión de consultoría para la definición de un Sistema de Seguimiento de Candidatos (ATS).

**Asistente utilizado:** Gemini Pro

---

### Prompt 1: Descripción Inicial del Proyecto

> Quiero que actues como un desarrollador experto, con amplio conocimiento en la definición de proyectos de Software y que me asesores para desarrollar un sistema ATS (Applicant-Tracking System), te comparto una imagen para comprender lo que abarca ese sistema para reclutamiento y selección de personal. Instrucciones:
> 1. Describe lo siguiente:
>    - realiza una breve descripción de en qué consiste el software ATS
>    - indicar cuál es su valor añadido
>    - indicar cuáles son sus ventajas competitivas
> 2. Comparte la respuesta con el formato adecuado para documento Markdown (.md)
> 3. Si tienes dudas, dime

---

### Prompt 2: Funciones Principales

> Acerca del mismo proyecto, ahora indica: Explicación de las funciones principales, con el mismo formato Markdown

---

### Prompt 3: Modelo de Negocio (Lean Canvas)

> Acerca del mismo proyecto, crea un diagrama Lean Canvas para entender el modelo de negocio, el diagrama en fomato PlantUML

---

### Prompt 4: Casos de Uso

> Genera casos de uso del proyecto, indicaciones:
> - solamente los 3 principales del proyecto
> - realiza una breve descripción de cada uno
> - genera el diagrama en formato PlantUML de cada uno
> - aplica formato markdown para la respuesta

---

### Prompt 5: Modelo de Datos

> Genera modelo de datos, indicaciones:
> - de los 3 casos de uso del punto anterior
> - que cubra entidades, atributos (nombre y tipo) y relaciones
> - genera el diagrama en formato PlantUML de cada uno
> - aplica formato markdown para la respuesta

---

### Prompt 6: Diseño de Sistema a Alto Nivel

> Genera diseño del sistema a alto nivel, indicaciones:
> - genera breve explicación
> - genera diagrama en formato PlantUML
> - aplica formato markdown para la respuesta

---

### Prompt T7: Diagrama C4

> Genera el diagrama C4, indicaciones:
> - referente al caso de uso "Gestión de Publicación de Vacantes"
> - utiliza formato PlantUML