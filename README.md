# App partidos de futbol

Este es un proyecto en Next.js 13 con TypeScript que muestra los partidos de fútbol del día. Utiliza MUI 5 para la interfaz de usuario y hace fetch de un archivo JSON que es una hoja de cálculo de Google Sheets.

Constantes de la aplicación
La aplicación utiliza las siguientes constantes en el archivo api.tsx para conectarse a la hoja de cálculo de Google Sheets:

```bash
const url = "https://docs.google.com/spreadsheets/d/";
const ssid = "1uD_UtAaYl8lh7w_8VWRCnVi-Ugat-O_2V-puezenbdw";
const q1 = "/gviz/tq?";
const q2 = "tqx=out:json";
const q3 = "sheet=Admin";
return `${url}${ssid}${q1}&${q2}&${q3}`;
```

## Funcionalidades
La página muestra los partidos de fútbol del día y tiene un botón "Estadísticas". Además, en la hora del evento, se habilitan botones para verlo.

## Ejecutar la aplicación
Para ejecutar la aplicación, asegúrese de tener Node.js instalado en su computadora y ejecute los siguientes comandos:

```bash
npm install
npm run dev
```

La aplicación se iniciará en http://localhost:3000/.

¡Disfruta la aplicación!