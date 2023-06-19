//Importacion de CSS
import './UI_Producto_Fisico.css'

//Importacion de Packages
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai'
import { BiPurchaseTagAlt, BiInfoCircle } from 'react-icons/bi'
import { BsCartDash } from 'react-icons/bs'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import NavBar from '../../Components/NavBar/NavBar'
import queryString from 'query-string';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import { useCarritoStore } from '../../../Stores/CarritoStore';

function UI_Producto_Fisico() {
    const location = useLocation();
    const parametos = queryString.parse(location.search);

    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);

    const [isLike, setIsLike] = useState(false);

    const likeClick = () => {
        setIsLike(!isLike)
    }
    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log(count)
        console.log(localStorage.getItem(String(parametos.Nombre)))
      })


    const handleClick = () => {
        if (navigator.share) {
            navigator.share({
                title: "Discos Tlacuache",
                text: String(parametos.Nombre) + " " + String(parametos.Autor),
                url: "http://localhost:5173" + String(location.pathname) + String(location.search)
            })
                .then(() => {
                })
                .catch((error) => {
                    console.error('Error al compartir:', error);
                });
        } else {
            console.log('La API de compartir no es compatible');
        }
    };

    
    return (
        <>
            <motion.div
                className="Animated"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <NavBar></NavBar>
                <div className='Producto_Fisico'>
                    <img className='Producto_Fisico_img' src={String(parametos.URL_Photo)}></img>
                    <div className='Producto_Fisico_Nombre_Album'>
                        <h4>{parametos.Nombre} </h4>
                    </div>
                    <div className='Producto_Fisico_Contenedor'>
                        <div className='Producto_Fisico_Contenedor_Opciones'>
                            <a onClick={handleClick}>
                                <h2><BsIcons.BsFillSendFill /></h2>
                            </a>
                            <h4>{parametos.Precio}</h4>
                            <a onClick={likeClick}>
                                {isLike === false ? (
                                    <h2><FaRegHeart /></h2>
                                ) : (
                                    <h2><FaHeart /></h2>
                                )}
                            </a>
                        </div>
                        <div className='Producto_Fisico_Contenedor_Calificacion'>
                            <AiIcons.AiFillStar />
                            <AiIcons.AiFillStar />
                            <AiIcons.AiFillStar />
                            <AiIcons.AiFillStar />
                            <AiIcons.AiFillStar />
                        </div>
                    </div>

                    <div className='Producto_Fisico_Contenedor_Buttons'>
                        <Button className="btn" variant="secondary" type="submit" onClick={toggleShowA}>
                            Información <BiInfoCircle size={20} className='Bold_Icon' />
                        </Button>
                        <Button className="btn" variant="primary" type="submit" >
                            Comprar <BiPurchaseTagAlt size={20} className='Bold_Icon' />
                        </Button>
                        {localStorage.getItem(String(parametos.Nombre)) == null ?
                        <Button className="btn" variant="primary" type="submit" onClick={async ()=>{
                            useCarritoStore.setState({Cantidad:useCarritoStore.getState().Cantidad + 1})
                            setCount(count+1);
                            localStorage.setItem(String(parametos.Nombre), "true" )
                            }}>
                            Agregar a carrito <BsCartDash size={20} className='Bold_Icon' />
                        </Button> :
                        <Button className="btn" variant="primary" type="submit" onClick={async ()=>{
                            useCarritoStore.setState({Cantidad:useCarritoStore.getState().Cantidad - 1})
                            setCount(count-1);
                            localStorage.removeItem(String(parametos.Nombre))
                            }}>
                            Quitar del carrito <BsCartDash size={20} className='Bold_Icon' />
                        </Button>
                    }
                        
                    </div>
                </div>
                <ToastContainer className="p-3" position="middle-center">
                <Toast show={showA}>
                    <Toast.Header closeButton={false} >
                    </Toast.Header>
                    <Toast.Body >
                        Información
                        <br></br>
                        Autor: {parametos.Autor}
                        <br></br>
                        Genero: {parametos.Genero}
                        <br></br>
                        Disquera: {parametos.Disquera}
                        <br></br>
                        Fecha de Lanzamiento: {parametos.Fecha_Lanzamiento}
                        <Button className="btn" variant="secondary" onClick={toggleShowA}>
                            Cerrar
                        </Button>
                    </Toast.Body>
                </Toast>
            </ToastContainer>
            </motion.div>
        </>
    )
}

export default UI_Producto_Fisico