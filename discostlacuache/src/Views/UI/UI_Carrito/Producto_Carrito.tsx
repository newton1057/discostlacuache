import './Producto_Carrito.css'
import Form from 'react-bootstrap/Form'
import { MdOutlineDeleteOutline } from 'react-icons/md'

interface Producto{
    URL_Portada: string;
    Titulo: string;
    Costo: string;
}

function Producto_Carrito(props:Producto) {
    return (
        <div>
            <div className='Producto_Carrito'>
                <div className='Producto_Carrito_Imagen'>
                    <img src={props.URL_Portada} />
                </div>

                <div className='Producto_Carrito_Info'>
                    <h5>{props.Titulo}</h5>
                    <div id='Controls'>
                        <h3>-</h3>
                        <Form.Control className='Cantidad' type="" placeholder="1" name="" required />
                        <h3>+</h3>
                    </div>
                </div>
                <div className='Producto_Carrito_Boton'>
                    <MdOutlineDeleteOutline size={30} />
                </div>
            </div>
            <div id='Costo'>
                <h6>Costo: {props.Costo}</h6>
            </div>
        </div>
    )
}

export default Producto_Carrito