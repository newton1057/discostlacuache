import { Button } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import './UI_Elegir_Direccion.css';
import Form from 'react-bootstrap/Form';
import Direccion from "./Direccion";
function UI_Elegir_Direccion() {
    return (
        <>
            <NavBar></NavBar>
            <div className="UI_Elegir_Direccion">
                <h1>Elegir dirección</h1>

                <div className="Direcciones">
                    <Direccion></Direccion>
                </div>
                <div className="Elegir_Direcciones_Buttons">
                    <Button className="btn" variant="secondary" type="submit" >
                        Agregar dirección
                    </Button>
                    <Button className="btn" variant="primary" type="submit" >
                        Siguiente
                    </Button>

                </div>

            </div>

        </>
    )
}
export default UI_Elegir_Direccion