"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Clase concreta que implementa el sujeto real (RealSubject)
var API = /** @class */ (function () {
    function API() {
    }
    API.prototype.handleRequest = function (req, res) {
        // Lógica para manejar la solicitud en el objeto real
        // En este caso para realizar consulta
        res.send('Consulta procesada ✅');
    };
    return API;
}());
// Clase de proxy que implementa el mismo interfaz que el sujeto
var Proxy = /** @class */ (function () {
    function Proxy() {
        this.API = new API();
    }
    Proxy.prototype.handleRequest = function (req, res) {
        // Lógica adicional en el proxy antes de pasar la solicitud al objeto real
        if (req.headers.authorization == "1234") {
            console.log('Validacion de Token - Proxy ✅');
            console.log("Valor " + req.headers.authorization);
            // Procesos de Token
            console.log("Token validado con exito ✅");
            this.API.handleRequest(req, res);
        }
        else {
            res.status(404).send("Token invalidado ⚠️");
        }
    };
    return Proxy;
}());
var foo = require('express');
var app = foo();
// Crear una instancia del Proxy
var proxy = new Proxy();
// Middleware para manejar las peticiones
app.use(function (req, res) {
    proxy.handleRequest(req, res);
});
// Iniciar el servidor en el puerto 3000
app.listen(3000, function () {
    console.log('Servidor en ejecución en el puerto 3000');
});
