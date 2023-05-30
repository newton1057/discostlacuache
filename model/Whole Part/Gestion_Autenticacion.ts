import { Autenticacion } from "./Autenticacion";
import { Data } from "./Data";
import { Gestion_Cuenta } from "./Gestion_Cuenta";

export class Gestion_Autenticacion {
    Autenticacion: Autenticacion;

    constructor(Email: string, Password: string) {
        this.Autenticacion = new Autenticacion(Email, Password)
    }

    Login() {
        if (this.Autenticacion.Email === "newton1057@gmail.com" && this.Autenticacion.Password == "12345") {
            const Datos = new Data(this.Autenticacion, this.Cargar_Informacion_Cuenta());
            console.log("Correcto Login ");
            return Datos;
        } else {
            console.log("Incorrecto Login");
        }
    }

    //Informacion de Cuenta
    Cargar_Informacion_Cuenta() {
        const data = new Gestion_Cuenta().Obtener_Datos_Cuenta();
        console.log(data.Apellido)
        return data;
    }

    Cambiar_Password(Datos: Data, Password:string){
        Datos.Autorizacion.Password = Password;
        console.log("Contraseña Actualizada: " + Datos.Autorizacion.Password);
    }
}
