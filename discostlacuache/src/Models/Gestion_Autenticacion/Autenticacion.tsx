//Clase del Objeto Autenticacion
export class Autenticacion  {
    //Atributos
    private Email: string;
    private Password!: string;

    //Getters
    get getEmail() {
        return this.Email;
    }

    get getPassword() {
        return this.Password;
    }

    //Setters
    set setEmail(Email: string) {
        this.Email = Email;
    }

    set setPassword(Password: string) {
        this.Password = Password;
    }

    //Constructor del Objeto
    constructor(Email: string, Password?: string) {
        if (Password === undefined) {
            this.Email = Email;
        } else {
            this.Email = Email;
            this.Password = Password;
        }
    }
}