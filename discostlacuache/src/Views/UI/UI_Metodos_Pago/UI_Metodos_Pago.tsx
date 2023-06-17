import { Button } from "react-bootstrap";
import NavBar from "../../Components/NavBar/NavBar";
import './UI_Metodos_Pago.css';
import Form from 'react-bootstrap/Form';

import { MdStore, MdHome } from 'react-icons/md'
import { GrPaypal , GrCreditCard } from 'react-icons/gr'
import { Link } from "react-router-dom";
function UI_Metodos_Pago() {
    return (
        <>
            <NavBar></NavBar>
            <div className="UI_Metodos_Pago">
                <h1>Metodos de Pago</h1>
                <div className="MetodosPago">
                    <div className="MetodoPago">
                        <h1><GrPaypal /></h1>
                        <h1>PayPal</h1>
                    </div>
                    <div className="MetodoPago">
                        <h1><GrCreditCard /></h1>
                        <h1>Tarjeta</h1>
                    </div>
                </div>

            </div>

        </>
    )
}
export default UI_Metodos_Pago