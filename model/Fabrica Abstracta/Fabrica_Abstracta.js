// Implementación concreta de DiscoDigital
var DiscoDigitalImpl = /** @class */ (function () {
    function DiscoDigitalImpl() {
        this.datos = null;
    }
    DiscoDigitalImpl.prototype.almacenarDatos = function (datos) {
        console.log("Almacenando datos en el disco digital");
        this.datos = datos;
    };
    DiscoDigitalImpl.prototype.leerDatos = function () {
        console.log("Leyendo datos del disco digital");
        return this.datos;
    };
    return DiscoDigitalImpl;
}());
// Implementación concreta de DiscoFisico
var DiscoFisicoImpl = /** @class */ (function () {
    function DiscoFisicoImpl() {
        this.datos = null;
    }
    DiscoFisicoImpl.prototype.grabarDatos = function (datos) {
        console.log("Grabando datos en el disco físico");
        this.datos = datos;
    };
    DiscoFisicoImpl.prototype.reproducirDatos = function () {
        console.log("Reproduciendo datos del disco físico");
        return this.datos;
    };
    return DiscoFisicoImpl;
}());
// Implementación concreta de la fábrica de discos
var FabricaDiscosImpl = /** @class */ (function () {
    function FabricaDiscosImpl() {
    }
    FabricaDiscosImpl.prototype.crearDiscoDigital = function () {
        return new DiscoDigitalImpl();
    };
    FabricaDiscosImpl.prototype.crearDiscoFisico = function () {
        return new DiscoFisicoImpl();
    };
    return FabricaDiscosImpl;
}());
// Ejemplo de uso
var fabricaDiscos = new FabricaDiscosImpl();
var discoDigital = fabricaDiscos.crearDiscoDigital();
discoDigital.almacenarDatos("Datos en disco digital");
console.log(discoDigital.leerDatos());
var discoFisico = fabricaDiscos.crearDiscoFisico();
discoFisico.grabarDatos("Datos en disco físico");
console.log(discoFisico.reproducirDatos());
