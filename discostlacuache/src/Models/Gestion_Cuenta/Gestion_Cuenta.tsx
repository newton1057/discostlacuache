import { Cuenta } from "./Cuenta";
//import axios from '../../libs/axios'
import { Data } from "../Data";

export class Gestion_Cuenta {
    Cuenta: Cuenta;

    constructor (nombre: string, telefono: string, apellido: string){
        this.Cuenta = new Cuenta(apellido, telefono, nombre);
    }
}
