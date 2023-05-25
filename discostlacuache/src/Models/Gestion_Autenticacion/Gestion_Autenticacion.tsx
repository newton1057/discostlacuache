import { Autenticacion } from "./Autenticacion";
import axios from '../../libs/axios'
import { Data } from "../Data";
import { Gestion_Cuenta } from "../Gestion_Cuenta/Gestion_Cuenta";
export class Gestion_Autenticacion {
    Autenticacion: Autenticacion;

    constructor (Email: string, Password?: string){
        this.Autenticacion = new Autenticacion(Email, Password);
    }



    //Peticiones
    async Login(): Promise<boolean>{
        const res = await this.Peticion_Login();
        if(res?.status == 200){
            return true;
        }else{
            return false;
        }
    }
    Peticion_Login =async () => {
        try {
            const response = await axios.get('');
            return response;
        } catch (error) {
            
        }
    }

    async LoginC(): Promise<boolean>{
        //Data

        const Datos = new Data(this.Autenticacion);
        const Cuenta = new Gestion_Cuenta("Eduardo", "12/07/2000","Bernal").Cuenta;
        Datos.setPersonal(Cuenta);        
        console.log(Datos.Personal?.getNombre)
        console.log("Procesado desde Model✅     Archivo: Gestion_Autenticacion.tsx")
        return true
    }
}
