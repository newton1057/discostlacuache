import { Autenticacion } from "./Autenticacion";
import axios from '../../libs/axios'
import { Gestion_Cuenta } from "../Gestion_Cuenta/Gestion_Cuenta";

export class Gestion_Autenticacion {
    Autenticacion: Autenticacion;

    constructor (Email: string, Password?: string){
        this.Autenticacion = new Autenticacion(Email, Password);
    }

    //Peticiones
    async Login(): Promise<boolean>{
        const res = await this.Peticion_Login();
        console.log("AHHHHHHHHHHHH")
        if(res?.status == 200){
            return true;
        }else{
            return false;
        }
    }

    Peticion_Login =async () => {
        try {
            
            const response = await axios.post('/IniciarSesion', {
                email: this.Autenticacion.getEmail,
                password: this.Autenticacion.getPassword
            });
            console.log(response)
            return response;
        } catch (error) {
            
        }
    }

    async Registrarme(Cuenta:Gestion_Cuenta): Promise<boolean>{
        console.log(Cuenta.Cuenta.getEApellido)
        const res = await this.Peticion_Registrarme(Cuenta);
        if(res?.status == 200){
            return true;
        }else{
            console.log("sdsac")
            return false;
        }
    }

    Peticion_Registrarme = async (Cuenta:Gestion_Cuenta) => {
        try {
            console.log("adascxz"+Cuenta.Cuenta.getNombre)
            const response = await axios.post('/RegistrarUsuario',{
                nombres: Cuenta.Cuenta.getNombre,
                apellidos: Cuenta.Cuenta.getEApellido,
                telefono: Cuenta.Cuenta.getTelefono,
                email: this.Autenticacion.getEmail,
                password: this.Autenticacion.getPassword
            })
            return response 
        } catch (error) {
        }
    }

    async RestablecerPassword() : Promise<boolean>{
        const res = await this.Peticion_RestablecerPassword();
        if(res?.status ==200){
            return true;
        }else{
            return false;
        }
    }

    Peticion_RestablecerPassword =async () => {
        try {
            const response = await axios.post('/RecuperarPassword',{
                email: this.Autenticacion.getEmail
            })
            return response
            
        } catch (error) {
            
        }
    }
}
