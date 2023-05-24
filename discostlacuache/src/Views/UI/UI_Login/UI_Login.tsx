//Importacion de CSS
import './UI_Login.css'

//Importacion de Packages
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
//import { useAuthStore } from '../../store/AuthStore';

//Importacion de Controller

//Datos del Formulario
const DataForm = {
    email: "",
    password: ""
}
function UI_Login() {
    const navigate = useNavigate();

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
                <h1>Bienvenido</h1>
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
                        Iniciar Sesión
                    </Button>
                </Form>

                <h2>--- or ---</h2>
                <Button className="btn" variant="primary" type="submit" >
                    Registrate
                </Button>
                <Button className="btn" variant="primary" type="submit" >
                    ¿Olvidaste tu contraseña?
                </Button>


            </div>
            <ToastContainer className="p-3" position="middle-center">
                <Toast show={showA} bg="light">
                    <Toast.Header closeButton={false}>
                    </Toast.Header>
                    <Toast.Body >
                        Correo o contraseña incorrectos 🙁
                        <Button className="btn" variant="primary" onClick={toggleShowA}>
                            Aceptar
                        </Button>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </motion.div>
    )
}

export default UI_Login