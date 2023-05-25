var proxy = /** @class */ (function () {
    function proxy(Server) {
        this.Server = Server;
    }
    proxy.prototype.request = function () {
        if (this.verificarAcceso()) {
            this.Server.request();
        }
    };
    proxy.prototype.verificarAcceso = function () {
        console.log("Validacion de Acceso correcta!!!");
        return true;
    };
    return proxy;
}());
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.request = function () {
        console.log("Realizando peticion HTTP");
    };
    return Server;
}());
function solicitud(api) {
    api.request();
}
var server = new Server();
solicitud(server);
var _proxy = new proxy(server);
solicitud(_proxy);
/*
interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    request(): void {
        console.log('Subject: Realizando una peticion http');
    }
}



class PROXY implements Subject {
    private realSubject: RealSubject;
    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }
    private checkAccess(): boolean {
        console.log('Proxy: verificando el acceso de los datos.');
        return true;
    }

    private logAccess(): void {
        console.log('Proxy: logeando el accesso.');
    }
}
function clientCode(subject: Subject) {
    subject.request();
}

const realSubject = new RealSubject();
clientCode(realSubject);
const proxy = new PROXY(realSubject);
clientCode(proxy);*/ 
