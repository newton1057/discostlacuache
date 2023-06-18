//Importacion de CSS
import './UI_Login.css'

//Importacion de Packages
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import * as FcIcons from 'react-icons/fc'
import * as IoIcons from 'react-icons/io5'
import Logo from '../../../assets/Logo/Logo.svg';

//import { useAuthStore } from '../../store/AuthStore';

//Importacion de Controller
import * as Controller_Autorizacion from '../../../Controllers/Controller_Autorizacion'

//Datos del Formulario
const DataForm = {
    email: "",
    password: ""
}


function UI_Login() {
    const navigate = useNavigate(); //Extrae la posicion de URL

    const [validated, setValidated] = useState(false);
    const [data, setForm] = useState(DataForm);

    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    //Carga de datos a DataForm
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm({
            ...data,
            [name]: value,
        }
        )
    }

    //Validacion de Formulario
    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            console.log("Enviando desde Vista ✅  wewqe   Archivo: UI_Login.tsx")
            //Si la funcion de Controller Inicio_Sesion() es falsa este habilitara una notificacion con el msj = Correo o contraseña incorrectos 🙁
            if (await Controller_Autorizacion.Inicio_Sesion(data.email, data.password, navigate) == false) {
                toggleShowA();
            }
        }
        setValidated(true);
    };

    return (
        <motion.div
            className="Animated"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="IU_Login contenedor_autorizacion">
                <div id='div-logo'>
                    <img src={Logo} id='LogoLogin'></img>
                </div>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tu correo electronico: </Form.Label>
                        <Form.Control type="email" placeholder="email@example.com" name="email" onChange={onChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña:</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" name="password" onChange={onChange} required />
                    </Form.Group>
                    <Button className="btn" variant="primary" type="submit" >
                        Iniciar Sesión <IoIcons.IoLogIn size={25} />
                    </Button>
                </Form>

                <hr className="hr-text" data-content="or"></hr>

                <div id='botones_login'>
                    <Button className="btn GoogleButton" variant="primary" type="submit" >
                        <FcIcons.FcGoogle size={25} /> Continuar con Google
                    </Button>

                    <Link to="/Registrate">
                    <Button className="btn" variant="primary" type="submit" >
                        Registrate
                    </Button>
                    </Link>
                    <Link to="/OlvidasteContrasena">
                    <Button className="btn" variant="primary" type="submit" >
                        ¿Olvidaste tu contraseña?
                    </Button>
                    </Link>
                </div>



            </div>
            <ToastContainer className="p-3" position="middle-center">
                <Toast show={showA}>
                    <Toast.Header closeButton={false} >
                    </Toast.Header>
                    <Toast.Body >
                        Correo o contraseña incorrectos 🙁
                        <Button className="btn" variant="secondary" onClick={toggleShowA}>
                            Aceptar
                        </Button>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </motion.div>
    )
}

export default UI_Login