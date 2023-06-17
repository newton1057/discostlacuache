import { Button } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import './UI_Pago_Tarjeta.css';
import Form from 'react-bootstrap/Form';

import { MdStore, MdHome } from 'react-icons/md'
import { GrPaypal, GrCreditCard } from 'react-icons/gr'
import { Link } from "react-router-dom";

function UI_Pago_Tarjeta() {
    return (
        <>
            <NavBar></NavBar>
            <div className="UI_Pago_Tarjeta">
                <h1>Pago con tarjeta</h1>
                <div className="Data_Tarjeta">

                
                <Form noValidate >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Numero de tarjeta: </Form.Label>
                        <Form.Control type="email" placeholder=" xxxx - xxxx - xxxx - xxxx " name="email" required />
                    </Form.Group>
                    <div className="Data_TarjetaPago_Box">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Vencimiento:</Form.Label>
                            <Form.Control type="password" placeholder=" MM / AA " name="password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>CVV:</Form.Label>
                            <Form.Control type="password" placeholder=" XXX " name="password" required />
                        </Form.Group>

                    </div>
                    

                    <Button className="btn" variant="primary" type="submit" >
                        Realizar pago
                    </Button>
                </Form>
                </div>
            </div>

        </>
    )
}
export default UI_Pago_Tarjeta