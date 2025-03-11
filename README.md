# BIENVENIDO AL UNIVERSO DE RICK Y MORTY
<img width="1199" alt="Captura de pantalla 2025-03-11 a las 23 03 41" src="https://github.com/user-attachments/assets/97a6c6dc-3815-4c14-89ae-b5ecfaffab47" />
<div align="left">
<img alt="Static Badge" src="https://img.shields.io/badge/HTML%20-%20%232196f3">
<img alt="Static Badge" src="https://img.shields.io/badge/JacaScript%20-%20%2373c6b6">
<img alt="Static Badge" src="https://img.shields.io/badge/CSS%20-%20%23f06292">
<img alt="Static Badge" src="https://img.shields.io/badge/React%20-%20%239c27b0">
<img alt="Static Badge" src="https://img.shields.io/badge/Vercel%20-%20%2300FF33">
</div>


## DESCRIPCIÓN DEL PROYECTO
Este proyecto con temática de la serie de animación de Rick y Morty, es una app en la que se visualizan los personajes que aparecen en la serie
y que hacemos uso de endpont de la API de dicha serie para poder hacer busquedas de personajes concretos y filtrarlos por su estado en la serie.
Contiene un minijuego donde debemos marcar el estado de un personaje, cuya umagen aparece de forma aleatoria,
y según se acierta se van sumando puntos.
### Lógica del Juego:
  - Se utiliza la API de Rick y Morty para obtener un personaje aleatorio.
  - El usuario debe adivinar si el personaje está vivo o muerto.
  - Si acierta, se incrementa la puntuación; si no, se muestra un mensaje de error.
  - Después de cada respuesta, se carga un nuevo personaje.

## ACCESO AL PROYECTO
La aplicación está desplegada en Vercel:\
[practica-final-tres.vercel.app](https://practica-final-three.vercel.app/)

## TECNOLOGÍAS UTILIZADAS
Esta aplicación ha sido creada en Vite + React e integra la API de Rick y Morty.
Vite ha sido una herramienta muy útil para crear la estructura del proyecto en React de manera rápida. 
Para llevar a cabo este proyecto, he utilizado lenguajes de programación como JavaScript, HTML y CSS (estilos). 
Y por último ha sido desplegada en Vercel.


## ESTRUCTURA DE ARCHIVOS:
<img width="208" alt="Captura de pantalla 2025-03-11 a las 23 57 08" src="https://github.com/user-attachments/assets/f4082189-33f4-4e2a-9523-0daa5762e925" /><br>
### Código de la Aplicación:
1. src/main.jsx (Configuración de React Router).
2. src/App.jsx (Componente Principal con Menú).
3. src/index.css (Estilos Globales)
4. src/apiService.js (Donde se definen las funciones encargadas de realizar 
las solicitudes GET):
- getCharacters(name, status):\
Esta función obtiene una lista de personajes filtrados por nombre y estado.\
USO:
  - Se utiliza en la página de personajes (CharactersPage.jsx) para obtener personajes que
coincidan con los filtros.
  - Recibe dos parámetros: name (nombre) y status (estado).

- getRandomCharacter():\
Esta función obtiene un personaje aleatorio de la API de Rick and Morty.\
USO:
  - Se utiliza en la página de juego (GamePage.jsx) para obtener un personaje aleatorio.
  - Genera un ID aleatorio y lo usa para construir la URL del endpoint.
### EJEMPLO DE FLUJO DE DATOS:
- El usuario hace clic en Personajes.
- CharactersPage.jsx llama a getCharacters(name, status).
- getCharacters(name, status) construye la URL con los filtros y llama a getResource(url).
- getResource(url) realiza la solicitud GET a la API y devuelve los datos.
- CharactersPage.jsx muestra los personajes en la interfaz.


## CONCLUSIÓN
Con motivo del video explicativo de 5 minutos máximo, soliictado por la empresa COJALI, tomé la dicisión de crear un archivo JavaScript 
llamado apiService.js donde se concentran los endpoint que he utilizado a modo de centralizarlos y poder explicarlos en un margen 
de tiempo tan corto.


*[Personas-Desarrolladores del Proyecto](#personas-desarrolladores)


