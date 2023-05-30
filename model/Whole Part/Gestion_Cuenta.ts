import { Cuenta } from "./Cuenta";
//import axios from '../../libs/axios'
import { Data } from "./Data";

export class Gestion_Cuenta {
    _Cuenta : Cuenta;
    //Recuperar Datos
    
    Obtener_Datos_Cuenta(){
        const Nombre = "Eduardo Isaac";
        const Apellido = "Davila Bernal";
        const Fecha_Nacimiento = "12/07/2000";
        const _Cuenta = new Cuenta(Apellido,Nombre,Fecha_Nacimiento);
        return _Cuenta;
    }
}
