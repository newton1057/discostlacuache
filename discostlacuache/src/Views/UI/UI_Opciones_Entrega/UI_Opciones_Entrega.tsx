import { Button } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import './UI_Opciones_Entrega.css';
import Form from 'react-bootstrap/Form';

import { MdStore , MdHome} from 'react-icons/md'
import { Link } from "react-router-dom";
function UI_Opciones_Entrega() {
    return (
        <>
            <NavBar></NavBar>
            <div className="UI_Opciones_Entrega">
                <h1>Elegir tipo de entrega</h1>
                <div className="Opciones_Entrega">
                    <Button className="Opcion_Entrega">
                        <h3>Recoger en Tienda <MdStore size={30} className='Bold_Icon' /></h3>
                    </Button>
                    <Link to="/ElegirDireccion">
                    <Button className="Opcion_Entrega">
                        <h3>Envio a domicilio <MdHome size={30} className='Bold_Icon' /></h3>
                    </Button>
                    </Link>

                </div>


            </div>

        </>
    )
}
export default UI_Opciones_Entrega