import axios from '../../libs/axios'

export class Gestion_Producto {

    async ExtraerAlbums() {
        const res = await this.Peticion_ExtraerAlbums();
        const productos : any[] = [];
        const length = res?.data.albums.length; 
        for (let index = 0; index < length; index++) {
            productos.push(res?.data.albums[index]);
        }
        return productos;
    }


    Peticion_ExtraerAlbums = async () => {
        try {
            const response = await axios.post('/getAlbums');
            console.log(response);
            return response;
        } catch (error) {
        }
    }

}