
interface API {
    request(): void;
}

class proxy implements API {
    private Server: Server;

    constructor(Server: Server) {
        this.Server = Server;
    }

    public request(): void {
        if (this.verificarAcceso()) {
            this.Server.request();
        }
    }

    private verificarAcceso(): boolean {
        console.log("Validacion de Acceso correcta!!!");
        return true;
    }
}

class Server implements API {
    public request(): void {
        console.log("Realizando peticion HTTP");
    }
}

function solicitud(api:API){
    api.request();
}

const server = new Server();
solicitud(server);
const _proxy = new proxy(server);
solicitud(_proxy)

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