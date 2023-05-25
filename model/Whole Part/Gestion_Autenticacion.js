"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gestion_Autenticacion = void 0;
var Autenticacion_1 = require("./Autenticacion");
var Data_1 = require("./Data");
var Gestion_Cuenta_1 = require("./Gestion_Cuenta");
var Gestion_Autenticacion = /** @class */ (function () {
    function Gestion_Autenticacion(Email, Password) {
        this.Autenticacion = new Autenticacion_1.Autenticacion(Email, Password);
    }
    Gestion_Autenticacion.prototype.Login = function () {
        if (this.Autenticacion.Email === "newton1057@gmail.com" && this.Autenticacion.Password == "12345") {
            var Datos = new Data_1.Data(this.Autenticacion, this.Cargar_Informacion_Cuenta());
            console.log("Correcto Login + " + Datos.Personal.Apellido);
            return Datos;
        }
        else {
            console.log("Incorrecto Login");
        }
    };
    //Informacion de Cuenta
    Gestion_Autenticacion.prototype.Cargar_Informacion_Cuenta = function () {
        var x = new Gestion_Cuenta_1.Gestion_Cuenta().Obtener_Datos_Cuenta();
        console.log(x.Apellido);
        return x;
    };
    Gestion_Autenticacion.prototype.Cambiar_Password = function (Datos, Password) {
        Datos.Autorizacion.Password = Password;
        console.log("Contraseña Actualizada: " + Datos.Autorizacion.Password);
    };
    return Gestion_Autenticacion;
}());
exports.Gestion_Autenticacion = Gestion_Autenticacion;
