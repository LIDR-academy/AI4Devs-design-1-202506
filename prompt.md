# prompts.md

Prompts usados para diseñar y documentar el sistema LTI (Lean Talent Intelligence), organizados por rol y etapa del proyecto. Cada prompt está diseñado para ejecutar directamente una tarea

---

##  Product Manager – Investigación y análisis

###  Objetivo del rol:
Identificar las funcionalidades prioritarias del sistema, comprender el valor que ofrece al negocio y sintetizar su modelo de negocio.

**Prompt 1**  
Actúas como Product Manager Senior especializado en sistemas ATS. Diseña una primera versión del sistema LTI, detallando:
- Una descripción breve del software
- Los principales beneficios para el usuario (reclutadores, managers, candidatos)
- Las ventajas competitivas frente a ATS tradicionales
- Las funcionalidades clave ordenadas de mayor a menor prioridad

**Prompt 2**  
Como experto en startups tecnológicas, genera un diagrama Lean Canvas en formato mermaid que describa el modelo de negocio del sistema LTI, incluyendo:  
- Problemas  
- Segmentos de clientes  
- Propuesta de valor  
- Canales  
- Fuentes de ingreso  
- Actividades clave  
- Recursos clave  
- Socios clave  
- Estructura de costos  

---

##  UX/Research Designer – Validación de mercado

###  Objetivo del rol:
Analizar competidores y validar oportunidades del mercado.

**Prompt 3**  
Actúa como analista de mercado en software de recursos humanos. Crea una tabla comparativa de los 5 sistemas ATS comerciales más usados, comparando funcionalidades como:  
- Gestión de vacantes  
- Matching automático  
- Entrevistas en video  
- IA para filtrado de CVs  
- Analítica de procesos  
- Integraciones externas  

---

##  Business Analyst – Casos de uso

###  Objetivo del rol:
Definir los flujos clave del sistema a través de casos de uso.

**Prompt 4**  
Actúas como analista funcional. Define y describe 3 casos de uso principales del sistema LTI:  
1. Publicar vacante  
2. Postulación de candidatos  
3. Evaluación y selección  
Incluye objetivos, actores involucrados y pasos principales para cada caso.

**Prompt 5**  
Genera un diagrama UML de casos de uso en formato `plantUML`, diferenciando entre:
- Candidato (usuario externo)  
- Reclutador (usuario interno)  
- Manager (usuario interno)  
Aplica relaciones `<<include>>` y `<<extend>>` donde corresponda.

---

## DBA – Modelado de datos

### Objetivo del rol:
Diseñar el modelo de datos con entidades, atributos y relaciones.

**Prompt 6**  
Actúas como arquitecto de datos experto en diseño de modelos relacionales para sistemas ATS modernos.

Estoy construyendo un sistema llamado LTI (Lean Talent Intelligence), que incluye funcionalidades como publicación de vacantes, postulación de candidatos, evaluaciones, entrevistas y selección.

A partir de los requisitos ya definidos, necesito que diseñes el modelo de datos del sistema.

Incluye las siguientes entidades y define para cada una:
- Nombre de la entidad
- Lista de atributos con su tipo de dato (puedes usar pseudotipo: string, int, datetime, etc.)
- Relaciones con otras entidades (uno a muchos, muchos a muchos, etc.)

Estas son las entidades que debes incluir:

1. **Usuario**
   - `id` (int)
   - `nombre` (string)
   - `correo_electronico` (string)
   - `rol` (string: 'reclutador', 'manager', 'admin')

2. **Vacante**
   - `id` (int)
   - `titulo` (string)
   - `descripcion` (string)
   - `departamento` (string)
   - `ubicacion` (string)
   - `fecha_publicacion` (datetime)
   - `usuario_id` (int) → Relación con Usuario (publicada por)

3. **Candidato**
   - `id` (int)
   - `nombre` (string)
   - `email` (string)
   - `telefono` (string)
   - `cv_url` (string)

4. **Postulacion**
   - `id` (int)
   - `vacante_id` (int)
   - `candidato_id` (int)
   - `estado` (string: 'recibida', 'en revisión', 'entrevista', 'descartado', 'seleccionado')
   - `fecha_postulacion` (datetime)

5. **Entrevista**
   - `id` (int)
   - `postulacion_id` (int)
   - `fecha` (datetime)
   - `tipo` (string: 'video', 'presencial')
   - `notas` (string)

6. **Evaluacion**
   - `id` (int)
   - `postulacion_id` (int)
   - `evaluador_id` (int) → Relación con Usuario
   - `calificacion` (int)
   - `comentarios` (string)

Genera la estructura completa del modelo de datos e indica claramente todas las relaciones entre entidades.

Luego, crea un diagrama ER en formato Mermaid basado en este modelo, indicando claves primarias (PK), claves foráneas (FK), y relaciones entre tablas.

---

##  Software Architect – Diseño del sistema

###  Objetivo del rol:
Proponer la arquitectura del sistema a nivel de componentes y servicios.

**Prompt 7**  
Eres un arquitecto senior. Diseña el sistema LTI siguiendo una arquitectura de microservicios. Describe en texto:
- Frontend (web app)
- Backend (servicio de gestión de vacantes y postulaciones)
- Servicio de autenticación
- Módulo de IA para matching
- Servicio de notificaciones
- Base de datos relacional
- Integraciones con sistemas externos (correo, calendario, API de videoentrevistas)


Luego, genera un diagrama de arquitectura de alto nivel en formato Mermaid con todos los componentes anteriores y sus relaciones.

---

##  Arquitectura C4 – Profundización modular

###  Objetivo del rol:
Visualizar la arquitectura del sistema desde múltiples niveles de abstracción.

**Prompt 8**  
Genera un diagrama C4 **Nivel 1 (Contexto)** del sistema LTI. Incluye:
- Candidatos
- Reclutadores y Managers
- Sistema LTI
- Sistemas externos como correo, videollamadas y calendarios
 
Genera un diagrama C4 **Nivel 2 (Contenedores)** detallando:
- Web App (frontend)
- API Gateway
- Servicios internos (vacantes, postulaciones, IA)
- Sistema de autenticación
- Bases de datos
- Servicios de notificación
- Conexión con plataformas externas

Genera un diagrama C4 **Nivel 3 (Componentes)** para el contenedor "ATS Core", incluyendo:
- Módulo de gestión de vacantes
- Módulo de postulaciones
- Módulo de entrevistas
- Módulo de evaluaciones
- Módulo de matching con IA
- Módulo de notificaciones

---

##  Documentador Técnico – Entrega final

###  Objetivo del rol:
Consolidar todos los artefactos en un documento único, claro y legible.

**Prompt 9**  
Resume todo el diseño del sistema LTI en un documento Markdown con secciones:
1. Descripción del producto
2. Funcionalidades principales
3. Lean Canvas (diagrama)
4. Casos de uso + diagramas UML
5. Modelo de datos + diagrama ER
6. Diseño del sistema + diagrama
7. C4 niveles 1, 2 y 3