import { Button } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import './UI_Elegir_Direccion.css';
import Form from 'react-bootstrap/Form';

function Direccion() {
    return (
        <>
            
                    <Form className="Opcion_Direccion">
                        <Form.Check // prettier-ignore
                            type="checkbox"
                        />
                        <div className="Card_Direccion">
                            <h6>CDA 17 260, LOMAS SAN ISIDRO, 11620</h6>
                            <div className="Card_Direccion_Ciudad_Alcaldia">
                                <h6>Distrito Federal</h6>
                                <h6>Miguel Hidalgo</h6>
                            </div>

                        </div>
                        
                    </Form>
               


        </>
    )
}
export default Direccion