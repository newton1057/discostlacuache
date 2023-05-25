import {Gestion_Autenticacion} from "./Gestion_Autenticacion";

const Email = "newton1057@gmail.com";
const Password = "12345";

console.log("Main: " + Email + " + " + Password);

const Auth = new Gestion_Autenticacion(Email,Password);
const Datos = Auth.Login()!;
Auth.Cambiar_Password(Datos,"NewPassword");
console.log("Datos en Main: " + Datos?.Autorizacion.Password)