//Patron Whole-Part
//Class Whole
import { Autenticacion } from "./Autenticacion";
import { Cuenta } from "./Cuenta";

export class Data {
    Autorizacion: Autenticacion;
    Personal: Cuenta;

    constructor(Autorizacion: Autenticacion, Personal: Cuenta){
        console.log("Objeto Data Creado correctamente ✅");
        this.Autorizacion = Autorizacion; 
        this.Personal = Personal;
    }
}