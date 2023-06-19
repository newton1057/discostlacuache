//Clase del Objeto Cuenta
export class Cuenta  {
    //Atributos
    private Apellido: string;
    private Telefono: string;
    private Nombre: string;

    //Getters
    get getEApellido() {
        return this.Apellido;
    }

    get getTelefono() {
        return this.Telefono;
    }

    get getNombre(){
        return this.Nombre;
    }

    //Setters
    set setApellido(Apellido: string) {
        this.Apellido = Apellido;
    }


    set setTelefono(Telefono: string) {
        this.Telefono = Telefono;
    }

    set setNombre(Nombre:string){
        this.Nombre = Nombre;
    }

    //Constructor del Objeto
    constructor(Apellido: string, Telefono: string, Nombre: string) {
        this.Apellido = Apellido;
        this.Telefono = Telefono;
        this.Nombre = Nombre;
    }
}