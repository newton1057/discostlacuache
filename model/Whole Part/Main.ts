import {Gestion_Autenticacion} from "./Gestion_Autenticacion";

const Email = "newton1057@gmail.com";
const Password = "12345";

console.log("Main: " + Email + " + " + Password);

const Auth = new Gestion_Autenticacion(Email,Password);

const Datos = Auth.Login()!;
if (Datos){
    //Auth.Cambiar_Password(Datos,"NewPassword");
    //console.log("Datos en Data: " + Datos?.Autorizacion.Password)
    console.log("Objeto Data")
    console.log("Autenticacion: ")
    console.log("Email: " + Datos.Autorizacion.Email);
    console.log("Password: " + Datos.Autorizacion.Password);
    console.log("Cuenta ");
    console.log("Nombre: " + Datos.Personal.Nombre);
    console.log("Apellidos: " + Datos.Personal.Apellido);
    console.log("Fecha de Nacimiento: "+ Datos.Personal.Fecha_Nacimiento);
}

else{
    console.log("No hay objeto data");
}