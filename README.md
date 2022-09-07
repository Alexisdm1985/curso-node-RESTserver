# EXPRESS basado en clases | WebServer + RESTserver

1. Ejecutar ```npm install``` para construir los modulos de Node

- Constructor:
    - this.app
    - this.port
    - this.path
- Metodos:
    - middlewares() //CORS => npm i cors
    - routes()
    - listen()

- Peticiones HTTP:
    - GET - PUT - POST - DELETE

- Carpetas
    - Controllers = el callback de una peticion
    - models = en este caso esta el server.js el cual contiene la clase Server
    - routes = Todas las rutas necesarias que llaman a los controladores