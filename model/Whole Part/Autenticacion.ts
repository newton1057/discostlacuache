//Clase del Objeto Autenticacion
export class Autenticacion  {
    //Atributos
    private _Email: string;
    private _Password!: string;

    //Getters
    get Email() {
        return this._Email;
    }

    get Password() {
        return this._Password;
    }

    //Setters
    set Email(Email: string) {
        this._Email = Email;
    }

    set Password(Password: string) {
        this._Password = Password;
    }

    //Constructor del Objeto
    constructor(Email: string, Password?: string) {
        if (Password === undefined) {
            this._Email = Email;
        } else {
            this._Email = Email;
            this._Password = Password;
        }
        console.log("Objeto Autenticacion creado correctamente ✅");
    }
}