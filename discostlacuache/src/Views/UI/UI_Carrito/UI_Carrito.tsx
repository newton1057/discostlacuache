import { Button } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import Producto from './Producto_Carrito';
import './UI_Carrito.css';

function UI_Carrito() {
    return (
        <>
            <NavBar></NavBar>
            <div className="Carrito">
                <h1>Carrito de Compra</h1>
                <div id="Carrito_Productos">
                    <Producto URL_Portada="https://i.scdn.co/image/ab67616d0000b2738d037895f2a04cf286b4f183"
                        Titulo="Voluma"
                        Costo="$192.50" />
                    <Producto URL_Portada="https://i.scdn.co/image/ab67616d0000b273798aee313461b5e7a3d4efd8"
                        Titulo="Volumixes"
                        Costo="$250.00" />
                </div>
                <Button className="btn" variant="primary" type="submit" >
                    Comprar ahora
                </Button>
            </div>

        </>
    )
}
export default UI_Carrito