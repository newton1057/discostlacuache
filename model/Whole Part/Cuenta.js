"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuenta = void 0;
//Clase del Objeto Cuenta
var Cuenta = /** @class */ (function () {
    //Constructor del Objeto
    function Cuenta(Apellido, Fecha_Nacimiento, Nombre) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Fecha_Nacimiento = Fecha_Nacimiento;
        console.log("Objeto Cuenta creado correctamente ✅");
    }
    Object.defineProperty(Cuenta.prototype, "Apellido", {
        //Getters
        get: function () {
            return this._Apellido;
        },
        //Setters
        set: function (Apellido) {
            this._Apellido = Apellido;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cuenta.prototype, "Fecha_Nacimiento", {
        get: function () {
            return this._Fecha_Nacimiento;
        },
        set: function (Fecha_Nacimiento) {
            this._Fecha_Nacimiento = Fecha_Nacimiento;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cuenta.prototype, "Nombre", {
        get: function () {
            return this._Nombre;
        },
        set: function (Nombre) {
            this._Nombre = Nombre;
        },
        enumerable: false,
        configurable: true
    });
    return Cuenta;
}());
exports.Cuenta = Cuenta;
