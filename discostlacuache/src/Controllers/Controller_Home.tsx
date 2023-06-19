import { NavigateFunction } from "react-router-dom";
import { Gestion_Producto } from "../Models/Gestion_Productos/Gestion_Productos";

export async function ObtenerAlbums() {
    const Products = await new Gestion_Producto().ExtraerAlbums();
    return Products
}