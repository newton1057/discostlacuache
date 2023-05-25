"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autenticacion = void 0;
//Clase del Objeto Autenticacion
var Autenticacion = /** @class */ (function () {
    //Constructor del Objeto
    function Autenticacion(Email, Password) {
        if (Password === undefined) {
            this._Email = Email;
        }
        else {
            this._Email = Email;
            this._Password = Password;
        }
        console.log("Objeto Autenticacion creado correctamente ✅");
    }
    Object.defineProperty(Autenticacion.prototype, "Email", {
        //Getters
        get: function () {
            return this._Email;
        },
        //Setters
        set: function (Email) {
            this._Email = Email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Autenticacion.prototype, "Password", {
        get: function () {
            return this._Password;
        },
        set: function (Password) {
            this._Password = Password;
        },
        enumerable: false,
        configurable: true
    });
    return Autenticacion;
}());
exports.Autenticacion = Autenticacion;
