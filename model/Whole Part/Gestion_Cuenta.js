"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestion_Cuenta = void 0;
var Cuenta_1 = require("./Cuenta");
var Gestion_Cuenta = /** @class */ (function () {
    function Gestion_Cuenta() {
    }
    //Recuperar Datos
    Gestion_Cuenta.prototype.Obtener_Datos_Cuenta = function () {
        var Nombre = "Eduardo Isaac";
        var Apellido = "Davila Bernal";
        var Fecha_Nacimiento = "12/07/2000";
        var _Cuenta = new Cuenta_1.Cuenta(Apellido, Nombre, Fecha_Nacimiento);
        return _Cuenta;
    };
    return Gestion_Cuenta;
}());
exports.Gestion_Cuenta = Gestion_Cuenta;
