//Importacion de CSS
import './UI_Home.css'

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
//import Logo from '../../../assets/Logo/Logo.svg';
import NavBar from '../../Components/NavBar/NavBar'
//import { useAuthStore } from '../../store/AuthStore';

//Importacion de Controller
//import * as Controller_Autorizacion from '../../../Controllers/Controller_Autorizacion'



function UI_Home(){
    return(
        
        <div className='Home'>
            <NavBar></NavBar>
            <div className='cont'>
                <h1>Bienvenidos</h1>
            </div>
            
            <img className='Album' src='https://img.freepik.com/vector-premium/festival-musica-diseno-plantilla-cartel-horizontal_5883-1414.jpg'></img>
            <div className='cont'>
                <h3>Ultimos exitos</h3>
            </div>

            <div className='Listas_Albums'>
                <img className='Listas_Album' src="https://i.scdn.co/image/ab67616d0000b2738d037895f2a04cf286b4f183" alt="" />
                <img className='Listas_Album' src='https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/36/ed/e8/36ede8e5-f413-4805-335b-993a49b2855b/00602557256796.rgb.jpg/1200x1200bf-60.jpg'></img>
            </div>
            <div className='cont'>
                <h3>Musica en Mexico</h3>
            </div>
            <div className='Listas_Albums'>
                <img className='Listas_Album' src="https://i.scdn.co/image/ab67616d0000b2738d037895f2a04cf286b4f183" alt="" />
                <img className='Listas_Album' src='https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/36/ed/e8/36ede8e5-f413-4805-335b-993a49b2855b/00602557256796.rgb.jpg/1200x1200bf-60.jpg'></img>
            </div>
        </div>
    )
}

export default UI_Home