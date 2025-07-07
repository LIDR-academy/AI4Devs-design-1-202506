# Prompts Utilizados para el Desarrollo del Sistema LTI ATS

## Prompt 1: Investigación y Análisis de Mercado

```
# Rol
Eres un experto en análisis de mercado y sistemas de gestión de candidatos (ATS) con 15 años de experiencia en HR Technology.

# Objetivo
Dada la necesidad de LTI startup de desarrollar un ATS revolucionario, realiza un análisis exhaustivo del mercado actual identificando oportunidades de disrupción y claves del éxito.

# Formato
Solo quiero un análisis estructurado que incluya: problemas identificados, oportunidades de mercado, claves del éxito, factores críticos, diferenciación competitiva e hipótesis de valor validadas.

# Historia de Usuario: Brainstorming e Investigación de Claves del Éxito

## Resumen
Como product manager de LTI, necesito entender profundamente el mercado de ATS para identificar las claves del éxito que harán que nuestro producto se diferencie significativamente de la competencia y genere valor real para los usuarios.

## Descripción de la Funcionalidad
El análisis debe cubrir:
- Identificación de problemas críticos en ATS existentes con datos cuantitativos
- Detección de tendencias emergentes y oportunidades de mercado
- Definición de 5 claves del éxito principales con oportunidad, solución e impacto esperado
- Factores críticos técnicos, de producto y negocio
- Análisis competitivo vs. jugadores principales (Workday, Greenhouse, BambooHR)
- Hipótesis de valor con métricas específicas y validación
```

## Prompt 2: Definición de Valor y Descripción del Software

```
# Rol
Eres un especialista en productos SaaS B2B con expertise en HR Technology y posicionamiento de producto.

# Objetivo
Dada la investigación de mercado realizada para LTI, define una descripción completa del software que articule claramente el valor añadido, ventajas competitivas y diferenciadores únicos.

# Formato
Solo quiero una descripción estructurada que incluya: descripción del software, valor añadido y ventajas competitivas, diferenciadores únicos con explicación detallada.

# Historia de Usuario: Descripción del Software LTI

## Resumen
Como CMO de LTI, necesito una descripción clara y convincente del software que comunique efectivamente nuestro valor único en el mercado y resuene con los pain points identificados de nuestros clientes objetivo.

## Descripción de la Funcionalidad
La descripción debe incluir:
- Definición clara de qué es LTI y cómo transforma el reclutamiento
- Lista específica de ventajas competitivas con métricas concretas (reducción 50% tiempo, precisión 95%, etc.)
- 4 diferenciadores únicos principales que nos separen de la competencia
- Enfoque en beneficios tangibles para departamentos de HR
- Lenguaje orientado a resultados y ROI
```

## Prompt 3: Definición de Funciones Principales

```
# Rol
Eres un especialista en diseño de productos SaaS con experiencia en definición de funcionalidades core para plataformas de reclutamiento.

# Objetivo
Dada la descripción del software LTI, define las 5 funciones principales que componen el sistema y entregan el valor prometido a los usuarios.

# Formato
Solo quiero una explicación estructurada de funciones principales con: nombre de función, descripción detallada y lista de capacidades específicas para cada función.

# Historia de Usuario: Explicación de Funciones Principales

## Resumen
Como CPO de LTI, necesito definir claramente las funciones principales del sistema para que el equipo de desarrollo y los stakeholders entiendan exactamente qué capacidades debe tener el producto para cumplir con la propuesta de valor.

## Descripción de la Funcionalidad
Las funciones principales deben incluir:
- Gestión Inteligente de Candidatos con parsing automático y scoring ML
- Matching y Recomendación por IA con algoritmos avanzados
- Colaboración en Tiempo Real con workspace compartido
- Automatización de Procesos con programación y comunicaciones automáticas
- Analytics y Reporting con métricas de rendimiento y predicciones
- Cada función debe tener 4-5 capacidades específicas detalladas
```

## Prompt 4: Modelo de Negocio - Lean Canvas

```
# Rol
Eres un consultor especializado en estrategia de negocio y modelos Lean Canvas para startups tecnológicas en el sector HR Tech.

# Objetivo
Dadas las funciones principales definidas para LTI, desarrolla un Lean Canvas completo que articule el modelo de negocio y la estrategia de go-to-market.

# Formato
Solo quiero un diagrama Lean Canvas en formato Mermaid que incluya todos los 9 componentes clave del modelo de negocio con contenido específico para LTI.

# Historia de Usuario: Lean Canvas para Entender el Modelo de Negocio

## Resumen
Como CEO de LTI, necesito un Lean Canvas que visualice claramente nuestro modelo de negocio, segmentos de cliente, propuesta de valor, canales de distribución, fuentes de ingreso y estructura de costos para poder comunicar efectivamente nuestra estrategia a inversores y stakeholders.

## Descripción de la Funcionalidad
El Lean Canvas debe incluir:
- Problema: 5 pain points específicos del mercado de reclutamiento
- Solución: 5 capacidades clave de LTI que resuelven estos problemas
- Propuesta de Valor Única: Statement claro del ATS inteligente
- Ventaja Competitiva: Factores defensibles únicos
- Segmentos de Cliente: 4 tipos específicos de organizaciones
- Canales: 4 estrategias de distribución
- Fuentes de Ingreso: Modelo SaaS con múltiples streams
- Estructura de Costos: Principales categorías de gastos
- Métricas Clave: KPIs específicos para validar éxito
```

## Prompt 5: Casos de Uso Principales

```
# Rol
Eres un analista de sistemas especializado en diseño de casos de uso para plataformas SaaS complejas con múltiples tipos de usuarios.

# Objetivo
Dado el modelo de negocio de LTI, diseña los 3 casos de uso más críticos que demuestren el valor diferencial del sistema y justifiquen la propuesta de valor.

# Formato
Solo quiero 3 casos de uso detallados que incluyan: descripción, actores, flujo principal y diagramas UML específicos (secuencia o flujo de proceso).

# Historia de Usuario: Casos de Uso Principales con Diagramas

## Resumen
Como arquitecto de soluciones de LTI, necesito documentar los casos de uso más representativos del sistema para que el equipo de desarrollo entienda los flujos críticos y puedan implementar correctamente la lógica de negocio.

## Descripción de la Funcionalidad
Los casos de uso deben incluir:
- Caso 1: Publicación y Matching Inteligente de Vacantes (con diagrama de secuencia)
- Caso 2: Evaluación Colaborativa de Candidatos (con diagrama de secuencia)
- Caso 3: Automatización del Pipeline de Reclutamiento (con diagrama de flujo)
- Cada caso debe tener: descripción, actores específicos, flujo principal detallado
- Diagramas Mermaid apropiados para cada tipo de caso de uso
- Enfoque en mostrar cómo la IA y automatización mejoran la experiencia
```

## Prompt 6: Modelo de Datos

```
# Rol
Eres un arquitecto de datos senior especializado en diseño de bases de datos para aplicaciones SaaS de alto volumen con capacidades de ML.

# Objetivo
Dados los casos de uso principales de LTI, diseña un modelo de datos completo que soporte todos los flujos del sistema con óptima performance y escalabilidad.

# Formato
Solo quiero un modelo de datos que incluya: entidades principales con atributos y tipos, relaciones entre entidades, y diagrama ER en formato Mermaid.

# Historia de Usuario: Modelo de Datos Completo

## Resumen
Como arquitecto de datos de LTI, necesito definir un modelo de datos robusto que soporte eficientemente todos los casos de uso del sistema, permita escalabilidad horizontal y facilite las operaciones de ML para matching y analytics.

## Descripción de la Funcionalidad
El modelo de datos debe incluir:
- 8 entidades principales: Users, Companies, Jobs, Candidates, Applications, Interviews, Evaluations, AI_Insights
- Para cada entidad: todos los atributos necesarios con tipos de datos específicos
- Claves primarias (UUID), claves foráneas y constraints
- Campos optimizados para búsquedas y análisis de ML
- Diagrama ER completo en Mermaid mostrando todas las relaciones
- Consideraciones para escalabilidad y performance
```

## Prompt 7: Arquitectura de Alto Nivel

```
# Rol
Eres un arquitecto de software senior especializado en arquitecturas de microservicios para aplicaciones SaaS escalables con componentes de ML/AI.

# Objetivo
Dado el modelo de datos de LTI, diseña una arquitectura de sistema de alto nivel que soporte todos los requerimientos funcionales y no funcionales del ATS.

# Formato
Solo quiero una arquitectura completa que incluya: componentes principales, diagrama de arquitectura en Mermaid, y descripción de tecnologías clave.

# Historia de Usuario: Diseño de Sistema a Alto Nivel

## Resumen
Como CTO de LTI, necesito una arquitectura de sistema robusta y escalable que soporte el crecimiento del producto, integre efectivamente componentes de IA, y permita el desarrollo ágil por parte de equipos distribuidos.

## Descripción de la Funcionalidad
La arquitectura debe incluir:
- 10 microservicios principales claramente definidos
- 4 capas arquitectónicas: Frontend, API, Application Services, Data
- Diagrama completo en Mermaid mostrando todas las conexiones
- Integración con servicios externos (Email, Calendar, LinkedIn, Slack)
- Stack tecnológico específico: Ionic/Angular (frontend híbrido), Node.js/TypeScript (backend), PostgreSQL, Redis, Elasticsearch
- Consideraciones de escalabilidad, performance y mantenibilidad
```

## Prompt 8: Diagrama C4 del Matching Service

```
# Rol
Eres un arquitecto de software especializado en documentación técnica C4 para sistemas complejos con componentes de machine learning.

# Objetivo
Dada la arquitectura de alto nivel de LTI, profundiza en el componente más crítico (Matching Service) creando diagramas C4 completos que muestren todos los niveles de abstracción.

# Formato
Solo quiero diagramas C4 en los 4 niveles: contexto, containers, componentes y código, todos en formato Mermaid con explicaciones específicas.

# Historia de Usuario: Diagrama C4 del Matching Service

## Resumen
Como arquitecto de software de LTI, necesito documentar detalladamente el Matching Service para que tanto stakeholders ejecutivos como desarrolladores entiendan la complejidad y el diseño de este componente crítico del sistema.

## Descripción de la Funcionalidad
Los diagramas C4 deben incluir:
- Nivel 1: Contexto del sistema completo mostrando usuarios y sistemas externos
- Nivel 2: Containers mostrando Ionic/Angular App (híbrida), API Gateway, microservicios y bases de datos específicas
- Nivel 3: Componentes del Matching Service con responsabilidades específicas
- Nivel 4: Código Python representativo del Score Calculator
- Cada nivel debe mostrar progresivamente más detalle técnico
- Diagramas claros en Mermaid para cada nivel
- Explicaciones específicas de cada componente y su función
```

---

## Metodología de Uso de Prompts

### Secuencia Lógica de Análisis
Los prompts siguen una secuencia estructurada que replica el proceso de diseño de sistemas:

1. **Investigación y Análisis** → Identificar oportunidades de mercado
2. **Definición de Valor** → Articular la propuesta de valor única
3. **Funciones Principales** → Traducir valor en capacidades específicas
4. **Modelo de Negocio** → Validar viabilidad comercial
5. **Casos de Uso** → Definir flujos críticos de usuario
6. **Modelo de Datos** → Estructurar la información del sistema
7. **Arquitectura de Alto Nivel** → Diseñar la solución técnica
8. **Componente Crítico** → Profundizar en el elemento más importante

### Anatomía de Prompts OpenAI
Cada prompt sigue la estructura estándar:
- **# Rol**: Define la expertise y perspectiva del asistente
- **# Objetivo**: Especifica qué se busca lograr
- **# Formato**: Indica el formato de salida esperado
- **# Historia de Usuario**: Contextualiza la necesidad desde el usuario
- **## Resumen**: Explica el "por qué" desde la perspectiva del stakeholder
- **## Descripción de la Funcionalidad**: Detalla el "qué" específico a generar

##Notas de Implementación en los prompts##

### Proceso de Implementación
1. **Ejecución Secuencial**: Cada prompt se ejecuta en orden, usando el resultado anterior como contexto
2. **Refinamiento Iterativo**: Se ajustan prompts basado en resultados para mayor precisión
3. **Validación Cruzada**: Se verifica consistencia entre artefactos generados
4. **Integración Final**: Se consolida todo en documentación coherente y completa

### Resultado Final
Esta metodología genera el documento `LTI-SP.md` completo con todos los artefactos solicitados, manteniendo coherencia técnica y estratégica en todo el diseño del sistema.

### Agente Usado
**Utilizar Claude-4** como agente de IA para ejecutar estos prompts, ya que:
- Mantiene coherencia técnica en documentos largos
- Maneja efectivamente diagramas Mermaid complejos
- Proporciona análisis estratégico profundo
- Genera código representativo de alta calidad
- Integra múltiples perspectivas (negocio, técnica, UX) de manera cohesiva 