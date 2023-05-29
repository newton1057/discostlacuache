import * as express from 'express';

interface Interfaz_Proxy {
  handleRequest(req: express.Request, res: express.Response): void;
}

class API implements Interfaz_Proxy {
  public handleRequest(req: express.Request, res: express.Response): void {
    // Lógica para manejar la solicitud en el objeto real
    // En este caso para realizar consulta
    res.send('Consulta procesada ✅');
  }
}

class Proxy implements Interfaz_Proxy {
  private API: API;

  constructor() {
    this.API = new API();
  }

  public handleRequest(req: express.Request, res: express.Response): void {
    // Lógica adicional en el proxy antes de pasar la solicitud
    console.log('Validacion de Token - Proxy ✅');
    if(req.headers.authorization == "1234"){
        // Procesos de Token
        console.log("Token validado con exito ✅");
        this.API.handleRequest(req, res);
    }
    else{
        console.log("Error en validacion de Token");
        res.status(404).send("Token invalidado ⚠️")
    }
    
  }
}
var foo = require('express');
var app = foo();

// Crear una instancia del Proxy
const proxy = new Proxy();

// Middleware para manejar las peticiones
app.use((req:any, res:any) => {
  proxy.handleRequest(req, res);
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor en ejecución en el puerto 3000');
});
