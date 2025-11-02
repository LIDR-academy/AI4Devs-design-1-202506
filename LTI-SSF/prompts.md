## **Petición**

Ya has aprendido los básicos de análisis y diseño de sistemas de software, y algunas de las herramientas de diagramas más relevantes.

Es tu turno de probar los prompts que hemos dado como ejemplo para que empieces a coger soltura con el uso de asistentes de IA en esta primera fase del desarrollo de software.

En este ejercicio tu misión será diseñar y documentar un sistema de software siguiendo las fases de:

Investigación y análisis
Casos de uso
Modelado de datos
Diseño de alto nivel
¿Y qué sistema? El de LTI
LTI es una startup que quiere desarrollar el ATS (Applicant-Tracking System) del futuro.

Todavía no hay nada creado, así que toca ponerse el gorro de product manager y definir esas funcionalidades clave que harán brillar a LTI por encima de los competidores:

Aumentar la eficiencia para los departamentos de HR
Mejorar la colaboración en tiempo real entre reclutadores y managers
Automatizaciones
Asistencia de IA en diversas tareas
Es el momento de hacer brainstorming, investigar cuáles pueden ser las claves del éxito, y dejarlo plasmado para el resto del equipo.

Tu misión es diseñar la primera versión del sistema, entregando los siguientes artefactos:
✅ Descripción breve del software LTI, valor añadido y ventajas competitivas.
✅ Explicación de las funciones principales.
✅ Añadir un diagrama Lean Canvas para entender el modelo de negocio.
✅ Descripción de los 3 casos de uso principales, con el diagrama asociado a cada uno.
✅ Modelo de datos que cubra entidades, atributos (nombre y tipo) y relaciones.
✅ Diseño del sistema a alto nivel, tanto explicado como diagrama adjunto.
✅ Diagrama C4 que llegue en profundidad a uno de los componentes del sistema, el que prefieras.
Utiliza el asistente que prefieras: ChatGPT, Google Gemini, Microsoft Copilot, Claude...

📁 Entrega
Documenta todo en un único documento Markdown (.md) con el nombre:
LTI-iniciales (ej. LTI-ARM).

Los prompts deben ir en un archivo aparte: prompts.md

Deja ambos archivos dentro de una carpeta con el mismo nombre (LTI-iniciales)
y súbela al repositorio GitHub de este tema.

📌 Notas importantes
El repositorio será colaborativo, iremos aceptando las pull requests para generar una base común con todas las carpetas.

Recuerda actualizar a la última versión del repositorio antes de lanzar tus cambios para no tener conflictos.

Si no sabes cómo mantenerte actualizado antes de publicar tu contenido y encontrarte con conflictos, pregunta en el grupo de Whatsapp o revisa documentación sobre git.

No olvides añadir tus prompts en prompts.md dentro de tu carpeta.

🚀 ¡A por ello!


Tengo que hacer este ejercicio, actúa como un PM y resuelve todos los probelemas indicados, creando un plan para hacerlo.

## **Respuesta:**

¡Buenísimo! Te dejo un plan claro para hacerlo de principio a fin y, además, ya te preparé un borrador completo con todos los artefactos y un archivo separado de prompts para que solo tengas que personalizar y subir.

# Cómo te recomiendo hacerlo (paso a paso)

1. **Crea tu rama de trabajo**

```bash
git checkout -b feat/lti-iniciales
```

2. **Estructura de entrega**

```
LTI-<tus-iniciales>/
  ├─ LTI-<tus-iniciales>.md   # documento único con todo
  └─ prompts.md               # tus prompts usados
```

3. **Rellena primero el esqueleto**

* Empieza por: **Descripción**, **Funciones**, **Lean Canvas** (tabla simple).
* Luego los **3 casos de uso** con **diagramas de secuencia** (mermaid).
* **Modelo de datos** con `erDiagram` + lista de entidades/atributos.
* **Diseño alto nivel** (explicación + diagrama de flujo).
* **C4** (Context, Container, Component) del componente que elijas (te propongo **Automation**).

4. **Aprovecha IA de forma dirigida**

* Usa prompts breves y específicos (tienes un `prompts.md` de ejemplo).
* Itera: “mejora X sección con foco en Y, límite N palabras”.

5. **Valida y recorta**

* Revisa que todo cabe en un único `.md`.
* Comprueba que los **diagramas mermaid** compilan (si tu visor los soporta).
* Asegúrate de que hay **GDPR**/privacidad y **métricas de éxito**.

6. **Sube y abre PR**

```bash
git add .
git commit -m "feat: entrega LTI <iniciales>"
git pull --rebase upstream main   # o equivalente del repos
git push origin feat/lti-iniciales
# Abre la Pull Request
```

---

# Te dejé un borrador listo para editar

He generado una carpeta con:

* `LTI-XXX.md` (sustituye *XXX* por tus iniciales)
* `prompts.md` (prompts prácticos para cada fase)

Descárgalo aquí:

* [Descargar carpeta comprimida](sandbox:/mnt/data/LTI-XXX.zip)
* O abre individualmente:

    * [LTI-XXX.md](sandbox:/mnt/data/LTI-XXX/LTI-XXX.md)
    * [prompts.md](sandbox:/mnt/data/LTI-XXX/prompts.md)

Qué incluye el **LTI-XXX.md**:

* ✅ Descripción y ventajas competitivas
* ✅ Funciones principales
* ✅ **Lean Canvas** en tabla
* ✅ **3 casos de uso** con **diagramas de secuencia** (mermaid)
* ✅ **Modelo de datos** (ER + atributos y tipos)
* ✅ **Diseño de alto nivel** (explicado + diagrama)
* ✅ **C4** (Context, Container, Component) del **Automation Service**

Solo te falta:

* Cambiar “XXX” por tus iniciales (y tu nombre si procede).
* Ajustar cualquier sección al estilo de tu equipo.
* Añadir cualquier referencia específica del repositorio.

¿Quieres que reemplace “XXX” por tus iniciales y lo deje ya con tu nombre y una versión final? También puedo añadir un **checklist de QA** y una **lista de criterios de evaluación** al final del .md si te viene bien.

##Prompts de la carpeta:

## 1) Investigación y análisis
**Prompt:**  
«Actúa como product manager de un ATS moderno para pymes/scale‑ups en Europa (GDPR). Haz un *benchmark* breve de 5 competidores y destaca huecos de mercado orientados a: colaboración en tiempo real, automatizaciones low‑code y IA responsable. Devuélvelo en bullets accionables.»

## 2) Casos de uso
**Prompt:**  
«Diseña 3 casos de uso críticos para un ATS: publicar vacante, *screening* asistido y programación de entrevistas. Para cada uno: actores, *happy path*, pre/postcondiciones, errores comunes y un *sequence diagram* en mermaid.»

## 3) Modelado de datos
**Prompt:**  
«Propón un ERD para ATS con entidades Job, Candidate, Application, Interview, Feedback, Automation. Incluye atributos (nombre y tipo) y relaciones cardinalidad. Devuelve en `erDiagram` de mermaid y una lista tabular.»

## 4) Diseño de alto nivel
**Prompt:**  
«Plantea arquitectura a alto nivel para un ATS: frontend, BFF, servicios de dominio, motor de reglas, IA, integraciones, datos, observabilidad y seguridad. Incluye un diagrama de flujo mermaid y justifica decisiones (asincronía, eventos).»

## 5) C4 (profundidad en Automation)
**Prompt:**  
«Crea diagramas C4 (Context, Container, Component) centrados en el servicio de Automatizaciones de un ATS, usando sintaxis mermaid C4. Añade riesgos técnicos y *guardrails* de cumplimiento.»

## 6) Redacción y comunicación
**Prompt:**  
«Genera textos de *product marketing* (50–100 palabras) explicando el valor diferencial del ATS LTI para recruiters y hiring managers, evitando *buzzwords* huecos y con métricas de impacto.»

## 7) Git y entrega
**Prompt:**  
«Dame una checklist de entrega para GitHub: estructura de carpetas LTI‑<iniciales>, cómo mantener *fork* actualizado, comandos git para *branch*, *commit*, *rebase* y *pull request*.»