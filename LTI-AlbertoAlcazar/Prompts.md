# 🧠 Historial de Prompts - Proyecto ATS (Applicant Tracking System)

Este documento recoge todos los **prompts utilizados en el desarrollo del sistema ATS**, organizados cronológicamente por temática.  
Sirve como registro de decisiones, diseño y evolución del proyecto.

---

## 🧩 1. Funcionalidades y fundamentos del sistema ATS

### 🧠 Prompt 1
**Eres un experto en producto, con experiencia en sistemas ATS (Applicant-Tracking System).  
¿Qué funcionalidades básicas tiene un sistema ATS (Applicant-Tracking System)?  
Descríbemelas en un listado, ordenado de mayor a menor prioridad.**

🟢 *Resultado:*  
Listado de funcionalidades básicas priorizadas (gestión de vacantes, pipeline, comunicación, analítica, cumplimiento GDPR...).

---

### 🧠 Prompt 2
**¿Qué beneficios obtiene el personal de recursos humanos de un sistema ATS para considerar su uso?**

🟢 *Resultado:*  
Beneficios clasificados por impacto: productividad, trazabilidad, calidad de contratación, experiencia del candidato, cumplimiento legal, etc.

---

### 🧠 Prompt 3
**¿Qué alternativas tiene a usar un sistema ATS y cuándo pueden ser relevantes?**

🟢 *Resultado:*  
Comparativa de alternativas: hojas de cálculo, CRM, portales de empleo, agencias externas o software RRHH integrado.  
Incluye tabla con ventajas, limitaciones y cuándo usarlas.

---

### 🧠 Prompt 4
**¿Cómo es el día a día normal de un técnico de recursos humanos que usa un sistema ATS?  
Descríbeme paso a paso todas las interacciones.**

🟢 *Resultado:*  
Descripción detallada de flujos de trabajo diarios (revisión de candidatos, entrevistas, comunicación, reporting).

---

## 📘 2. Documentación y Readme del proyecto

### 🧠 Prompt 5
**Con esta información necesito para completar un fichero readme.md:  
- Descripción breve del software, valor añadido y ventajas competitivas.  
- Explicación de las funciones principales.**

🟢 *Resultado:*  
Texto descriptivo tipo README con secciones de descripción general, valor añadido, ventajas competitivas y funciones principales.

---

## 💡 3. Estrategia y modelo de negocio

### 🧠 Prompt 6
**Dame la información en texto para generar un Lean Canvas para entender el modelo de negocio.**

🟢 *Resultado:*  
Lean Canvas completo con los 9 bloques: problema, segmentos de clientes, propuesta de valor, solución, canales, ingresos, costes, métricas y ventaja injusta.

---

### 🧠 Prompt 7
**Enumera y describe brevemente los 3 casos de uso principales.**

🟢 *Resultado:*  
Tres casos de uso:  
1️⃣ Gestión del proceso de selección  
2️⃣ Coordinación del equipo de reclutamiento  
3️⃣ Analítica y mejora continua.

---

### 🧠 Prompt 8
**Como experto en el diseño de software devuélveme un gráfico de estos 3 casos de uso (Describe las interacciones entre usuarios o sistemas externos y el software.)  
Devuélvemelo en formato mermaid.**

🟢 *Resultado:*  
Tres diagramas de secuencia en Mermaid (uno por caso de uso) mostrando interacción entre reclutadores, candidatos y sistemas externos.

---

## 🧱 4. Modelado de datos

### 🧠 Prompt 9
**Las aplicaciones son interfaces de manipulación de datos...  
¿Cuáles son las entidades de modelo de datos esenciales en un sistema ATS?  
Dame los campos esenciales de cada una y cómo se relacionan.  
¿Qué otras entidades del modelo de datos son importantes?  
Dame los campos más importantes de cada una y cómo se relacionan entre entidades.  
(Código diagrama mermaid)**

🟢 *Resultado:*  
Modelo de datos completo con 30 entidades (Jobs, Candidates, Applications, Interviews, Offers, etc.)  
Incluye diagrama ER en Mermaid.

---

### 🧠 Prompt 10
**Parece que existe un error de sintaxis: (mensaje de error Mermaid). Corrige el diagrama.**

🟢 *Resultado:*  
Versión corregida del diagrama ER (relaciones separadas, sintaxis limpia y probada).

---

## 🧩 5. Arquitectura del sistema

### 🧠 Prompt 11
**Ahora el objetivo es definir la estructura general del sistema...  
Como ingeniero senior define el diseño del sistema a alto nivel, tanto explicado como en diagrama mermaid.**

🟢 *Resultado:*  
Diseño arquitectónico completo con:  
- Objetivos (escalabilidad, seguridad, mantenibilidad).  
- Macrocomponentes.  
- Patrones de comunicación.  
- Integraciones externas.  
- Decisiones DevOps.  
Incluye tres diagramas Mermaid: Contexto, Contenedores/Componentes y Despliegue/Infraestructura.

---

### 🧠 Prompt 12
**Los patrones de arquitectura son soluciones probadas...  
Selecciona un patrón de arquitectura y explica y razona por qué eliges dicho patrón.  
Preferiblemente arquitectura hexagonal. En caso de que la elijas para este proyecto explica por qué crees que es la más conveniente.**

🟢 *Resultado:*  
Explicación y justificación detallada de la **Arquitectura Hexagonal (Ports & Adapters)**.  
Incluye ventajas, trade-offs, estructura modular, mapa de puertos y diagrama Mermaid.

---

### 🧠 Prompt 13
**Syntax error (línea 5) en el diagrama hexagonal. Corrige el diagrama Mermaid.**

🟢 *Resultado:*  
Diagrama Mermaid de arquitectura hexagonal corregido y probado sin errores.

---

## 🧩 6. Diagrama C4 completo

### 🧠 Prompt 14
**El diagrama C4 (Context, Containers, Components, Code) es un modelo para visualizar la arquitectura de sistemas de software...  
Realiza un diagrama C4 para esta ATS, que llegue en profundidad a uno de los componentes del sistema, el que prefieras.**

🟢 *Resultado:*  
C4 completo del ATS:  
- **Nivel 1 (Contexto):** actores, sistema y sistemas externos.  
- **Nivel 2 (Contenedores):** frontends, API gateway, servicios y DBs.  
- **Nivel 3 (Componentes):** detalle del *Applications Service* (use cases, domain, ports, adapters).  
- **Nivel 4 (Código):** clases principales con entidades, interfaces y adapters.