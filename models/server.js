require('dotenv').config();
const express = require('express');
const cors = require('cors');


class Server {

    // Al instanciar un server el constructor crea todo esto y llama a los metodos
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'; // Asi cualquier persona sabe los path disponibles

        // Middlewares
        this.middlewares();

        // Rutas de mi app
        this.routes();
    };

    middlewares() {
        
        // CORS
        this.app.use(cors() );

        // Lectura y parseo del body
        this.app.use( express.json());

        // Directorio publico
        this.app.use(express.static('public'));

    };

    routes() {

        // es como pegar RUTA PRINCIPAL + TODAS LAS DEMAS RUTAS HIJAS
        this.app.use(this.usersPath, require('../routes/users'))
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log("running at " + this.port);
        });
    };

}

module.exports = Server;