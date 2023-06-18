

import './UI_Registrate.css'

//Importacion de CSS

//Importacion de Packages
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import * as FcIcons from 'react-icons/fc'
import * as IoIcons from 'react-icons/io5'
import Logo from '../../../assets/Logo/Logo.svg';

//import { useAuthStore } from '../../store/AuthStore';
import './UI_Registrate.css'

//Importacion de Controller
import * as Controller_Autorizacion from '../../../Controllers/Controller_Autorizacion'

//Datos del Formulario
const DataForm = {
    nombres: "",
    apellidos: "",
    telefono: "",
    email: "",
    password: ""
}

function UI_Registrate() {
    const navigate = useNavigate(); //Extrae la posicion de URL

    const [validated, setValidated] = useState(false);
    const [data, setForm] = useState(DataForm);

    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    const [showB, setShowB] = useState(false);
    const toggleShowB = () => setShowB(!showB);

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
            console.log("Enviando desde Vista ✅     Archivo: UI_Login.tsx")
            //Si la funcion de Controller Inicio_Sesion() es falsa este habilitara una notificacion con el msj = Correo o contraseña incorrectos 🙁
            if (await Controller_Autorizacion.Registrarme(data.nombres, data.apellidos, data.telefono, data.email, data.password, navigate) == false) {
                toggleShowA();
            }else{
                toggleShowB();
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
            <div className="IU_Registrate contenedor_autorizacion">
                <h1>Registrate</h1>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre(s): </Form.Label>
                        <Form.Control type="text" placeholder="Introduce tu nombre" name="nombres" onChange={onChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Apellidos: </Form.Label>
                        <Form.Control type="text" placeholder="Introduce tus apellidos" name="apellidos" onChange={onChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Telefono: </Form.Label>
                        <Form.Control type="text" placeholder="Telefono" name="telefono" onChange={onChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electronico: </Form.Label>
                        <Form.Control type="text" placeholder="email@example.com" name="email" onChange={onChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Contraseña: </Form.Label>
                        <Form.Control type="text" placeholder="email@example.com" name="password" onChange={onChange} required />
                    </Form.Group>
                    
                    <Button className="btn" variant="primary" type="submit" >
                        Registrate <IoIcons.IoLogIn size={25} />
                    </Button>
                </Form>
            </div>
            <ToastContainer className="p-3" position="middle-center">
                <Toast show={showA} >
                    <Toast.Header closeButton={false}>
                    </Toast.Header>
                    <Toast.Body >
                        Usuario ya registrado
                        <Button className="btn" variant="primary" onClick={toggleShowA}>
                            Aceptar
                        </Button>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
            <ToastContainer className="p-3" position="middle-center">
                <Toast show={showB} >
                    <Toast.Header closeButton={false}>
                    </Toast.Header>
                    <Toast.Body >
                        Registro exitoso
                        <Button className="btn" variant="primary" onClick={() => Controller_Autorizacion.RouterViews_Iniciar_Sesion(navigate)}>
                            Aceptar
                        </Button>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </motion.div>
    )
}

export default UI_Registrate