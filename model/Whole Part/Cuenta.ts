//Clase del Objeto Cuenta
export class Cuenta  {
    //Atributos
    private _Nombre: string;
    private _Apellido: string;
    private _Fecha_Nacimiento: string;

    //Getters
    get Apellido() {
        return this._Apellido;
    }

    get Fecha_Nacimiento() {
        return this._Fecha_Nacimiento;
    }

    get Nombre(){
        return this._Nombre;
    }

    //Setters
    set Apellido(Apellido: string) {
        this._Apellido = Apellido;
    }


    set Fecha_Nacimiento(Fecha_Nacimiento: string) {
        this._Fecha_Nacimiento = Fecha_Nacimiento;
    }

    set Nombre(Nombre:string){
        this._Nombre = Nombre;
    }

    //Constructor del Objeto
    constructor(Apellido: string, Fecha_Nacimiento: string, Nombre: string) {
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Fecha_Nacimiento = Fecha_Nacimiento;
        console.log("Objeto Cuenta creado correctamente ✅")
    }
}