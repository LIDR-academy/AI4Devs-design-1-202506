# Prompt 1 (Prompt inicial para pasar al metaprompter)
## Rol 
Actua como un metaprompter

## Contexto
Estamos en una práctica para el máster AI4Devs. El objetivo es hacer el "Diseño de un sistema de gestión de candidatos", básicamente un sistema ATS (Applicant Tracking System)

## Tarea
Vas a preparar de una manera eficiente el siguiente prompt para que podamos empezar el diseño del sistema ATS y generemos toda la documentación de manera correcta:
"
### Rol
Vas a actuar como Product Manager experto  en sistemas de gestión de candidatos.

### Contexto
Estamos en una práctica para el máster AI4Devs. El objetivo es hacer el "Diseño de un sistema de gestión de candidatos", básicamente un sistema ATS (Applicant Tracking System). No hay nada creado, pero hay que actuar como Product Manager y empezar a definir las funcionalidades clave que harán tener éxito a nuestra empresa. Algunas de estas funcionalidades son:
- Aumentar la eficiencia para los departamentos de HR
- Mejorar la colaboración en tiempo real entre reclutadores y managers
- Automatizaciones
- Asistencia de IA en diversas tareas.
- Otras muchas que pudieran ocurrírsete como Product Manager, investigando cuáles pueden ser las claves del éxito. y dejarlo plasmado para el resto del equipo.

### Tarea
Tienes que diseñar la primera versión del sistema, entregando los siguientes artefactos.
1. Descripción breve del software LTI, valor añadido y ventajas competitivas. Explicación de las funciones principales. Añadir un diagrama Lean Canvas para entender el modelo de negocio.	
2. Descripción de los 3 casos de uso principales, con el diagrama asociado a cada uno
3. Modelo de datos que cubra entidades, atributos (nombre y tipo) y relaciones
4. Diseño del sistema a alto nivel, tanto explicado como diagrama adjunto
5. Diagrama C4 que llegue en profundidad a uno de los componentes del sistema, el que prefieras

### Resultado esperado
1. Diagrama Lean Canvas para entender el modelo de negocio. El diagrama  en formato mermaid.
2. Descripción de los 3 casos de uso principales, con el diagrama general de casos de uso, más el de secuencia por cada uno de los casos de uso. Todo ello en formato plantUML
3. Modelo de datos con la información indicada en la tarea y en formato mermaid
4. Diseño del sistema a alto nivel. Explicación a alto nivel y diagrama adjunto. Formato plantUML
5. Diagrama C4 que llegue en profundidad a uno de los componentes del sistema. Elige el más importante para mostrar en una demo, y el formato adecuado que pueda ser visualizado en Github

### Ejecución
Ejecuta paso a paso, y pregúntame antes de empezar a generar cada uno de los artefactos para que te dé información adicional."

"

#Prompt 2 Prompt optimizado — Diseño de un ATS (Applicant Tracking System)

## Rol
Actúa como **Product Manager senior** especializado en **sistemas ATS** y herramientas de HR Tech, con experiencia en descubrimiento de producto, especificación funcional y documentación técnica.

## Contexto
Estamos en una práctica del máster **AI4Devs** para diseñar un **ATS (Applicant Tracking System)** desde cero. Objetivo: definir y documentar una primera versión enfocada a:
- Aumentar la **eficiencia** en HR.
- Mejorar la **colaboración en tiempo real** entre recruiters y hiring managers.
- Incorporar **automatizaciones** de procesos.
- Añadir **asistencia de IA** (matching, redacción, resumen, deduplicación, etc.).
- Identificar **ventajas competitivas** basadas en mejores prácticas de la industria.

Audiencia: equipo mixto (producto, UX, frontend, backend, data/ML).  
Lenguaje: **Español** claro, orientado a ejecución.  
Suposiciones: si falta información, explícitalas bajo “Suposiciones” y propon alternativas.

## Tarea
Diseña la **primera versión** del sistema y entrega estos artefactos:

1) **Descripción breve del software LTI** (larga-cola de talento e integración): propuesta de valor, ventajas competitivas y funciones principales. Incluye **Lean Canvas**.
2) **Tres casos de uso principales**, con su **diagrama general de casos de uso** y un **diagrama de secuencia** por caso.
3) **Modelo de datos** (entidades, atributos con nombre y tipo, relaciones).
4) **Diseño de sistema a alto nivel**: explicación + diagrama.
5) **Diagrama C4** profundizando en el componente más crítico para una demo.

## Formatos requeridos
- **Lean Canvas**: código **Mermaid**.
- **Casos de uso + Secuencias**: código **PlantUML** (use-case y sequence).
- **Modelo de datos**: **Mermaid** (erDiagram o classDiagram con tipos).
- **Arquitectura alto nivel**: **PlantUML** (component o deployment) + breve explicación.
- **C4**: sintaxis compatible con **PlantUML C4** (C4-Context/Container/Component) o alternativa que renderice en GitHub; incluye leyenda.

> Entrega **tanto el diagrama (código)** como un **resumen de 3–5 puntos** que explique cada uno.

## Criterios de calidad (Checklist)
- Claridad y trazabilidad: cada decisión ligada a objetivos de negocio.
- Viabilidad: supuestos explícitos; riesgos y mitigaciones.
- Escalabilidad: multi-tenant, permisos/roles, auditoría.
- Cumplimiento: RGPD/privacidad (retención, consentimiento, minimización).
- Observabilidad: métricas clave (time-to-hire, conversiones, SLA).
- Integraciones: fuentes de CV (LinkedIn, portales), e-mail, calendario, SSO.
- IA responsable: datos, sesgos, explicabilidad, modo manual override.
- Colaboración: comentarios, menciones, estados, notificaciones.

## Entregables (estructura y nombres sugeridos)
- `01-lean-canvas.md` (Mermaid + explicación).
- `02-casos-uso.md` (PlantUML use-case + 3 sequences + notas).
- `03-modelo-datos.md` (Mermaid + decisiones de modelado).
- `04-arquitectura-alto-nivel.md` (PlantUML + explicación de 1–2 párrafos).
- `05-c4-componente-critico.md` (C4 + razones de elección del componente).

Incluye al final un **Resumen ejecutivo** (máx. 10 viñetas) y una **Lista de cuestiones abiertas**.

## Proceso de ejecución (paso a paso con confirmación)
Trabaja en **iteraciones**. **Antes de generar cada artefacto**, pregunta brevemente si deseas:
- a) usar valores por defecto propuestos, o  
- b) ajustar según preferencias (p. ej., enfoque B2B mid-market vs enterprise, grado de IA, cloud objetivo, stack preferido).

Orden sugerido:
1) Lean Canvas → 2) Casos de uso → 3) Modelo de datos → 4) Arquitectura alto nivel → 5) C4.

## Plantillas de salida (copiar/pegar)
*(Se incluyen las plantillas Mermaid y PlantUML mencionadas en la versión conversacional.)*

## Parámetros/Preferencias (edítame si lo deseas)
- Segmento objetivo: **B2B mid-market** (50–1.000 empleados).
- Cloud: **Azure** o **AWS** (elige y justifica).
- Base de datos: **PostgreSQL** + **Blob** para CVs.
- Integraciones mínimas: **Email/Calendario**, **SSO**, **Job boards**.
- IA: motor de **matching**, **parsing de CV**, **resúmenes** y **asistentes**.

## Entrega final
- Cada bloque con su **código de diagrama** y **explicación**.
- **Resumen ejecutivo** (máx. 10 viñetas).
- **Cuestiones abiertas** y próximos pasos.
- Todo en un fichero markdown llamado **LTI-FJLTT.md**

## Instrucción clave
**Antes de generar cada artefacto**, pregunta si deseas ajustar parámetros. Si no hay respuesta, procede con valores por defecto y deja “Suposiciones” claramente listadas.

# Prompt 3 (Ayuda con la obtención de requisitos)
- Para ayudarte con la investigación y el análisis de requisitos vamos a intentar dar respeuesta a las siguientes preguntas:
		- Eres un experto en producto, con experiencia en sistemas de gestión de candidatos. 
		¿Qué funcionalidades básicas tiene un sistema de gestión de candidatos?
		Descríbemelas en un listado, ordenado de mayor a menor prioridad
		- ¿Qué alternativas tiene a usar un sistema de gestión de candidatos y cuando pueden ser relevantes?
		- ¿Cómo es el customer journey normal de un cliente que usa un sistema de gestión de candidatos? Descríbeme paso a paso todas las interacciones

# Prompt 4 ( Generar el Lean Canvas en base a las respuestas anteriores)

En base a las respuestas anteriores ya puedes generar el Lean Canvas


# Prompt 5 ( Casos de uso )
Puedes proceder a generar los tres casos de uso. Genera aquellos casos de uso que den más valor inicial a la aplicación, sin olvidarte la funcionalidad base.

# Prompt 6 (Modelo de datos)
Puedes proceder con el modelo de datos y derivarlo de los casos de uso anteriores.

# Prompt 7 (Arquitectura de alto nivel)
Vas a proceder con la arquitectura a alto nivel con el formato y explicación indicados, pero ten cuenta los siguientes detalles.

- Vamos a utilizar Arquitectura Hexagonal
- Tiene que cumplir con los principios SOLID.
- La aplicación será subida a Azure
- Al ser subida a  Azure, utilizará aquellos productos de Azure que aseguren la seguridad de la aplicación.

# Prompt 8 (Generación del C4 basado en el motor de evaluación/matching IA)
Procede profundizando en el **motor de evaluación/matching IA**


# Prompt 9 (Consolidad fichero final .md)
Consolida todo el documento final LTI-FJLTT.md

# Prompt 10 (Añadir descripciones y resultados adicionales para documentación más detallada)
añade a cada artefacto, las explicaciones que has respondido al respecto, para tener una documentación lo más detallada posible y genera el .md resultante para que sea descargable
