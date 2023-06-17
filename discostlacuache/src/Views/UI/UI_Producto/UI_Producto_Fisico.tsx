//Importacion de CSS
import './UI_Producto_Fisico.css'

//Importacion de Packages
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import * as FcIcons from 'react-icons/fc'
import * as BsIcons from 'react-icons/bs'
import * as IoIcons from 'react-icons/io5'
import * as AiIcons from 'react-icons/ai'
import { BiPurchaseTagAlt, BiInfoCircle } from 'react-icons/bi'
import { BsCartDash } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaHeart, FaRegHeart } from 'react-icons/fa';
//import Logo from '../../../assets/Logo/Logo.svg';
import NavBar from '../../Components/NavBar/NavBar'
//import { useAuthStore } from '../../store/AuthStore';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "swiper/css/navigation";
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';

//Importacion de Controller
//import * as Controller_Autorizacion from '../../../Controllers/Controller_Autorizacion'



function UI_Producto_Fisico() {
    const [isShared, setIsShared] = useState(false);
    const [isLike, setIsLike] = useState(false);

    const likeClick = () => {
        setIsLike(!isLike)
    }
    const handleClick = () => {
        // Lógica para compartir
        // Aquí puedes utilizar librerías o implementar tu propia lógica para compartir en redes sociales, enviar un correo electrónico, etc.

        // Por ejemplo, usando la API del navegador para compartir:
        if (navigator.share) {
            navigator.share({
                title: 'Título del contenido compartido',
                text: 'Descripción del contenido compartido',
                url: 'https://www.ejemplo.com'
            })
                .then(() => {
                    setIsShared(true);
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

                    <img className='Producto_Fisico_img' src='https://i.scdn.co/image/ab67616d0000b2738d037895f2a04cf286b4f183'></img>
                    <div className='Producto_Fisico_Nombre_Album'>
                        <h4>Voluma</h4>
                    </div>
                    <div className='Producto_Fisico_Contenedor'>
                        <div className='Producto_Fisico_Contenedor_Opciones'>
                            <a onClick={handleClick}>
                                <h2><BsIcons.BsFillSendFill /></h2>
                            </a>

                            <h4>$195.00</h4>
                            <a onClick={likeClick}>
                                {isLike === false ? (
                                    <h2><FaRegHeart /></h2>
                                ) : (
                                    <h2><FaHeart/></h2>
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


                        <Button className="btn" variant="secondary" type="submit" >
                            Información <BiInfoCircle size={20} className='Bold_Icon' />
                        </Button>
                        <Button className="btn" variant="primary" type="submit" >
                            Comprar <BiPurchaseTagAlt size={20} className='Bold_Icon' />
                        </Button>
                        <Button className="btn" variant="primary" type="submit" >
                            Agregar a carrito <BsCartDash size={20} className='Bold_Icon' />
                        </Button>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default UI_Producto_Fisico