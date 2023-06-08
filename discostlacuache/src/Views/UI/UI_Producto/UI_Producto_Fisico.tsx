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
    return (

        <div className='Producto_Fisico'>
            <NavBar></NavBar>
            <img className='Producto_Fisico_img' src='https://i.scdn.co/image/ab67616d0000b2738d037895f2a04cf286b4f183'></img>
            <div className='Producto_Fisico_Nombre_Album'>
                <h4>Voluma</h4>
            </div>
            <div className='Producto_Fisico_Contenedor'>
                <h2><BsIcons.BsFillSendFill/></h2>
                <h4>$195.00</h4>
                <h2></h2>
            </div>
            
        </div>

    )
}

export default UI_Producto_Fisico