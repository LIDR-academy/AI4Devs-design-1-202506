# 🧠 Prompts utilizados para generar el sistema LTI (ATS) con asistencia de ChatGPT

Este documento contiene todos los prompts utilizados y la respuesta completa generada por ChatGPT (modelo GPT-4o), en la construcción del sistema **Lean Talent Intelligence (LTI)**, incluyendo arquitectura, componentes, flujo, modelo de datos y documentación técnica.

---

### 1. Diagrama de Secuencia – Proceso de Selección

**🧾 Prompt enviado a ChatGPT:**

> "En base al archivo markdown del sistema LTI ATS, con el avance al momento, el cual te anexo, crea el diagrama de secuencia en formato mermaid, y también dame el texto del mermaid para agregarlo e integrarlo al archivo maestro markdown el cual debo documentar y entregar como un archivo único."

---

### 2. Diagrama C4 – Nivel 1 (Contexto)

**🧾 Prompt enviado a ChatGPT:**

> "Con base al archivo y descripción del proyecto LTI de ATS, el cual te anexo, diseña el diagrama C4 utilizando PlantUML."

---

### 3. Diagrama C4 – Nivel 2 (Contenedores)

**🧾 Prompt enviado a ChatGPT:**

> "Crea ahora el C4 Nivel 2 (Contenedores) en PlantUML para describir la arquitectura interna de LTI, por ejemplo, frontend, backend, motor de IA, base de datos, y los que consideres necesario, si tienes dudas para realizar el trabajo pregúntame."

**📝 Se respondió también:**

- Motor de IA como microservicio.
- Frontend con React.
- Backend con Node.js + Express.
- Autenticación propia con opción Google/LinkedIn.
- PostgreSQL como base de datos principal.
- Google Meet + Zapier + MinIO para entrevistas.
- Notificaciones por correo, Slack y WhatsApp.
- Data warehouse con Amazon Redshift o Athena.

---

### 4. Diagrama C4 – Nivel 3

#### Contenedor: Servicio de Notificaciones

**🧾 Prompt enviado a ChatGPT:**

> "Vamos a hacer el C3 del contenedor de notificaciones, proporcióname el código en formato PlantUML. Usa Rel(..., ..., 'down') y 'right' para forzar la distribución visual. Pregúntame lo que consideres necesario si tienes duda para hacer tu trabajo."

**📌 Respuesta generada por ChatGPT:**

Se respondió que:

- El log de notificaciones se guarda en Amazon DocumentDB (compatible con MongoDB).
- Slack se comunica mediante API oficial.
- WhatsApp utiliza la API de Twilio.

### 5. Diagrama Entidad-Relación (ERD) – PostgreSQL

**🧾 Prompt enviado a ChatGPT:**

> Por último y para finalizar dame un diagrama ERD entidad relación de la base de datos principal de PostgreSQL, para el sistema LTI, ATS, en base al avance que tengo en archivo markdown que te anexo. Acomoda todo para un layout más claro. Pregúntame lo que necesites para hacer mejor tu trabajo.
