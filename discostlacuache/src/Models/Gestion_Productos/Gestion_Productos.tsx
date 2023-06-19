import axios from '../../libs/axios'
import { Fabrica_Musica_Implementacion } from './FabricaAbstract';

export class Gestion_Producto {
    async ExtraerAlbumsDigital() {
        const res = await this.Peticion_ExtraerAlbums();
        const products_digital: any[] = [];
        const length = res?.data.albums.length;
        const fabric = new Fabrica_Musica_Implementacion();

        for (let index = 0; index < length; index++) {
            if (res?.data.albums[index].Digital == "true") {
                products_digital.push(fabric.crearDiscoDigital(res?.data.albums[index].Nombre, res?.data.albums[index].Autor, res?.data.albums[index].Disquera, res?.data.albums[index].Genero, res?.data.albums[index].URL_Photo, res?.data.albums[index].Fecha_Lanzamiento, res?.data.albums[index].Precio));
            }
        }
        return products_digital;
    }

    async ExtraerAlbumsFisico() {
        const res = await this.Peticion_ExtraerAlbums();
        const products_fisico: any[] = [];
        const length = res?.data.albums.length;
        const fabric = new Fabrica_Musica_Implementacion();

        for (let index = 0; index < length; index++) {
            if (res?.data.albums[index].Fisico == "true") {
                products_fisico.push(fabric.crearDiscoFisico(res?.data.albums[index].Nombre, res?.data.albums[index].Autor, res?.data.albums[index].Disquera, res?.data.albums[index].Genero, res?.data.albums[index].URL_Photo, res?.data.albums[index].Fecha_Lanzamiento, res?.data.albums[index].Precio));
            }
        }
        return products_fisico;
    }

    Peticion_ExtraerAlbums = async () => {
        try {
            const response = await axios.post('/getAlbums');
            return response;
        } catch (error) {
        }
    }
}