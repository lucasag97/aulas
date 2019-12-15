Aulas version RESTful API
==================================

Correr el backend
---------------

Debe tener la base de datos en un servidor local (localhost) con el nombre ***aulas_db***. Este proyecto se sirve de variables de entorno para la conexión a la base de datos
que se deben setear desde un archivo **.env**. Se encuentra disponible un *.env.example* con las variables necesarias.

```sh
cd backend/

npm install

npm run dev

```

Los endpoints están bajo el prefijo `api/`. Por ejemplo para local en el puerto **8080**, la url para el recurso **sede** sería `http://localhost:8080/api/sede`

Correr el frontend
------
```sh
cd frontend/

npm install

npm run dev

```

License
-------

MIT
