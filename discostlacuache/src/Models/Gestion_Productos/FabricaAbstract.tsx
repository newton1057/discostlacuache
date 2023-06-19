import { Musica_Digital } from "./Musica_Digital";
import { Musica_Fisica } from "./Musica_Fisica";

interface Fabrica_Musica {
    crearDiscoDigital(Nombre: string, Autor: string, Disquera: string, Genero: string, URL_Photo: string, Fecha_Lanzamiento: string, Precio: string): Musica_Digital;
    crearDiscoFisico(Nombre: string, Autor: string, Disquera: string, Genero: string, URL_Photo: string, Fecha_Lanzamiento: string, Precio: string): Musica_Fisica;
}

// Implementación concreta de la fábrica de Musica
export class Fabrica_Musica_Implementacion implements Fabrica_Musica {
    crearDiscoDigital(Nombre: string, Autor: string, Disquera: string, Genero: string, URL_Photo: string, Fecha_Lanzamiento: string, Precio: string): Musica_Digital {
        return new Musica_Digital(Nombre, Autor, Disquera, Genero, URL_Photo, Fecha_Lanzamiento, Precio);
    }

    crearDiscoFisico(Nombre: string, Autor: string, Disquera: string, Genero: string, URL_Photo: string, Fecha_Lanzamiento: string, Precio: string): Musica_Fisica {
        return new Musica_Fisica(Nombre, Autor, Disquera, Genero, URL_Photo, Fecha_Lanzamiento, Precio);
    }
}
