
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
clientCode(proxy);