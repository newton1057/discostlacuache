//Patron Whole-Part
//Class Whole

import { Autenticacion } from "./Gestion_Autenticacion/Autenticacion";
import { Cuenta } from "./Gestion_Cuenta/Cuenta";

export class Data {
    Autorizacion: Autenticacion;
    Personal: Cuenta;

    constructor(Autorizacion: Autenticacion, Personal: Cuenta){
        this.Autorizacion = Autorizacion;
        this.Personal = Personal;
    }
    
}