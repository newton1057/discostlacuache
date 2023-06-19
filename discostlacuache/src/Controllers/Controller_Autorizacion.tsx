// Capa Controller - Autorizacion
//  Importacion de Modulos
import { NavigateFunction } from "react-router-dom";
import { Gestion_Autenticacion } from '../Models/Gestion_Autenticacion/Gestion_Autenticacion';
import { Gestion_Cuenta } from "../Models/Gestion_Cuenta/Gestion_Cuenta";
import { Data } from "../Models/Data";
import { useAutenticacionStore } from "../Stores/AutenticacionStore";
import { useDataStore } from "../Stores/DataStore";

//  Funciones
//  Funcionalidad Iniciar Sesion 
export async function Inicio_Sesion(Email:string, Password:string, navigate:NavigateFunction) : Promise<boolean> { 
    const Autenticacion = new Gestion_Autenticacion(Email, Password);
    if( await Autenticacion.Login()){
        const Cuenta = await new Gestion_Cuenta().Obtener_Datos_Personal(Email);
        const Data_Contenedor = new Data(Autenticacion.Autenticacion, Cuenta);
        useAutenticacionStore.setState({email: Email})
        useAutenticacionStore.setState({logged: true})
        useDataStore.setState({email:Email});
        useDataStore.setState({nombres:Data_Contenedor.Personal.getNombre});
        useDataStore.setState({apellidos:Data_Contenedor.Personal.getEApellido});
        useDataStore.setState({telefono: Data_Contenedor.Personal.getTelefono});
        RouterViews_Home(navigate);
        return true;
    }else{
        return false;
    }
};

//  Funcionalidad Registrarme
export async function Registrarme(Nombres:string, Apellidos: string, Telefono: string, Email:string, Password:string, navigate:NavigateFunction): Promise<boolean> {
    const Autenticacion = new Gestion_Autenticacion(Email, Password);
    const Cuenta = new Gestion_Cuenta().Crear_Cuenta(Nombres, Apellidos, Telefono);
    if(await Autenticacion.Registrarme(Cuenta)){
        return true;
    }else{
        return false
    }
}

//Funcionalidad Recuperar_Password
export async function Recuperar_Password(Email:string, navigate:NavigateFunction) : Promise<boolean> {
    const Autenticacion = new Gestion_Autenticacion(Email);
    if(await Autenticacion.RestablecerPassword()){
        return true;
    }else{
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