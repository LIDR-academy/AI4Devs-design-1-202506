# Prompts de Investigación ATS

## Prompt Principal
### Cursor - claude-4-sonnet

Eres un experto en producto, con experiencia en ATS (Applicant-Tracking System). 
Te voy hacer preguntas sobre los ATS y luego quiero hacer un resumen en @ats-research.md para luego hacer un meta-prompting basado en este research.

¿Qué funcionalidades básicas tiene un ATS? Descríbemelas en un listado, ordenado de mayor a menor prioridad
¿Qué beneficios obtiene el cliente de un ATS para considerar su uso?
¿Qué alternativas tiene a usar un ATS y cuando pueden ser relevantes?
¿Cómo es el customer journey normal de un cliente que usa un ATS? Descríbeme paso a paso todas las interacciones
¿Qué ATS open source son más conocidos?
¿Qué ATS comerciales son más conocidos? Compáralos en sus funciones y valora cuál sería mejor opción

Guarda todos los prompts realizados en este chat en @prompts.md

## Prompt de Diseño del Sistema ATS para LTI
### Cursor - claude-4-sonnet

Eres un product manager senior como muchos años de experiencia, necesito diseñar y documentar un sistema de software ATS para LTI siguiendo las fases de investigación y análisis, casos de uso, modelado de datos, y diseño de alto nivel.

LTI es una startup que quiere desarrollar el ATS (Applicant-Tracking System) del futuro.
Te dejo este imagen que rapidamente te da contexto de lo que es un ATS @1713970482103.png 

Necesito diseñar la primera versión del sistema, entregando los siguientes artefactos:
- Descripción breve del softwareATS para LTI, valor añadido y ventajas competitivas. Explicación de las funciones principales. Puedes apoyarte en el research que previamente se hizo en @ats-research.md  
- Añadir un diagrama Lean Canvas para entender el modelo de negocio. Puedes apoyarte en la libreria @Lienzo Lean Canvas  y quiero que el resultado sea parecido a esta imagen @https://innokabi.com/wp-content/uploads/2018/03/Lienzo-Lean-Canvas-Innokabi-v2.jpg 
- Descripción de los 3 casos de uso principales, con el diagrama asociado a cada uno, para los casos de uso usa el formato plantUML. Diferencia entre los tipos de roles de usuarios del sistema. Acorde a la sintaxis y buenas prácticas UML, define y describe lo que sea necesario. 
- Modelo de datos que cubra entidades, atributos (nombre y tipo) y relaciones, dame el codigo mermaid del ERD.
- Necesito aplicacion Diagrama C4, que llegue en profundidad a uno de los componentes del sistema, el que prefieras.
- Tambien eres un experto programador en python. Dame el código python para visualizar un diagrama de arquitectura en el formato de Diagrams, donde se pueda ver el diseño del sistema a alto nivel y explicamelo.
- Creame un documento ARD del sistema.

Usa el archivo @LTI-JCGA.md para guardar la documentación generada
Recuerda guardar el promt en @prompts.md

## Prompt
### Cursor - auto

Vamos hacer ajustes en los 3 casos de uso, lo que necesito son los "UML de Caso de Uso" para los 3 casos de uso que planteaste, damelo en el formato PlantUML

## Prompt
### Cursor - auto
crea una aplicacion python que permita correr el codigo generado

## Prompt
### Cursor - auto
Prueba

## Prompt
### Cursor - auto
verifica el archivo @LTI-JCGA.md si esta actualizado con respecto a los diagramas UML de Caso de Uso y actualizalo

## Prompt
### Cursor - auto
No me gusta como quedo el diagrama Lean Canvas, no me sirve con mermaid, el resultado debe ser una imagen parecida a @Lienzo-Lean-Canvas-Innokabi-v2.jpg 

## Prompt
### Cursor - auto
Segun el documento @LTI-JCGA.md genera un PRD y guardalo en el archivo @PRD.md 

## Prompt 
### ChatGPT 4o

Genera un Lean Canvas diagram basado en la siguiente información:

# Product Requirements Document (PRD)
## Sistema ATS para LTI - LTI ATS

---

### **Información del Documento**

| Campo | Valor |
|-------|-------|
| **Producto** | LTI ATS (Applicant Tracking System) |
| **Versión** | 1.0 |
| **Fecha de Creación** | Julio 2024 |
| **Autor** | Equipo de Producto LTI |
| **Estado** | Borrador |

---

## 1. Resumen Ejecutivo

### 1.1 Visión del Producto
**LTI ATS** es el Applicant Tracking System del futuro, diseñado para revolucionar el proceso de reclutamiento mediante inteligencia artificial, automatización avanzada y una experiencia de usuario excepcional.

### 1.2 Propósito del PRD
Este documento define los requerimientos funcionales y no funcionales para el desarrollo del sistema ATS de LTI, estableciendo las bases para la implementación de un Applicant Tracking System moderno, escalable y centrado en la experiencia del usuario.

### 1.3 Objetivos del Producto
- **Reducir el tiempo de contratación** en un 40%
- **Mejorar la calidad de candidatos** en un 25%
- **Automatizar procesos manuales** con IA
- **Proporcionar insights avanzados** para optimización
- **Crear una experiencia de usuario superior**

---

## 2. Contexto del Producto

### 2.1 Problema que Resuelve
- **Procesos manuales ineficientes** que consumen tiempo valioso
- **Pérdida de candidatos cualificados** por falta de seguimiento
- **Falta de insights** para optimizar procesos de reclutamiento
- **Experiencia fragmentada** entre diferentes herramientas

### 2.2 Oportunidad de Mercado
- Mercado de ATS en crecimiento con CAGR del 6.5%
- Demanda creciente de automatización en HR
- Necesidad de herramientas con IA integrada
- Segmento de startups y empresas medianas desatendido

### 2.3 Propuesta de Valor Única
"El ATS del futuro: IA + UX + Analytics para revolucionar el reclutamiento"

---

## 3. Segmentos de Usuario

### 3.1 Usuarios Principales

#### **Reclutadores (Recruiters)**
- **Perfil**: Profesionales de HR responsables del reclutamiento
- **Necesidades**: Gestión eficiente de vacantes, evaluación de candidatos, comunicación automatizada
- **Pain Points**: Procesos manuales, pérdida de candidatos, falta de insights
- **Objetivos**: Reducir tiempo de contratación, mejorar calidad de candidatos

#### **Hiring Managers**
- **Perfil**: Líderes de equipo que toman decisiones de contratación
- **Necesidades**: Evaluación técnica, decisión final de contratación
- **Pain Points**: Falta de información completa sobre candidatos
- **Objetivos**: Contratar candidatos de alta calidad, optimizar procesos

#### **Administradores del Sistema**
- **Perfil**: Personal técnico y de HR que configura el sistema
- **Necesidades**: Configuración, gestión de usuarios, reportes
- **Pain Points**: Sistemas complejos, falta de flexibilidad
- **Objetivos**: Configurar workflows eficientes, mantener compliance

#### **Candidatos**
- **Perfil**: Personas que aplican a vacantes
- **Necesidades**: Proceso transparente, comunicación clara, seguimiento
- **Pain Points**: Falta de transparencia, comunicación deficiente
- **Objetivos**: Experiencia positiva, feedback oportuno

### 3.2 Segmentos de Cliente
- **Startups** (10-50 empleados): Necesidad de herramientas escalables
- **Empresas medianas** (50-500 empleados): Procesos estandarizados
- **Empresas tech**: Requisitos técnicos específicos

---

## 4. Requerimientos Funcionales

### 4.1 Gestión de Vacantes

#### **RF-001: Creación de Vacantes**
- **Descripción**: El sistema debe permitir crear vacantes con información completa
- **Criterios de Aceptación**:
  - Crear vacante con título, descripción, requisitos, ubicación
  - Definir rango salarial y tipo de contrato
  - Establecer fechas de publicación y cierre
  - Asignar reclutador responsable
- **Prioridad**: Alta
- **Estimación**: 2 semanas

#### **RF-002: Publicación Automática**
- **Descripción**: Publicar vacantes en múltiples portales automáticamente
- **Criterios de Aceptación**:
  - Integración con LinkedIn, Indeed, Glassdoor
  - Personalización de descripción por portal
  - Gestión de estados de publicación
  - Tracking de aplicaciones por fuente
- **Prioridad**: Alta
- **Estimación**: 3 semanas

#### **RF-003: Templates Personalizables**
- **Descripción**: Templates de vacantes por industria y rol
- **Criterios de Aceptación**:
  - Templates predefinidos por industria
  - Personalización de campos obligatorios
  - Reutilización de templates exitosos
- **Prioridad**: Media
- **Estimación**: 1 semana

### 4.2 Captura y Procesamiento de Candidatos

#### **RF-004: Parsing Inteligente de CVs**
- **Descripción**: Extraer datos estructurados de CVs usando IA
- **Criterios de Aceptación**:
  - Procesar CVs en PDF, DOC, DOCX
  - Extraer información personal, experiencia, educación
  - Identificar skills y tecnologías
  - Calcular años de experiencia
- **Prioridad**: Alta
- **Estimación**: 4 semanas

#### **RF-005: Eliminación de Duplicados**
- **Descripción**: Identificar y manejar candidatos duplicados
- **Criterios de Aceptación**:
  - Detectar duplicados por email, teléfono, nombre
  - Fusión automática de perfiles duplicados
  - Notificación al reclutador sobre duplicados
- **Prioridad**: Media
- **Estimación**: 2 semanas

#### **RF-006: Enriquecimiento de Datos**
- **Descripción**: Enriquecer perfiles con datos externos
- **Criterios de Aceptación**:
  - Integración con LinkedIn para datos adicionales
  - Verificación de información de contacto
  - Análisis de presencia online
- **Prioridad**: Baja
- **Estimación**: 3 semanas

### 4.3 Evaluación y Selección

#### **RF-007: Scoring Automático**
- **Descripción**: Asignar scores automáticos a candidatos usando IA
- **Criterios de Aceptación**:
  - Algoritmo de scoring basado en requisitos del puesto
  - Factores: experiencia, skills, educación, match cultural
  - Score de 0-100 con explicación de criterios
  - Aprendizaje continuo del algoritmo
- **Prioridad**: Alta
- **Estimación**: 5 semanas

#### **RF-008: Tests Técnicos Integrados**
- **Descripción**: Integrar tests técnicos en el proceso de evaluación
- **Criterios de Aceptación**:
  - Biblioteca de tests por tecnología/rol
  - Tests automáticos y manuales
  - Evaluación automática de resultados
  - Integración con plataformas externas (HackerRank, etc.)
- **Prioridad**: Alta
- **Estimación**: 4 semanas

#### **RF-009: Evaluaciones de Soft Skills**
- **Descripción**: Evaluar habilidades blandas de candidatos
- **Criterios de Aceptación**:
  - Tests de personalidad integrados
  - Evaluación de competencias culturales
  - Tests de inteligencia emocional
  - Reportes de compatibilidad con equipo
- **Prioridad**: Media
- **Estimación**: 3 semanas

### 4.4 Comunicación y Engagement

#### **RF-010: Emails Automatizados**
- **Descripción**: Enviar emails personalizados automáticamente
- **Criterios de Aceptación**:
  - Templates personalizables por etapa del proceso
  - Personalización con datos del candidato
  - Tracking de apertura y clicks
  - Integración con calendario para seguimiento
- **Prioridad**: Alta
- **Estimación**: 2 semanas

#### **RF-011: Portal del Candidato**
- **Descripción**: Portal para que candidatos sigan su proceso
- **Criterios de Aceptación**:
  - Dashboard personalizado del candidato
  - Estado actual del proceso
  - Documentos requeridos y entregados
  - Calendario de entrevistas
  - Chat con reclutador
- **Prioridad**: Media
- **Estimación**: 4 semanas

#### **RF-012: Notificaciones Push y SMS**
- **Descripción**: Notificaciones en tiempo real
- **Criterios de Aceptación**:
  - Notificaciones push para móvil
  - SMS para actualizaciones críticas
  - Configuración de preferencias por candidato
  - Integración con WhatsApp Business
- **Prioridad**: Baja
- **Estimación**: 3 semanas

### 4.5 Analytics y Reportes

#### **RF-013: Métricas de Tiempo de Contratación**
- **Descripción**: Medir y optimizar tiempo de contratación
- **Criterios de Aceptación**:
  - Dashboard de métricas en tiempo real
  - Análisis por etapa del proceso
  - Comparación con benchmarks de industria
  - Alertas cuando se exceden tiempos objetivo
- **Prioridad**: Alta
- **Estimación**: 2 semanas

#### **RF-014: Análisis de Fuentes de Candidatos**
- **Descripción**: Analizar efectividad de diferentes fuentes
- **Criterios de Aceptación**:
  - ROI por fuente de candidatos
  - Calidad de candidatos por fuente
  - Costo por contratación por fuente
  - Recomendaciones de optimización
- **Prioridad**: Media
- **Estimación**: 2 semanas

#### **RF-015: Reportes de Diversidad e Inclusión**
- **Descripción**: Reportes para garantizar procesos justos
- **Criterios de Aceptación**:
  - Métricas de diversidad por etapa
  - Análisis de sesgos en el proceso
  - Reportes de compliance
  - Recomendaciones para mejorar diversidad
- **Prioridad**: Media
- **Estimación**: 3 semanas

---

## 5. Requerimientos No Funcionales

### 5.1 Rendimiento

#### **RNF-001: Tiempo de Respuesta**
- **Descripción**: El sistema debe responder en menos de 2 segundos
- **Criterios de Aceptación**:
  - Operaciones CRUD: < 1 segundo
  - Búsquedas complejas: < 2 segundos
  - Generación de reportes: < 5 segundos
  - Carga de páginas: < 2 segundos
- **Prioridad**: Alta

#### **RNF-002: Throughput**
- **Descripción**: Soporte para 1000+ usuarios concurrentes
- **Criterios de Aceptación**:
  - 1000 usuarios simultáneos
  - 100,000 operaciones por hora
  - Escalabilidad automática
- **Prioridad**: Alta

#### **RNF-003: Escalabilidad**
- **Descripción**: Capacidad de escalar horizontalmente
- **Criterios de Aceptación**:
  - Auto-scaling basado en carga
  - Soporte para múltiples regiones
  - Balanceo de carga automático
- **Prioridad**: Alta

### 5.2 Disponibilidad

#### **RNF-004: Uptime**
- **Descripción**: 99.9% de disponibilidad
- **Criterios de Aceptación**:
  - Uptime > 99.9% mensual
  - Tiempo de recuperación < 4 horas
  - Backups automáticos diarios
- **Prioridad**: Alta

#### **RNF-005: Disaster Recovery**
- **Descripción**: Recuperación completa en caso de desastre
- **Criterios de Aceptación**:
  - RTO < 4 horas
  - RPO < 1 hora
  - Pruebas de recuperación mensuales
- **Prioridad**: Alta

### 5.3 Seguridad

#### **RNF-006: Autenticación**
- **Descripción**: Autenticación segura con OAuth 2.0 / JWT
- **Criterios de Aceptación**:
  - OAuth 2.0 con proveedores externos
  - JWT tokens con expiración
  - Multi-factor authentication
  - Single Sign-On (SSO)
- **Prioridad**: Alta

#### **RNF-007: Autorización**
- **Descripción**: RBAC (Role-Based Access Control)
- **Criterios de Aceptación**:
  - Roles predefinidos y personalizables
  - Permisos granulares por funcionalidad
  - Auditoría de accesos
  - Principio de menor privilegio
- **Prioridad**: Alta

#### **RNF-008: Encriptación**
- **Descripción**: AES-256 para datos sensibles
- **Criterios de Aceptación**:
  - Encriptación en tránsito (TLS 1.3)
  - Encriptación en reposo (AES-256)
  - Gestión segura de claves
  - Certificados SSL válidos
- **Prioridad**: Alta

#### **RNF-009: Compliance**
- **Descripción**: Cumplimiento con regulaciones de privacidad
- **Criterios de Aceptación**:
  - GDPR compliance
  - CCPA compliance
  - SOX compliance (para empresas públicas)
  - Auditorías regulares
- **Prioridad**: Alta

### 5.4 Usabilidad

#### **RNF-010: Interfaz Responsive**
- **Descripción**: Diseño responsive y accesible
- **Criterios de Aceptación**:
  - Compatible con todos los navegadores modernos
  - Diseño responsive para móviles
  - Accesibilidad WCAG 2.1 AA
  - Soporte para lectores de pantalla
- **Prioridad**: Alta

#### **RNF-011: Mobile-First**
- **Descripción**: Optimizado para dispositivos móviles
- **Criterios de Aceptación**:
  - Aplicación móvil nativa (iOS/Android)
  - Funcionalidad completa en móvil
  - Offline capabilities
  - Push notifications
- **Prioridad**: Media

#### **RNF-012: Curva de Aprendizaje**
- **Descripción**: Curva de aprendizaje < 1 semana
- **Criterios de Aceptación**:
  - Onboarding guiado
  - Tutoriales interactivos
  - Help contextual
  - Documentación completa
- **Prioridad**: Media

---

## 6. Arquitectura del Sistema

### 6.1 Patrón Arquitectónico
- **Microservicios**: Separación por dominio de negocio
- **Event-driven**: Comunicación asíncrona entre servicios
- **API-first**: Diseño centrado en APIs RESTful

### 6.2 Tecnologías Principales
- **Backend**: Python (FastAPI), Node.js
- **Frontend**: React, React Native
- **Base de Datos**: PostgreSQL, Redis, Elasticsearch
- **Cloud**: AWS (ECS, RDS, S3, CloudFront)

### 6.3 Componentes del Sistema

#### **API Gateway**
- **Responsabilidad**: Punto de entrada único, routing, rate limiting
- **Tecnología**: Kong
- **Escalabilidad**: Auto-scaling basado en carga

#### **Servicios de Negocio**
- **Job Service**: Gestión de vacantes y publicaciones
- **Candidate Service**: Gestión de candidatos y CVs
- **Evaluation Service**: Procesos de evaluación y scoring
- **Notification Service**: Comunicación y alertas

#### **Servicios de Infraestructura**
- **Authentication Service**: Gestión de identidad y acceso
- **AI/ML Service**: Procesamiento inteligente y analytics
- **File Service**: Gestión de archivos y documentos

---

## 7. Plan de Implementación

### 7.1 Fase 1: MVP (3 meses)
**Objetivo**: Funcionalidades básicas de ATS

#### **Sprint 1-2: Fundación**
- Autenticación y autorización
- Gestión básica de usuarios y organizaciones
- Configuración del sistema

#### **Sprint 3-4: Gestión de Vacantes**
- Creación y edición de vacantes
- Publicación básica en portales
- Templates de vacantes

#### **Sprint 5-6: Captura de Candidatos**
- Aplicación a vacantes
- Subida y almacenamiento de CVs
- Gestión básica de candidatos

#### **Sprint 7-8: Evaluación Básica**
- Estados del proceso de reclutamiento
- Comentarios y notas
- Asignación de candidatos

#### **Sprint 9-10: Comunicación**
- Emails automáticos básicos
- Notificaciones del sistema
- Portal básico del candidato

#### **Sprint 11-12: Reportes Básicos**
- Dashboard de métricas
- Reportes de actividad
- Exportación de datos

### 7.2 Fase 2: IA Integration (2 meses)
**Objetivo**: Integración de inteligencia artificial

#### **Sprint 13-14: Parsing de CVs**
- Parsing inteligente de CVs
- Extracción de datos estructurados
- Eliminación de duplicados

#### **Sprint 15-16: Scoring Automático**
- Algoritmo de scoring básico
- Evaluación automática de candidatos
- Recomendaciones de matching

#### **Sprint 17-18: Analytics Básicos**
- Métricas de tiempo de contratación
- Análisis de fuentes de candidatos
- Insights básicos

### 7.3 Fase 3: Advanced Features (3 meses)
**Objetivo**: Funcionalidades avanzadas

#### **Sprint 19-20: Tests Técnicos**
- Integración con plataformas de tests
- Tests automáticos y manuales
- Evaluación de resultados

#### **Sprint 21-22: Comunicación Avanzada**
- Portal completo del candidato
- Chat integrado
- Notificaciones push y SMS

#### **Sprint 23-24: Mobile App**
- Aplicación móvil nativa
- Funcionalidades offline
- Push notifications

#### **Sprint 25-26: Analytics Avanzados**
- Reportes de diversidad
- Analytics predictivos
- Insights avanzados

### 7.4 Fase 4: Enterprise Features (2 meses)
**Objetivo**: Funcionalidades enterprise

#### **Sprint 27-28: Multi-tenant**
- Arquitectura multi-tenant
- Configuración por organización
- Aislamiento de datos

#### **Sprint 29-30: Compliance Avanzado**
- Compliance GDPR/CCPA
- Auditorías automáticas
- Reportes de compliance

#### **Sprint 31-32: Integraciones Enterprise**
- Integración con HRIS
- APIs para sistemas externos
- Webhooks personalizables

---

## 8. Métricas de Éxito

### 8.1 Métricas Técnicas
- **Tiempo de respuesta**: < 2 segundos
- **Uptime**: > 99.9%
- **Cobertura de tests**: > 80%
- **Tiempo de deployment**: < 30 minutos

### 8.2 Métricas de Negocio
- **Reducción del tiempo de contratación**: 40%
- **Mejora en la calidad de candidatos**: 25%
- **ROI positivo**: 18 meses
- **Tasa de adopción**: > 80%

### 8.3 Métricas de Usuario
- **Satisfacción del usuario**: > 4.5/5
- **Tiempo de onboarding**: < 1 semana
- **Reducción de tickets de soporte**: 50%
- **Retención de usuarios**: > 90%

---

## 9. Riesgos y Mitigaciones

### 9.1 Riesgos Técnicos

#### **Riesgo: Complejidad de IA**
- **Probabilidad**: Media
- **Impacto**: Alto
- **Mitigación**: Desarrollo iterativo con modelos pre-entrenados
- **Plan B**: Funcionalidades manuales como fallback

#### **Riesgo: Escalabilidad**
- **Probabilidad**: Baja
- **Impacto**: Alto
- **Mitigación**: Arquitectura de microservicios desde el inicio
- **Plan B**: Optimización de consultas y caching

#### **Riesgo: Seguridad**
- **Probabilidad**: Baja
- **Impacto**: Crítico
- **Mitigación**: Compliance por diseño, auditorías regulares
- **Plan B**: Encriptación end-to-end, backups seguros

### 9.2 Riesgos de Negocio

#### **Riesgo: Adopción de Usuarios**
- **Probabilidad**: Media
- **Impacto**: Alto
- **Mitigación**: UX/UI centrado en usuario, onboarding guiado
- **Plan B**: Integración con sistemas existentes

#### **Riesgo: Competencia**
- **Probabilidad**: Alta
- **Impacto**: Medio
- **Mitigación**: Diferenciación por IA y UX
- **Plan B**: Precios competitivos, features únicas

#### **Riesgo: Cambios en el Mercado**
- **Probabilidad**: Baja
- **Impacto**: Alto
- **Mitigación**: Arquitectura flexible, desarrollo ágil
- **Plan B**: Pivot rápido basado en feedback

---

## 10. Criterios de Aceptación

### 10.1 Criterios Generales
- [ ] Sistema funcional con todas las features MVP
- [ ] Performance dentro de los parámetros definidos
- [ ] Seguridad implementada según estándares
- [ ] Usabilidad validada con usuarios reales
- [ ] Documentación completa y actualizada

### 10.2 Criterios por Fase

#### **Fase 1: MVP**
- [ ] Autenticación y autorización funcionando
- [ ] Gestión básica de vacantes y candidatos
- [ ] Comunicación básica implementada
- [ ] Reportes básicos generándose

#### **Fase 2: IA Integration**
- [ ] Parsing de CVs funcionando
- [ ] Scoring automático implementado
- [ ] Analytics básicos operativos

#### **Fase 3: Advanced Features**
- [ ] Tests técnicos integrados
- [ ] Portal del candidato completo
- [ ] Mobile app publicada

#### **Fase 4: Enterprise Features**
- [ ] Multi-tenant implementado
- [ ] Compliance validado
- [ ] Integraciones enterprise funcionando

---

## 11. Anexos

### 11.1 Glosario de Términos
- **ATS**: Applicant Tracking System
- **CV**: Curriculum Vitae
- **HRIS**: Human Resources Information System
- **ROI**: Return on Investment
- **SLA**: Service Level Agreement
- **Uptime**: Tiempo de disponibilidad del sistema

### 11.2 Referencias
- Documentación técnica detallada en LTI-JCGA.md
- Lean Canvas del modelo de negocio
- Diagramas de arquitectura y casos de uso
- Investigación de mercado en ats-research.md

### 11.3 Contactos
- **Product Manager**: [Por definir]
- **Technical Lead**: [Por definir]
- **UX/UI Lead**: [Por definir]
- **QA Lead**: [Por definir]

---

**Documento generado el**: Julio 2024  
**Última actualización**: Julio 2024  
**Versión**: 1.0  
**Estado**: Borrador

## Prompt
### ChatGPT 4o
De izquierda a derecha

## Prompt
### ChatGPT 4o
Cambia los colores de cada bloque

## Prompt
### ChatGPT 4o
Haz uso de la siguiente plantilla de referencia:
<?xml version="1.0" encoding="UTF-8"?>
<mxfile>
  <diagram name="Lean Canvas ATS">
    <mxGraphModel dx="961" dy="545" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="827" pageHeight="1169" math="0" shadow="0">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        
        <!-- Problem -->
        <mxCell id="2" value="Problem" style="shape=swimlane;fillColor=#F8CECC;" vertex="1" parent="1">
          <mxGeometry x="0" y="0" width="250" height="150" as="geometry" />
        </mxCell>
        
        <!-- Customer Segments -->
        <mxCell id="3" value="Customer Segments" style="shape=swimlane;fillColor=#D5E8D4;" vertex="1" parent="1">
          <mxGeometry x="250" y="0" width="250" height="150" as="geometry" />
        </mxCell>
        
        <!-- Unique Value Proposition -->
        <mxCell id="4" value="Unique Value Proposition" style="shape=swimlane;fillColor=#FFF2CC;" vertex="1" parent="1">
          <mxGeometry x="500" y="0" width="250" height="150" as="geometry" />
        </mxCell>
        
        <!-- Solution -->
        <mxCell id="5" value="Solution" style="shape=swimlane;fillColor=#F8CECC;" vertex="1" parent="1">
          <mxGeometry x="0" y="150" width="250" height="150" as="geometry" />
        </mxCell>
        
        <!-- Channels -->
        <mxCell id="6" value="Channels" style="shape=swimlane;fillColor=#D5E8D4;" vertex="1" parent="1">
          <mxGeometry x="250" y="150" width="250" height="150" as="geometry" />
        </mxCell>
        
        <!-- Revenue Streams -->
        <mxCell id="7" value="Revenue Streams" style="shape=swimlane;fillColor=#DAE8FC;" vertex="1" parent="1">
          <mxGeometry x="500" y="150" width="250" height="150" as="geometry" />
        </mxCell>
        
        <!-- Cost Structure -->
        <mxCell id="8" value="Cost Structure" style="shape=swimlane;fillColor=#DAE8FC;" vertex="1" parent="1">
          <mxGeometry x="0" y="300" width="375" height="150" as="geometry" />
        </mxCell>
        
        <!-- Key Metrics -->
        <mxCell id="9" value="Key Metrics" style="shape=swimlane;fillColor=#FFF2CC;" vertex="1" parent="1">
          <mxGeometry x="375" y="300" width="375" height="150" as="geometry" />
        </mxCell>
        
        <!-- Unfair Advantage -->
        <mxCell id="10" value="Unfair Advantage" style="shape=swimlane;fillColor=#E1D5E7;" vertex="1" parent="1">
          <mxGeometry x="750" y="0" width="250" height="450" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>

## Prompt
### ChatGPT 4o
ajusta adecuadamente el titulo y su contenido en cada caja

## Prompt
### ChatGPT 4o
este es un ejemplo de como quiero que se ajuste los titulos y su contenido:

<!-- Customer Segments -->
    <mxCell id="4" value="Segmentos de Clientes" style="rounded=1;whiteSpace=wrap;html=1;fillColor=#D5E8D4;fontSize=14;fontStyle=1;" vertex="1" parent="1">
      <mxGeometry x="250" y="0" width="250" height="30" as="geometry" />
    </mxCell>
    <mxCell id="5" value="- Equipos de RRHH.&#xa;- Hiring managers.&#xa;- Candidatos en procesos activos." style="rounded=0;whiteSpace=wrap;html=1;fillColor=#D5E8D4;" vertex="1" parent="1">
      <mxGeometry x="250" y="30" width="250" height="120" as="geometry" />
    </mxCell>

    ## Prompt
### ChatGPT 4o
