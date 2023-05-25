//Clase del Objeto Cuenta
export class Cuenta  {
    //Atributos
    private Apellido: string;
    private Fecha_Nacimiento: string;
    private Nombre: string;

    //Getters
    get getEApellido() {
        return this.Apellido;
    }

    get getFecha_Nacimiento() {
        return this.Fecha_Nacimiento;
    }

    get getNombre(){
        return this.Nombre;
    }

    //Setters
    set setApellido(Apellido: string) {
        this.Apellido = Apellido;
    }


    set setFecha_Nacimiento(Fecha_Nacimiento: string) {
        this.Fecha_Nacimiento = Fecha_Nacimiento;
    }

    set setNombre(Nombre:string){
        this.Nombre = Nombre;
    }

    //Constructor del Objeto
    constructor(Apellido: string, Fecha_Nacimiento: string, Nombre: string) {
        this.Apellido = Apellido;
        this.Fecha_Nacimiento = Fecha_Nacimiento;
        this.Nombre = Nombre;
        console.log("Objeto Cuenta creado correctamente ✅")
    }
}