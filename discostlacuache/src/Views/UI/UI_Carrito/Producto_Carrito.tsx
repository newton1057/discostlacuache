import { useState } from 'react';
import './Producto_Carrito.css'
import Form from 'react-bootstrap/Form'
import { MdOutlineDeleteOutline } from 'react-icons/md'

interface Producto {
    URL_Portada: string;
    Titulo: string;
    Costo: string;
}

function Producto_Carrito(props: Producto) {
    const [cantidad, setCantidad] = useState(1);

    const Aumentar = () => {
        setCantidad(cantidad + 1);
    }
    const Disminuir = () => {
        if(cantidad != 1){
            setCantidad(cantidad - 1);
        }
        else{
            alert("E")
        }
        
    }
    return (
        <div>
            <div className='Producto_Carrito'>
                <div className='Producto_Carrito_Imagen'>
                    <img src={props.URL_Portada} />
                </div>

                <div className='Producto_Carrito_Info'>
                    <h5>{props.Titulo}</h5>
                    <div id='Controls'>
                        <a onClick={Aumentar}>
                            <h3>+</h3>
                        </a>

                        <Form.Control className='Cantidad' type="" placeholder={cantidad.toString()} name="" required />
                        <a onClick={Disminuir}>
                            <h3>-</h3>
                        </a>

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