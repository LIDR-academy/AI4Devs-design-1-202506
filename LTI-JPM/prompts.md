# Investigación y Análisis de Requisitos

## Herramienta: Google NotebookLM

Utilicé esta herramienta para la recolección de fuentes que me permitieran comprender que catacterísticas están presentes en un sistema de tipo ATS

### Primer Prompt (Recolección de fuentes): Para clasificar funcionalidades del sistema

```
Necesito construir la aplicación de tipo: ATS (Applicant-Tracking System).

Para ello, necesito que me ayudes a recolectar fuentes que me permitan construir una aplicación de este tipo. Pero priorizando foco en:

- Aumentar la eficiencia para los departamentos de HR  
- Mejorar la colaboración en tiempo real entre reclutadores y managers  
- Automatizaciones  
- Asistencia de IA en diversas tareas  
- Beneficiar la conversión con el customer journey en un sistema de este tipo
- Reconocer sistemas más conocidos de tipo ATS existentes en el mercado para entender las funcionalidades que ofrecen

Prioriza PDFs, videos y artículos (pero solo de fuentes con voz de autoridad en el tema)
```

### Segundo Prompt (Recolección de fuentes): Para clasificar problemas no resueltos por los sistemas ATS actuales

```
Ahora necesito que me ayudes a recolectar fuentes que me permitan comprender, de forma clara, los accionables, datos claves y puntos relevantes de los principales problemas sin resolver de los sistemas ATS que actualmente están en el mercado. Haciendo foco en:

- Necesidades sin satisfacer o dolores no cubiertos por los sistemas ATS actuales
- Grandes dolores o fricciones desde la perspectiva de los aspirantes
- Grandes dolores o fricciones desde la perspectiva de los reclutadores
- Principales desafíos e inconvenientes técnicos en la implementación de sistemas ATS
- Como escalar correctamente productos de este tipo, estando por encima de los competidores al mismo tiempo

Prioriza PDFs, videos, encuentas y contenido de personas de autoridad en el tema
```

### Tercer Prompt: Navegación sobre las fuentes recuperadas, para recolección de contexto e ingeniería de requisitos

```
Necesito que me entregues un resumen profesional, claro y organizado que me permita recolectar toda la base de conocimiento necesaria para la construcción de un sistema ATS, basándote en:

## Necesidades Preliminares

- Aumentar la eficiencia para los departamentos de HR  
- Mejorar la colaboración en tiempo real entre reclutadores y managers  
- Automatizaciones  
- Asistencia de IA en diversas tareas  
- Beneficiar la conversión con el customer journey en un sistema de este tipo
- Reconocer sistemas más conocidos de tipo ATS existentes en el mercado para entender las funcionalidades que ofrecen

## Necesidades por Atender

- Necesidades sin satisfacer o dolores no cubiertos por los sistemas ATS actuales
- Grandes dolores o fricciones desde la perspectiva de los aspirantes
- Grandes dolores o fricciones desde la perspectiva de los reclutadores
- Principales desafíos e inconvenientes técnicos en la implementación de sistemas ATS
- Como escalar correctamente productos de este tipo, estando por encima de los competidores al mismo tiempo

## Necesidades Complementarias

- ¿Como optimizar los ATS con IA para el proceso de reclutamiento?
- ¿Que beneficios aportan a los candidatos, los sistemas ATS con IA ?
- ¿De que manera mejoras los ATS con IA la diversidad e inclusión?

Si consideras relevante agregar más sesiones y contenidos de importancia a la base de conocimiento, hazlo. 

Recuerda que el objetivo principal acá es recolectar el mayor número de información y datos de importancia y gran relevancia, que me permita construir un sistema ATS desde cero impulsado con IA. 

Esta base de conocimiento, la usaré para pedirle a un copiloto de escritura de código con IA, que me ayude a desarrollar el sistema ATS desde cero.
```

#### NotebookLM (finalidad del output final)

- Con la base de conocimiento construída desde NotebookLM, creé el archivo [base_conocimiento_sistema_ats.md](../docs/base_conocimiento_sistema_ats.md) 

## Herramienta: CursorAI + claude-4-sonnet

### Primer Prompt: Definición de funcionalidades

```
# Contexto 
Eres un experto en producto, con experiencia en sistemas ATS (Applicant-Tracking System)

* ¿Qué funcionalidades básicas tiene un sistema ATS?
  - Descríbemelas en un listado, ordenado de mayor a menor prioridad

* ¿Qué beneficios obtiene el cliente de un sistema ATS para considerar su uso?

* ¿Qué alternativas tiene a usar un sistema ATS y cuando pueden ser relevantes?

* ¿Cómo es el customer journey normal de un cliente que usa un sistema ATS? 
  - Descríbeme paso a paso todas las interacciones

* ¿Qué sistemas ATS open source son más conocidos?

* ¿Qué sistemas ATS comerciales son más conocidos? Compáralos en función de [funcionalidades a,b,c] y valora cuál sería mejor opción

## Fuente de datos
Principalmente, vas a usar como base de conocimiento, el contenido del archivo @base_conocimiento_sistema_ats.md 

## Salida
Vas a anexar la nueva información generada, al final del archivo @base_conocimiento_sistema_ats.md 
```

### Segundo Prompt: Corrección de customer journey entregado por la IA

````
El customer Journey que defines acá en la base de conocimiento, no corresponde con lo solicitado.

Necesito entender, a partir de l base de conocimiento entregada, y el estado del arte de otros sistemas ATS en el mercado. Cual sería el customer journey dentro de la aplicación ATS que voy a construir. 

Es decir, un paso a paso de todas las interacciones de navegación y acciones que el usuario ejecutará en la aplicación, para lograr su objetivo. Esto es necesario como construcción preliminar de necesidades antes de la definición del diseño del producto
````

### Tercer Prompt: Definición de subtareas para construcción del diseño del sistemas ATS

```
# Necesidad

Eres un experto analista y arquitecto de software, con experiencia en proyectos complejos y diseño de sistemas. 

Dada la necesidad de construcción del sistema ATS, define y describe los pasos a dar en un orden lógico que me permita ir verificando que los avances funcionan. 

No crees ni escribas en archivos nada aún. Cuando te confirme que todo está OK, puedes comenzar con la implementación del primer paso, y solo avanzarás cuando te confirme de nuevo, así sucesivamente hasta el final.

Este será el listado de subtareas que estaremos trabajando

# Base de conocimiento
Te basarás de la sección: 5. Análisis Detallado de Funcionalidades y Comparativas del archivo: @base_conocimiento_sistema_ats.md 

# Salida
Añadirás al final del archivo @diseño_sistema_ats.md el resultado de la implementación de cada una de las siguientes subtareas:

- ✅ **Descripción breve del software LTI**, valor añadido y ventajas competitivas.
 
- ✅ **Explicación de las funciones principales.**  
  
- ✅ **Añadir un diagrama Lean Canvas** para entender el modelo de negocio
  - Utiliza para esto, el modelo de negocio SAAS pero con posibilidad de B2B con paquetes corporativos para otras compañías.
  - En este cuadro debes registrar los detalles del negocio referido al: problema, solución, propuesta de valor, ventaja, clientes, métricas, canales, costos e ingresos. 
  
- ✅ **Descripción de los 3 casos de uso principales** con el diagrama asociado a cada uno 
  - Prioriza entrega de valor a reclutadores y aspirantes, por encima de features excesivas.
  - Representa estos casos de uso en el tipo de diagrama más adecuado usando el formato plantUML acorde a la sintaxis y buenas prácticas UML, define y describe lo que sea necesario en relación a cada caso de uso.
  - Crea un diagrama para cada caso de uso
  
- ✅ **Modelo de datos** que cubra entidades, atributos (nombre y tipo) y relaciones (limítate al modelo de datos relevante a los tres casos de uso definidos en el caso anterior).
  - Define las entidades de negocio relacionadas a los casos de uso 
  - Crea un diagrama en formato mermaid del modelo de datos
  
- ✅ **Diseño del sistema a alto nivel**, tanto explicado como diagrama adjunto. 
  - Explica la arquitectura del sistema a construir
  - Debe ser de arquitectura distribuída basado en microservicios
  - Principalmente, incluir sistema de mensajería asíncrona para procesos complejos y de alta demanda computacional
  - Cada microservicio tendrá su base de datos
  - La aplicación tendrá un frontend que se comunicará con el backend a través de un API Gateway
  - El proveedor de infraestructura es AWS
  - Incluye balanceo de carga y CDN
  - Usa S3 para alojar los archivos estáticos que consideres relevantes
  - Importante el uso de caché Redis para favorecer el rendimiento de la aplicación
  - Utiliza servicios complementarios para garantizar la funcionalidad de las características, ya sean dentro de AWS o APIs externas
  
- ✅ **Diagrama C4** que llegue en profundidad a uno de los componentes del sistema
  - Selecciona el componente o microservicio más relevante del sistema y crea estos diagramas del modelo C4
    - Diagrama de Contexto
    - Diagrama de Contenedores
    - Diagrama de Coponentes
    - Diagramas de Código
      - Diagrama de clases
      - Diagrama de secuencia
      - Diagrama de estado
  - Los diagramas deberán ser entregados en formato mermaid

Recuerda no ejecutar cada una de estas tareas hasta que yo no apruebe una a una las implementaciones que vas a proponerme
```

#### Respuesta del modelo con plan de ejecución 

```
¡Perfecto! Aquí tienes el listado completo de los **7 pasos** que definimos y completamos para el diseño e implementación del sistema LTI (Learning Talent Intelligence):

---

## **🎯 PASOS COMPLETADOS PARA EL DISEÑO DEL SISTEMA ATS**

### **✅ PASO 1: Descripción breve del software LTI**
- **Objetivo**: Definir qué es LTI y su propuesta de valor
- **Entregables**: 
  - Descripción del sistema ATS de nueva generación con IA
  - Valor añadido cuantificado (80% reducción tiempo, 67% costos, +40% precisión)
  - 4 ventajas competitivas clave
  - Target market: empresas 50-500 empleados

### **✅ PASO 2: Funciones principales**
- **Objetivo**: Definir las funcionalidades esenciales del sistema
- **Entregables**:
  - 3 funciones principales alineadas con casos de uso:
    1. **Gestión de Candidatura** - Portal para candidatos
    2. **Proceso de Reclutamiento** - Herramientas para reclutadores  
    3. **Evaluación y Selección** - Sistema para hiring managers
  - Matriz de funcionalidades por tipo de usuario

### **✅ PASO 3: Diagrama Lean Canvas**
- **Objetivo**: Modelo de negocio visual y conciso
- **Entregables**:
  - Canvas simplificado con 9 componentes clave
  - Propuesta de valor: "Reduce tiempo contratación 80% mejora calidad selección 20% ATS en español"
  - Modelo SaaS: Starter $8/u, Pro $15/u, Enterprise $25/u
  - Segmentos de mercado y canales definidos

### **✅ PASO 4: Casos de uso principales**
- **Objetivo**: Definir flujos de usuario MVP
- **Entregables**:
  - 3 casos de uso en formato tabla estructurada (máximo 5 pasos cada uno)
  - Diagramas PlantUML para visualización
  - Flujos alternativos y postcondiciones definidas
  - Configuración servidor PlantUML para vista previa

### **✅ PASO 5: Modelo de datos**
- **Objetivo**: Estructura de datos escalable y eficiente
- **Entregables**:
  - 10 entidades organizadas en 3 categorías (Core, Soporte, Configuración)
  - Diagrama ER completo en Mermaid
  - UUID como primary keys para escalabilidad
  - Índices recomendados y consideraciones técnicas

### **✅ PASO 6: Diseño del sistema a alto nivel**
- **Objetivo**: Arquitectura distribuida escalable
- **Entregables**:
  - 8 microservicios en AWS (3 principales + 5 soporte)
  - Infraestructura completa: EKS, RDS PostgreSQL, DynamoDB, ElastiCache Redis, S3
  - Comunicación híbrida (síncrona + asíncrona)
  - Estimación costos: $2,842/mes para 10,000 usuarios
  - Diagrama arquitectónico simplificado sin solapamientos

### **✅ PASO 7: Diagrama C4 - Recruitment Service**
- **Objetivo**: Análisis detallado del microservicio más relevante
- **Entregables**:
  - **4 niveles C4 completos**:
    1. **Contexto**: Relaciones con usuarios y sistemas externos (simplificado)
    2. **Contenedores**: Arquitectura técnica (ultra-simple, sin solapamientos)
    3. **Componentes**: Estructura interna API (flujo limpio top-down)
    4. **Código**: Diagramas de clases, secuencia y estados
  - Consideraciones de implementación y patrones de diseño
```

### Ejecución de Pasos: Iteraciones Intermedias

```
* CursorAI no reconocía diagramas en formato PlantUML para pre visualizarlos en el mardown. Se corrigió iterando con el modelo desde CursorAI

* Limpieza en secciones del entregable, como enfoque en las funcionalidades, limite de implementación de MVP de la solución, limpieza de datos innecesarios, etc...

* Correcciones en formato de diagramas y definiciones de arquitecturas un poco por fuera de la frontera de las necesidades de negocio

* Formato y convenciones de diagramas de arquitectura
```

