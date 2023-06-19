import { Cuenta } from "./Cuenta";
import axios from '../../libs/axios'
import { Data } from "../Data";

export class Gestion_Cuenta {
    Crear_Cuenta(nombres:string, apellidos: string, telefono:string){
        return new Cuenta(apellidos, telefono, nombres)
    }

    async Obtener_Datos_Personal(email:string){
        const res = await this.Peticion_Obtener_Datos_Personal(email);
        return new Cuenta(res?.data.apellidos, res?.data.telefono, res?.data.nombres);
    }

    Peticion_Obtener_Datos_Personal =async (email:string) => {
        try {
            const response = await axios.post('/ObtenerDataPersonal',{
                email : email
            });
            return response;
        } catch (error) {
        }
    }
}
