# Prompts Utilizados para el Diseño de LTI

Este documento contiene los prompts utilizados para generar el diseño y documentación del sistema LTI mediante asistente de IA.

---

## Prompt 1: Descripción General y Análisis Inicial

```
Necesito diseñar un ATS (Applicant Tracking System) moderno llamado LTI que sea competitivo en el mercado actual. 

Por favor, ayúdame a:
1. Definir el valor añadido y ventajas competitivas que lo diferencien de otros ATS como Greenhouse, Lever, Workday
2. Identificar las funcionalidades clave que debería tener para aumentar la eficiencia de HR, mejorar la colaboración en tiempo real entre reclutadores y managers, incluir automatizaciones y asistencia de IA
3. Crear una descripción breve del software que destaque su propuesta de valor única

Considera las tendencias actuales en IA generativa, automatización de procesos, y herramientas de colaboración en tiempo real.
```

---

## Prompt 2: Funciones Principales del Sistema

```
Basándome en la descripción del ATS LTI que hemos definido, necesito que me ayudes a:
1. Listar las funciones principales del sistema organizadas por categorías (gestión de ofertas, reclutamiento, evaluación, matching, entrevistas, colaboración, analytics, onboarding)
2. Para cada función, proporciona una descripción breve de 1-2 líneas explicando qué hace y cómo aporta valor

El sistema debe ser completo pero enfocado en las funcionalidades más críticas para un ATS moderno.
```

---

## Prompt 3: Lean Canvas

```
Necesito crear un Lean Canvas para el ATS LTI. Por favor, completa todas las secciones:

- Problema: Identifica los problemas principales que enfrentan las empresas en el proceso de contratación
- Solución: Cómo LTI resuelve esos problemas
- Propuesta de Valor Única: Una frase que capture el valor diferencial
- Ventajas Competitivas: Qué hace único a LTI
- Canales: Cómo llegaremos a los clientes
- Segmentos de Clientes: Qué tipos de empresas son nuestro target
- Estructura de Costos: Principales costos operativos
- Fuentes de Ingresos: Modelo de pricing (puedes sugerir planes tipo SaaS)
- Métricas Clave: KPIs importantes para el negocio

Formatea el resultado en un diagrama de texto usando cajas ASCII.
```

---

## Prompt 4: Casos de Uso Principales

```
Necesito diseñar 3 casos de uso principales para el ATS LTI. Cada caso de uso debe incluir:

1. Nombre del caso de uso
2. Actor principal
3. Precondiciones
4. Flujo principal (paso a paso)
5. Flujos alternativos (al menos 2-3)
6. Postcondiciones
7. Diagrama de flujo en formato ASCII

Los 3 casos de uso deben ser:
- Publicar oferta de trabajo y recibir aplicaciones
- Evaluar y clasificar candidatos usando IA
- Colaboración y aprobación de contratación entre reclutador y hiring manager

Sé detallado en los flujos, especialmente en cómo la IA se integra en el proceso.
```

---

## Prompt 5: Modelo de Datos

```
Necesito diseñar el modelo de datos completo para el ATS LTI. Debe incluir:

1. Todas las entidades principales del sistema (Usuario, Empresa, Puesto, Candidato, Aplicación, Evaluación, Entrevista, Oferta, etc.)
2. Para cada entidad, lista de atributos con:
   - Nombre del atributo
   - Tipo de dato (String, Integer, UUID, DateTime, Enum, etc.)
   - Si es Primary Key (PK) o Foreign Key (FK)
   - Si es requerido o nullable
3. Relaciones entre entidades (1:1, 1:N, N:M) con explicación
4. Diagrama ER simplificado en formato ASCII

Considera que el sistema debe manejar:
- Multi-tenancy (múltiples empresas)
- Roles de usuarios (reclutador, hiring manager, admin, candidato)
- Estados de aplicaciones y puestos
- Integraciones con sistemas externos (LinkedIn, evaluaciones técnicas, etc.)
- Historial y auditoría
```

---

## Prompt 6: Diseño de Alto Nivel

```
Necesito diseñar la arquitectura de alto nivel del ATS LTI. Incluye:

1. Descripción de la arquitectura general (recomienda si es microservicios, monolito modular, etc.)
2. Lista de componentes principales del sistema
3. Descripción de cómo se comunican los componentes
4. Tecnologías propuestas (lenguajes, frameworks, bases de datos, servicios cloud, etc.)
5. Flujo de datos principal (cómo fluyen los datos desde que un usuario hace una acción hasta que se completa)
6. Diagrama de arquitectura en formato ASCII que muestre:
   - Capas del sistema (cliente, API, servicios, datos)
   - Componentes principales
   - Flujos de comunicación

El sistema debe ser escalable, moderno, y considerar integraciones con servicios de IA externos (OpenAI, Anthropic), APIs de terceros (LinkedIn, GitHub, HackerRank), y servicios de almacenamiento.
```

---

## Prompt 7: Diagrama C4 - Componente Detallado

```
Necesito crear un diagrama C4 completo para uno de los componentes del ATS LTI. Voy a elegir el "Matching Service" que es el motor de emparejamiento inteligente entre candidatos y puestos.

Necesito los 4 niveles del diagrama C4:

1. Nivel 1 - Contexto: Muestra el Matching Service en el contexto del sistema LTI completo
2. Nivel 2 - Contenedor: Desglosa el Matching Service en sus contenedores principales (API, lógica de negocio, base de datos)
3. Nivel 3 - Componente: Desglosa uno de los contenedores en sus componentes internos (matching engine, algoritmos, integraciones con IA)
4. Nivel 4 - Código: Proporciona pseudocódigo o código de ejemplo de uno de los algoritmos clave (por ejemplo, el algoritmo de scoring)

Para el nivel 3 y 4, enfócate en:
- Cómo se analizan los CVs
- Cómo se generan embeddings para matching semántico
- Cómo se calcula el score de matching
- Cómo se integra con servicios de IA (OpenAI, embeddings)

Formatea todos los diagramas en ASCII art.
```

---

## Prompt 8: Integración y Refinamiento Final

```
Tengo todos los componentes del diseño del ATS LTI. Necesito que:

1. Revises la consistencia entre todos los artefactos:
   - Verifica que las entidades del modelo de datos coincidan con los casos de uso
   - Asegura que los componentes de la arquitectura soporten todas las funcionalidades descritas
   - Confirma que el Lean Canvas refleje las capacidades técnicas del sistema

2. Sugieras mejoras o elementos faltantes si los hay

3. Formatea todo el documento final en Markdown con:
   - Tabla de contenidos
   - Secciones bien organizadas
   - Diagramas legibles
   - Código formateado correctamente

El documento debe ser profesional, completo y listo para ser entregado como documentación de diseño de sistema.
```

---

## Notas sobre el Uso de Prompts

- Los prompts fueron utilizados de forma iterativa, refinando resultados según las respuestas del asistente
- Se combinaron múltiples prompts para obtener información más detallada cuando fue necesario
- Los diagramas ASCII fueron generados y luego ajustados manualmente para mejorar la legibilidad
- Se validó la coherencia entre todos los artefactos generados antes de la entrega final

---

**Prompts generados por**: JEOF (Julian Oliveros Forero)  
**Fecha**: 2025-01-27

