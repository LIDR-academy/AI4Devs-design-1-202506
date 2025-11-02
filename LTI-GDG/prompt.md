# LTI Design

## BRAINSTORMING

1)  
definir esas funcionalidades clave que harán brillar a LTI por encima de los competidores  
mejorar la colaboración en tiempo real entre reclutadores y managers, automatizaciones, asistencia de IA en diversas tareas  

Eres un experto en producto, con experiencia en ATS (Applicant-Tracking Systems), el objetivo es construir un nuevo ATS llamado LTI, dado que me encuentro en etapa de brainstorming quisiera obtener información necesaria para diseñar un MVP teniendo en cuenta los siguientes interrogantes:

- ¿Qué funcionalidades básicas tiene un ATS? Descríbemelas en un listado, ordenado de mayor a menor prioridad  
- ¿Qué beneficios obtiene el cliente de un ATS para considerar su uso?  
- ¿Qué alternativas tiene a usar un ATS y cuando pueden ser relevantes?  
- ¿Cómo es el customer journey normal de un cliente que usa un ATS? Descríbeme paso a paso todas las interacciones  

Chatbox retorna listados para cada pregunta  

2)  
Teniendo en cuenta todas las funcionalidades que propones son viables para LTI, crear una breve descripción del sistema LTI, teniendo en cuenta que mis ventajas competitivas son las siguientes: 1) que la funcionalidades 3, 5 y 7 se pueden gestionar a través de aplicaciones móviles, permitiendo al reclutador gestionar la información correspondiente a estas funcionalidades desde su celular móvil android o iOS.  
Dame junto a la descripción un cuadro LEAN Canvas en formato md del problema.  

Chatbox retorna descripción para el punto 1 del ejercicio.  

3)  
Actuando como product owner de LTI y Basado en las funcionalidades que hemos decidido adoptar en LTI ya nombradas y enumeradas de 1 a 10, desglosa cada una de estas funcionalidades en casos de uso en una tabla cuyas columnas son: funcionalidad, nombre de caso de uso, descripción de caso de uso (breve), roles de usuario.  
Ten en cuenta que una funciónalidad puede abarcar varios casos de uso, de todos estos casos de uso, selecciona los 3 que harán parte de mi MVP, deben ser 2 esenciales y 1 que haga parte de aquellos perteneciéntes a mi ventaja competitiva, mércalos con el texto "MVP" en paréntesis al frente del nombre del caso de uso así: <nombre caso de uso> (MVP), ten en cuenta casos de uso esenciales que todo sistema que se ofrece "as service" debe tener para poder operar.  

Me retorna tabla con todos los CU propuesto y los 3 principales descritos un poco más detalladamente.  

4)  
como product owner de LTI, para cada uno de los casos de uso del MVP, generar un diagrama en formato mermaid que permita identificar y representar los diferentes roles de usuarios que interactuarán con nuestro software, las acciones que cada uno de ellos realizarán en el sistema, las dependencias de unas acciones con otras.  

5)  
Eres un arquitecto de software experto. ¿Cuáles son las 3 entidades de modelo de datos esenciales en un ATS online? Dame las entidades y algunos campos esenciales de cada una para los casos de uso MVP DE LTI y cómo se relacionan.  

6)  
Eres un brillante arquitecto de software. Eres capaz de diseñar, explicar y diagramar los diferentes aspectos de un sistema de software.  

Estoy construyendo un ATS online. He definido las entidades VACANTE, CANDIDATO, ENTREVISTA con sus campos y relaciones.  

¿Qué otras entidades del modelo de datos son importantes en LTI? Dame los campos más importantes de cada una y cómo se relacionan entre entidades.  

Dame el resultado en diagrama mermaid.  

7)  
Thinking like a software architect, design a microservices architecture for an online ATS, with these characteristics:  
- Each microservice has its own database,  
- Has a frontend that communicates with the backend using api REST,  
- Cloud provider is AWS, use proper services, include load balancing and CDN.  
- Mobile frontend with iOS and android  
- Web frontend with React.  

Given that design, return me a detailed description of the architecture, after that a mermaid diagram that illustrates the designed architecture, the mermaid diagram must be able to be copied and pasted. Propose me technologies and languages that you consider appropriate.  

Me da resultado de la descripción, sin embargo la tabla es un tanto ambigua, dado que me propuso varias tecnologías para aspectos del sistema como por ejemplo backend, donde me indicó node, java o python, le pedí que seleccionara 1 por cada aspecto de la siguiente forma:  

8)  
give me the technologies table again, ensure to select just one technology to solve each aspect of LTI  

9)  
**Durante el proceso se me ocurrió algo nuevo** lo agrego en el siguiente prompt.  

Requiero que añadas a la arquitectura un agente IA encargado que hará parte de la funcionalidad "Filtrar y rankear candidatos" el cual apoyará el proceso de forma automática una vez el candidato cargue su postulación, agrega esto al diagrama de arquitectura y además dame un diagrama C4 también en formato mermaid también copiable.  

10)  
Teniendo en cuenta la definición de un diagrama C4:  

El diagrama C4 (Context, Containers, Components, Code) es un modelo para visualizar la arquitectura de sistemas de software. Desarrollado por Simon Brown, el modelo C4 se enfoca en descomponer la arquitectura de un sistema en diferentes niveles de abstracción, cada uno de los cuales está dirigido a un público específico.  
Estos niveles son:  
- Contexto: Muestra el sistema completo en el contexto de su entorno, incluyendo otros sistemas, actores y entidades externas. Este diagrama proporciona una vista de alto nivel de cómo el sistema interactúa con sus partes interesadas y otros sistemas.  
- Contenedores: Descompone el sistema en varios contenedores (aplicaciones, servicios de datos, etc.), mostrando la tecnología principal y cómo se comunican estos contenedores.  
- Componentes: Se adentra en un contenedor específico para mostrar los componentes o bloques de construcción principales y sus interacciones.  
- Código: El nivel más detallado, muestra cómo están implementados los componentes a nivel de clases o, en algunos casos, de funciones.  

Como parte de la definición del diseño del sistema LTI, dame un diagrama C4 en formato mermaid por cada uno, contexto, contenedores, componentes y código.  

**Para el diagrama C4 me dí cuenta que suele ser correcto para los dos primeros (Contexto y Container), para Componentes suele ser mejor especificar cuál Container es necesario detallar en el diagrama de Componentes así para cada uno:**  

para el diagrama de Componentes, quiero que se centre en el contenedor de "Servicio Vacante", detalla todos los componentes de este servicio.  

**De igual forma para la definición de “Código” suele ser mejor indicar en cuál Componente**  
Basado en el componente "Gestor de Vacantes" dame el diagrama C4 para la definición de **Código**, ten en cuenta las definiciones de C4 que ya te proporcioné en este hilo, dado que soy product owner y no estoy muy familiarizado con la parte técnica, debes ser muy detallado en cuanto a las definiciones de código asociadas a cada tecnología, ten en cuenta las definiciones de tecnología ya establecidas en este hilo.  
