import { Gestion_Producto } from "../Models/Gestion_Productos/Gestion_Productos";

export async function ObtenerAlbums() {
    return await new Gestion_Producto().ExtraerAlbumsDigital();
}

export async function ObtenerAlbumsDigital() {
    return await new Gestion_Producto().ExtraerAlbumsDigital();
}

export async function ObtenerAlbumsFisico() {
    return await new Gestion_Producto().ExtraerAlbumsFisico();
}