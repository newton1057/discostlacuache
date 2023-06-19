import { Musica_Digital } from "./Musica_Digital";
import { Musica_Fisica } from "./Musica_Fisica";

interface Fabrica_Musica {
    crearDiscoDigital(Nombre: string, Autor: string, Disquera: string, Genero: string, URL_Photo: string, Fecha_Lanzamiento: string): Musica_Digital;
    crearDiscoFisico(Nombre: string, Autor: string, Disquera: string, Genero: string, URL_Photo: string, Fecha_Lanzamiento: string): Musica_Fisica;
}

// Implementación concreta de la fábrica de discos
class Fabrica_Musica_Implementacion implements Fabrica_Musica {
    crearDiscoDigital(Nombre: string, Autor: string, Disquera: string, Genero: string, URL_Photo: string, Fecha_Lanzamiento: string): Musica_Digital {
        return new Musica_Digital(Nombre,Autor,Disquera,Genero,URL_Photo,Fecha_Lanzamiento);
    }

    crearDiscoFisico(Nombre: string, Autor: string, Disquera: string, Genero: string, URL_Photo: string, Fecha_Lanzamiento: string): Musica_Fisica {
        return new Musica_Fisica(Nombre,Autor,Disquera,Genero,URL_Photo,Fecha_Lanzamiento);
    }
}



// Ejemplo de uso
//const fabricaDiscos: FabricaDiscos = new FabricaDiscosImpl();

//const discoDigital: DiscoDigital = fabricaDiscos.crearDiscoDigital();
//discoDigital.almacenarDatos("Datos en disco digital");
//console.log(discoDigital.leerDatos());

//const discoFisico: DiscoFisico = fabricaDiscos.crearDiscoFisico();
//discoFisico.grabarDatos("Datos en disco físico");
//console.log(discoFisico.reproducirDatos());
