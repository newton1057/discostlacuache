import { Autenticacion } from "./Autenticacion";
import axios from '../../libs/axios'
import { Gestion_Cuenta } from "../Gestion_Cuenta/Gestion_Cuenta";
import { Cuenta } from "../Gestion_Cuenta/Cuenta";

export class Gestion_Autenticacion {
    Autenticacion: Autenticacion;

    constructor(Email: string, Password?: string) {
        this.Autenticacion = new Autenticacion(Email, Password);
    }

    //Peticiones
    async Login(): Promise<boolean> {
        const res = await this.Peticion_Login();
        if (res?.status == 200) {
            return true;
        } else {
            return false;
        }
    }

    Peticion_Login = async () => {
        try {
            const response = await axios.post('/IniciarSesion', {
                email: this.Autenticacion.getEmail,
                password: this.Autenticacion.getPassword
            });
            return response;
        } catch (error) {
        }
    }

    async Registrarme(Cuenta: Cuenta): Promise<boolean> {
        console.log(Cuenta.getEApellido)
        const res = await this.Peticion_Registrarme(Cuenta);
        if (res?.status == 200) {
            return true;
        } else {
            return false;
        }
    }

    Peticion_Registrarme = async (Cuenta: Cuenta) => {
        try {
            const response = await axios.post('/RegistrarUsuario', {
                nombres: Cuenta.getNombre,
                apellidos: Cuenta.getEApellido,
                telefono: Cuenta.getTelefono,
                email: this.Autenticacion.getEmail,
                password: this.Autenticacion.getPassword
            })
            return response
        } catch (error) {
        }
    }

    async RestablecerPassword(): Promise<boolean> {
        const res = await this.Peticion_RestablecerPassword();
        if (res?.status == 200) {
            return true;
        } else {
            return false;
        }
    }

    Peticion_RestablecerPassword = async () => {
        try {
            const response = await axios.post('/RecuperarPassword', {
                email: this.Autenticacion.getEmail
            })
            return response
        } catch (error) {
        }
    }
}
