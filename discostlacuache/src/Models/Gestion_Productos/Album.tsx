
//Clase del Objeto Musica
export class Album {
    //Atributos
    private Autor: string;
    private Disquera: string;
    private Genero: string;
    private Nombre: string;
    private URL_Photo: string;
    private Fecha_Lanzamiento: string;

    //Getters
    get getAutor(){
        return this.Autor;
    }

    get getDisquera(){
        return this.Disquera;
    };

    get getGenero(){
        return this.Genero;
    }

    get getNombre(){
        return this.Nombre;
    }
    
    get getURL_Photo(){
        return this.URL_Photo;
    }

    get getFecha_Lanzamiento(){
        return this.Fecha_Lanzamiento;
    }

    //Setters
    set setAutor(Autor: string) {
        this.Autor = Autor;
    }

    set setDisquera(Disquera: string) {
        this.Disquera = Disquera;
    }

    set setGenero(Genero: string) {
        this.Genero = Genero;
    }

    set setNombre(Nombre:string){
        this.Nombre = Nombre;
    }

    set setURL_Photo(URL_Photo: string) {
        this.URL_Photo = URL_Photo;
    }

    set setFecha_Lanzamiento(Fecha_Lanzamiento:string){
        this.Fecha_Lanzamiento = Fecha_Lanzamiento;
    }

    //Constructor del Objeto
    constructor(Nombre: string, Autor: string, Disquera: string, Genero: string, URL_Photo: string, Fecha_Lanzamiento: string) {
        this.Nombre = Nombre;
        this.Autor = Autor;
        this.Disquera = Disquera;
        this.Genero = Genero;
        this.URL_Photo = URL_Photo;
        this.Fecha_Lanzamiento = Fecha_Lanzamiento;
        console.log("Objeto Album creado correctamente ✅")
    }
}