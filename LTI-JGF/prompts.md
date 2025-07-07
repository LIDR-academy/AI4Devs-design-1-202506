# Prompt 1: Definición del sistema y funcionalidades requeridas

Eres un experto en producto, con experiencia en sistemas de trackeo de candidatos a ofertas de trabajo (ATS). Qué funcionalidades básicas tiene un ATS? Descríbemelas en un listado, ordenado de mayor a menor prioridad
Seleccionando las funcionalidades que creas más importantes, quiero que me confecciones:
- Una descripción breve del software de ATS, valor añadido y ventajas competitivas.
- Explicación de las funciones principales.

# Prompt 2: Generación de un diagrama Lean Canvas

Perfecto. Me gustaría ahora que confeccionaras un diagrama Lean Canvas para entender el modelo de negocio de este software.

# Prompt 3: Generación de casos de uso

Quiero que elabores una descripción de los 3 casos de uso principales del sistema.

Además, para cada caso de uso, genera un diagrama en formato Mermaid.

# Prompt 4: Generación de modelo de datos

En base a lo que hemos discutido, quiero que planees las entidades y relaciones necesarias para modelar los datos de este sistema. Elabora un diagrama Mermaid entidad-relación que represente los campos más significativos de cada entidad y sus relaciones.

---

Estoy obteniendo este error cuando parseo el diagrama:

Parse error on line 32:
...G        role ENUM (recruiter, manager,
----------------------^
Expecting 'BLOCK_STOP', 'ATTRIBUTE_WORD', 'ATTRIBUTE_KEY', 'COMMENT', got '('

Puedes arreglarlo?

---

No entiendo muy bien la función de la entidad Etapa. Puedes explicarme por qué es necesaria?

---

Ya lo entiendo. Sin embargo, creo que has definido dos relaciones ("groups") y ("at") idénticas en el diagrama de Mermaid. Entiendo que una sobra, no?

# Prompt 5:

Ahora quiero que actúes como un arquitecto de software senior.

Quiero que hagas un diseño del sistema a alto nivel. Usa la arquitectura que creas más adecuada para este proyecto. Incluye qué arquitectura de software usar, la distribución de componentes, la integración de sistemas externos y los patrones de comunicación.

Quiero una explicación técnica del diseño elegido. No hace falta que expliques el motivo de las decisiones, da sólo la descripción de la arquitectura elegida.

# Prompt 6: Generación de diagrama C4

Elabora un diagrama C4 de la arquitectura que has propuesto. Traducelo a una herramienta como Structurizr para poder visualizarlo mejor.

---

Prepara también el diagramas de componentes internos para el backend

---

Quiero que profundices ahora en el nivel 4, Código, para uno de los componentes del backend, por ejemplo, el de domain layer. Debería incluir las entidades e interfaces más relevantes. Genera el diagrama de Structurizr completo con todos los niveles hasta ahora.