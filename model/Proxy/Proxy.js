/**
 * RealSubject contiene cierta lógica empresarial central.
 * Por lo general, RealSubjects son * capaces de realizar
 * un trabajo útil que también puede ser muy lento o sensible -  p.
 * Ej. corregir los datos de entrada.
 * Un Proxy puede resolver estos problemas sin ningún * cambio en el código de RealSubject.
 */
var RealSubject = /** @class */ (function () {
    function RealSubject() {
    }
    RealSubject.prototype.request = function () {
        console.log('Subject: Realizando una peticion http');
    };
    return RealSubject;
}());
var PROXY = /** @class */ (function () {
    function PROXY(realSubject) {
        this.realSubject = realSubject;
    }
    /**
     * Las aplicaciones más comunes del patrón Proxy
     * son la carga perezosa, caching, control de acceso,
     *  registro, etc. Un Proxy puede realizar una de estas
     * cosas y luego, dependiendo del resultado,
     * pasar la ejecución a la el mismo método en un objeto RealSubjects vinculado.
     */
    PROXY.prototype.request = function () {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    };
    PROXY.prototype.checkAccess = function () {
        // Some real checks should go here.
        console.log('Proxy: verificando el acceso de los datos.');
        return true;
    };
    PROXY.prototype.logAccess = function () {
        console.log('Proxy: logeando el accesso.');
    };
    return PROXY;
}());
function clientCode(subject) {
    // ...
    subject.request();
    // ...
}
var realSubject = new RealSubject();
clientCode(realSubject);
var proxy = new PROXY(realSubject);
clientCode(proxy);
