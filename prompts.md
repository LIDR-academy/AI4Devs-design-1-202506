# INSTRUCCIONES PARA DESARROLLAR EL MVP DEL ATS "LTI"

Eres un Product Manager Senior y Arquitecto de Software experto en sistemas de recursos humanos y ATS (Applicant Tracking Systems). Tu misión es diseñar desde cero el ATS del futuro llamado "LTI" para una startup innovadora.

## CONTEXTO

Un ATS (Applicant Tracking System) es un sistema de seguimiento de candidatos que gestiona todo el ciclo de vida del reclutamiento, desde la publicación de ofertas hasta la contratación. El flujo típico incluye:

1. Creación de ofertas de empleo
2. Publicación en múltiples canales
3. Recepción de aplicaciones
4. Revisión y filtrado de candidatos
5. Realización de tests online
6. Programación de entrevistas
7. Selección y contratación

## TU MISIÓN

Diseñar la primera versión del sistema LTI que supere a la competencia mediante:

- Eficiencia mejorada para departamentos de HR
- Colaboración en tiempo real entre reclutadores y managers
- Automatizaciones inteligentes
- Asistencia de IA integrada
- Experiencia de usuario superior

## ENTREGABLES REQUERIDOS

### 1. DESCRIPCIÓN DEL PRODUCTO (Sección completa en markdown)

Debes entregar:

#### 1.1. Descripción Breve del Software LTI

- Párrafo de 3-5 líneas explicando qué es LTI
- Público objetivo claramente definido
- Propuesta de valor única

#### 1.2. Valor Añadido y Ventajas Competitivas

- Mínimo 5 ventajas competitivas específicas y diferenciadas
- Cada ventaja debe explicar CÓMO se implementa técnicamente
- Comparación implícita con ATS tradicionales (Greenhouse, Lever, Workable)

#### 1.3. Funciones Principales

Listar y explicar en detalle entre 8-12 funcionalidades core:

- Nombre de la funcionalidad
- Descripción detallada (2-3 líneas)
- Beneficio específico para el usuario
- Nivel de prioridad para MVP (Alta/Media/Baja)

#### 1.4. Lean Canvas

Crear un diagrama Lean Canvas en formato Mermaid con estos 9 bloques:

- Problema (3 principales problemas que resuelve)
- Segmentos de clientes (tipos de empresas objetivo)
- Propuesta de valor única
- Solución (3 características principales)
- Canales (cómo llegar a clientes)
- Fuentes de ingresos (modelo de monetización)
- Estructura de costos (principales costos operativos)
- Métricas clave (KPIs a seguir)
- Ventaja competitiva (qué nos hace únicos)

---

### 2. CASOS DE USO PRINCIPALES

Debes definir **exactamente 3 casos de uso** que representen los flujos más críticos:

Para cada caso de uso incluye:

#### 2.1. Título del Caso de Uso

#### 2.2. Descripción narrativa

- Contexto de inicio
- Actores involucrados (con roles específicos)
- Objetivo del caso de uso
- Flujo paso a paso (mínimo 6-8 pasos)
- Resultado esperado
- Postcondiciones

#### 2.3. Diagrama UML de Caso de Uso

- Utilizar sintaxis Mermaid
- Incluir todos los actores relevantes
- Mostrar relaciones entre casos de uso (include, extend si aplica)
- Identificar claramente los límites del sistema

#### Casos de uso sugeridos (pero puedes proponer otros)

- Proceso completo de publicación de oferta y recepción de candidatos
- Proceso de evaluación colaborativa de candidatos con IA
- Proceso de programación de entrevistas con sincronización de calendarios

---

### 3. MODELO DE DATOS

Diseñar un modelo de datos relacional completo que incluya:

#### 3.1. Lista de Entidades

Mínimo 12 entidades, incluyendo pero no limitado a:

- Usuarios del sistema (con roles)
- Ofertas de trabajo
- Candidatos
- Aplicaciones
- Entrevistas
- Evaluaciones
- Empresas/Organizaciones
- Departamentos
- Procesos de selección
- Actividades/Logs
- Notificaciones
- Documentos/Archivos

#### 3.2. Para cada entidad especifica

- Nombre de la entidad
- Propósito/descripción
- Atributos con:
  - Nombre del atributo
  - Tipo de dato (VARCHAR, INTEGER, DATE, BOOLEAN, TEXT, UUID, etc.)
  - Restricciones (PRIMARY KEY, NOT NULL, UNIQUE, etc.)
  - Descripción breve

#### 3.3. Relaciones

- Identificar todas las relaciones entre entidades
- Especificar cardinalidad (1:1, 1:N, N:M)
- Describir la naturaleza de cada relación
- Identificar claves foráneas

#### 3.4. Diagrama Entidad-Relación

- Crear diagrama ER usando sintaxis Mermaid
- Incluir todas las entidades y relaciones
- Mostrar cardinalidades
- Indicar claves primarias y foráneas

---

### 4. DISEÑO DEL SISTEMA A ALTO NIVEL

#### 4.1. Descripción de la Arquitectura

Explicar en detalle:

- **Patrón arquitectónico elegido** (microservicios, monolito modular, serverless, etc.) y justificación
- **Capas del sistema** (presentación, lógica de negocio, datos, etc.)
- **Componentes principales** (mínimo 8 componentes):

  - Nombre del componente
  - Responsabilidad específica
  - Tecnologías sugeridas
  - Interacciones con otros componentes

- **Tecnologías recomendadas:**
  - Frontend (framework, librerías)
  - Backend (lenguajes, frameworks)
  - Base de datos (SQL/NoSQL, justificación)
  - Infraestructura (cloud provider, contenedores)
  - Servicios de IA/ML
  - Herramientas de colaboración en tiempo real
  - Gestión de archivos
  - Sistema de notificaciones
  - Autenticación y autorización

#### 4.2. Diagrama de Arquitectura

Crear un diagrama de arquitectura usando Mermaid que muestre:

- Todos los componentes principales
- Flujo de datos entre componentes
- Servicios externos integrados
- Capas de la aplicación
- Puntos de integración

---

### 5. DIAGRAMA C4 EN PROFUNDIDAD

Elegir **UNO de estos componentes** para detallar en profundidad usando el modelo C4:

- Motor de IA para screening de candidatos
- Sistema de colaboración en tiempo real
- Motor de automatización de workflows
- Sistema de programación inteligente de entrevistas

**Crear los siguientes niveles C4:**

#### 5.1. Nivel 1 - Contexto del Sistema

- Diagrama Mermaid mostrando el sistema LTI y todos los usuarios/sistemas externos
- Descripción de cada actor externo
- Principales interacciones

#### 5.2. Nivel 2 - Contenedores

- Diagrama Mermaid mostrando los contenedores (aplicaciones, bases de datos, etc.)
- Tecnología de cada contenedor
- Protocolos de comunicación

#### 5.3. Nivel 3 - Componentes

- Enfocarse en el componente elegido
- Diagrama Mermaid mostrando los componentes internos
- Responsabilidad de cada componente
- Interfaces y dependencias

#### 5.4. Nivel 4 - Código (opcional pero recomendado)

- Diagrama de clases o pseudocódigo de las clases principales
- Patrones de diseño aplicados

---

## FORMATO Y ESTRUCTURA DEL DOCUMENTO

El documento markdown final debe:

1. **Tener una estructura clara con:**

   - Tabla de contenidos al inicio
   - Numeración jerárquica
   - Títulos descriptivos

2. **Usar sintaxis markdown correcta:**

   - Headers (##, ###, ####)
   - Listas (ordenadas y no ordenadas)
   - Tablas cuando sea apropiado
   - Bloques de código con ```mermaid para diagramas
   - Énfasis (**negrita**, _cursiva_) estratégico

3. **Incluir diagramas Mermaid para:**

   - Lean Canvas (flowchart o graph)
   - Casos de uso (graph o classDiagram)
   - Modelo de datos (erDiagram)
   - Arquitectura del sistema (graph o C4Context)
   - Diagramas C4 (usar C4Context, C4Container, C4Component)

4. **Mantener profesionalismo:**

   - Lenguaje técnico pero comprensible
   - Justificaciones para decisiones de diseño
   - Consideraciones de escalabilidad y seguridad

5. **Extensión aproximada:**
   - 3000-5000 palabras
   - Mínimo 8-10 diagramas Mermaid

---

## CRITERIOS DE CALIDAD

Tu entrega será evaluada según:

✅ **Completitud:** Todos los entregables están presentes y completos

✅ **Innovación:** Las propuestas son innovadoras y diferenciadas

✅ **Viabilidad técnica:** Las soluciones son implementables en un MVP

✅ **Claridad:** La documentación es clara y puede ser seguida por un equipo de desarrollo

✅ **Diagramas:** Los diagramas Mermaid son correctos y renderizables

✅ **Coherencia:** Todos los componentes están alineados entre sí

✅ **Enfoque en IA:** La integración de IA es significativa y práctica
