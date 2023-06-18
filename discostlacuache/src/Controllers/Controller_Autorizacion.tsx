// Capa Controller - Autorizacion
//  Importacion de Modulos
import { NavigateFunction } from "react-router-dom";
import { Gestion_Autenticacion } from '../Models/Gestion_Autenticacion/Gestion_Autenticacion';
import { Gestion_Cuenta } from "../Models/Gestion_Cuenta/Gestion_Cuenta";
//  Funciones
//  Funcionalidad Iniciar Sesion 
export async function Inicio_Sesion(Email:string, Password:string, navigate:NavigateFunction) : Promise<boolean> { 
    console.log("Enviando desde Controller ✅     Archivo: Controller_Autorizacion.tsx");
    const Autenticacion = new Gestion_Autenticacion(Email, Password);
    if( await Autenticacion.Login()){ //Si el Email y Password son correctos este retornara true y el acceso te enviara a Home, si no retornara false
        RouterViews_Home(navigate);
        return true;
    }else{
        return false;
    }
};

export async function Registrarme(Nombres:string, Apellidos: string, Telefono: string, Email:string, Password:string, navigate:NavigateFunction): Promise<boolean> {
    const Autenticacion = new Gestion_Autenticacion(Email, Password);
    const Cuenta = new Gestion_Cuenta(Nombres, Telefono, Apellidos);
    if(await Autenticacion.Registrarme(Cuenta)){
        return true;
    }else{
        return false
    }
}

//Funcionalidad Recuperar_Password
export async function Recuperar_Password(Email:string, navigate:NavigateFunction) : Promise<boolean> {
    //const Objeto_Autenticacion = new Gestion_Autenticacion(Email);  //Crea objeto Autenticacion con los parametros de Email
    const Autenticacion = new Gestion_Autenticacion(Email);
    if(await Autenticacion.RestablecerPassword()){ //Si el Email ha sido correcto este retornara true, si no retornara false
        console.log("Controller Correcto ResetPassword")
        //Objeto_Autenticacion.Enviar_Email_Recuperar_Password();
        return true;
    }else{
        return false;
    }
    
    
}


export async function Login (Email:string, Password:string, navigate:NavigateFunction) : Promise<boolean> {
    
    //const Objeto_Autenticacion = new Gestion_Autenticacion( Email , Password );
    
    //Si el Email y Password son correctos este retornara true y el acceso te enviara a Home, si no retornara false
    if(false){
        console.log("Controller confirmado")
        RouterViews_Home(navigate);
        return true;
    }else{
        console.log("Controller negado")
        return false;
    }
}


//  RouterViews
//  Ruta a Home
export function RouterViews_Home(navigate:NavigateFunction) : void{
    navigate('/');
}

//  Ruta a RecuperarPassword
export function RouterViews_RecuperarPassword(navigate:NavigateFunction) : void{
    navigate('/RecuperarPassword');
}

//  Ruta a Registrarme
export function RouterViews_Registrarme(navigate:NavigateFunction) : void{
    navigate('/Registrarme');
}

//  Ruta a Iniciar Sesion
export function RouterViews_Iniciar_Sesion(navigate:NavigateFunction) : void{
    navigate('/Login');
}