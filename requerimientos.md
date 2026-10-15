# Proyecto: Portafolio Personal

### Documento Oficial de Requerimientos de Funcionalidad e Interfaz

Objetivo del Proyecto: Diseñar y desarrollar una aplicación web interactiva de tipo "Portafolio Personal" utilizando tecnologías modernas de Front-End. El proyecto busca evaluar la capacidad del desarrollador para estructurar componentes, manejar el estado de la aplicación, y crear interfaces funcionales y accesibles.

## <s>1. Requerimientos de Contenido (Secciones)</s>

La aplicación debe estructurarse obligatoriamente con las siguientes secciones, navegables o presentadas en formato de única página (Single Page Application):

1. Sección Personal
2. Experiencia Laboral
Debe responder a la pregunta "¿Quién soy?". Listado cronológico de experiencias Incluirá el nombre del perfil, una fotografía (o laborales. Cada ítem debe indicar el nombre avatar) adecuadamente estilizada y una breve de la empresa, el cargo desempeñado y las descripción profesional. fechas de inicio y término.

3. Estudios Detalle de la formación académica. Debe indicar la institución, el título o curso realizado y, de ser pertinente, el año de obtención.
5. Contacto Debe contener enlaces o botones a redes sociales (LinkedIn, GitHub) y un formulario de contacto funcional (validado en el lado del cliente).
4. Desarrollos y Proyectos Galería o grilla de proyectos destacados. Cada proyecto debe mostrar una previsualización, un título, y proporcionar un enlace directo al repositorio (ej. GitHub).
Evaluación de Desarrollo Front-End

6. Footer (Pie de Página) Debe incluir información dinámica (año actual calculado mediante código), derechos de autor e información breve de contacto.
Página 1 de 3

## <s>2. Requerimientos Técnicos y Arquitectura</s>

El código fuente será sometido a revisión técnica para garantizar el cumplimiento de los siguientes estándares de desarrollo de software:

A. Arquitectura: Atomic Design System La estructura de carpetas y componentes del proyecto debe estar dividida rigurosamente utilizando la metodología *Atomic Design* (Átomos, Moléculas, Organismos, Plantillas y Páginas). Se penalizará la creación de componentes monolíticos.
B. Lógica de Estado: Uso de Hooks Se requiere la implementación correcta de hooks (ej. useState, useEffect). Deben ser utilizados para controlar el estado del formulario de contacto, el renderizado condicional de datos (ej. lista de proyectos) y eventos del ciclo de vida.
C. Testing (Pruebas Automatizadas) El proyecto debe contar con una suite básica de pruebas (Unitarias o de Integración). Se deben validar como mínimo el renderizado correcto de los "organismos" principales y el comportamiento del formulario.
D. Estándares de Programación (Clean Code) Uso adecuado del scope: diferenciación estricta entre const y let (se prohíbe el uso de var). Las funciones deben estar bien nombradas y encapsuladas. Se debe evitar el código "espagueti" y las mutaciones directas de estado.
E. Librería de Componentes (UI) Queda a libre elección el uso de una librería de componentes de interfaz (ej. Material UI, Chakra UI, Tailwind CSS, Bootstrap). Su uso debe ser coherente en toda la aplicación para garantizar consistencia visual. Importante: El proyecto debe ser subido a un repositorio público (GitHub/GitLab) y debe incluir un archivo README.md con las instrucciones necesarias para instalar dependencias y levantar el proyecto en un entorno local.
Evaluación de Desarrollo Front-End Página 2 de 3

## <s>3. Pauta de Evaluación (Rúbrica)</s>

La calificación se calculará con base en los siguientes criterios, otorgando un puntaje que refleja el nivel de dominio en cada área evaluada.

Criterio Logrado (100%) Medianamente Logrado No Logrado (0%) (50%)

|Estructura y|Todas las secciones|Faltan 1 o 2 secciones|Faltan 3 o más|
|---|---|---|---|
|Contenido (20%)|exigidas (Personal, Experiencia, Estudios, Proyectos, Contacto,|menores, o la información presentada contiene errores de formato/funcionalidad.|secciones clave del portafolio.|

Footer) están presentes, completas y funcionales.

|Atomic Design|El código fuente está|Hay un intento de|No hay evidencia de|
|---|---|---|---|
|(25%)|perfectamente organizado siguiendo la jerarquía de Átomos, Moléculas,|organización, pero existen componentes monolíticos o mezcla de responsabilidades.|metodologías de estructuración de componentes.|

Organismos, etc.

|Uso de Hooks|Gestión de estado|Uso básico de hooks, con|No se usan hooks o|
|---|---|---|---|
|(20%)|impecable. Los hooks controlan lógica de UI y formularios sin|algunos errores de ciclo de vida o control parcial de los formularios.|el estado se manipula directamente causando errores.|

renderizados innecesarios.

|Código Limpio y|Excelente uso de ES6+|Código funcional pero con|Malas prácticas|
|---|---|---|---|
|Prácticas (20%)|(const/let, arrow functions, destructuring). Interfaz construida consistentemente con|mala indentación o naming. Uso inconsistente de la librería de componentes.|generalizadas (uso de var, funciones kilométricas). Interfaz rota o no adaptable.|

librería UI.

Testing (15%)

|Se incluyen pruebas que|Se incluyen pruebas mínimas|Ausencia total de|
|---|---|---|
|validan el comportamiento|o algunas de ellas fallan al|pruebas|
|de los componentes críticos y se ejecutan|ejecutar el comando test.|automatizadas en el repositorio.|

exitosamente.

Evaluación de Desarrollo Front-End Página 3 de 3