Aulas version RESTful API
==================================

Backend
---------------

Este proyecto se sirve de variables de entorno para la conexión a la base de datos
que se deben setear desde un archivo **.env**. Se encuentra disponible un *.env.example* con las variables necesarias.
> Para trabajar en local debe tener la base de datos en un servidor local (localhost) con el nombre  ***aulas_db***

Para correr el backend, se debe hacer lo siguiente:

```sh
cd backend/

npm install

npm run dev

```

Los endpoints están bajo el prefijo `api/`. Por ejemplo para localhost en el puerto **8080** (por defecto), la url para el recurso **sede** sería `http://localhost:8080/api/sede`

Frontend
------

Para correr el frontend, se debe hacer lo siguiente:

```sh
cd frontend/

npm install

npm start

```

Tecnologías utilizadas
-------

- **Backend**: NodeJS + ExpressJS + MySQL

- **Frontend**: ReactJS

License
-------

MIT
