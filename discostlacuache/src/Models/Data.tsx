//Patron Whole-Part
//Class Whole

import { Autenticacion } from "./Gestion_Autenticacion/Autenticacion";
import { Cuenta } from "./Gestion_Cuenta/Cuenta";

export class Data {
    Autorizacion: Autenticacion;
    Personal: Cuenta | undefined;

    constructor(Autorizacion: Autenticacion){
        console.log("Objeto Data Creado correctamente ✅");
        this.Autorizacion = Autorizacion; 
    }

    setPersonal(Personal: Cuenta){
        this.Personal = Personal
    }
}