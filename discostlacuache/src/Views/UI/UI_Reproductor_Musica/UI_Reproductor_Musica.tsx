//Importacion de CSS
import './UI_Reproductor_Musica.css'

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
//import { useAuthStore } from '../../store/AuthStore';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import "swiper/css/navigation";
import SwiperCore, { Virtual, Navigation, Pagination } from 'swiper';

//Importacion de Controller
//import * as Controller_Autorizacion from '../../../Controllers/Controller_Autorizacion'

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import {MdHeadphones} from 'react-icons/md'
import NavBar from '../../Components/NavBar/NavBar'
function UI_Reproductor_Musica() {

    return (
        <>
        <NavBar></NavBar>
            <div className='UI_Reproductor_Musica'>
                <h6>Reproduciendo canciones <MdHeadphones/></h6>
                <img src='https://i.scdn.co/image/ab67616d0000b2738d037895f2a04cf286b4f183'></img>
                <div >
                    <h4>Voluma</h4>
                    <h6>Zoé</h6>
                </div>
                
                <AudioPlayer
                    hasDefaultKeyBindings={true}
                    src="https://firebasestorage.googleapis.com/v0/b/discostlacuache.appspot.com/o/Amantes%20-%20Leo%CC%81n%20Larregui.mp3?alt=media&token=c6e0f993-125b-4c42-98cb-a6262fafc414"
                    
                />

            </div>
        </>
    )
}



export default UI_Reproductor_Musica