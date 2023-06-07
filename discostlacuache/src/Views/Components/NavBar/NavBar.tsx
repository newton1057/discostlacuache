import * as AiIcons from 'react-icons/ai'
import * as HiIcons from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'
import * as RxIcons from 'react-icons/rx'
import * as FaIcons from 'react-icons/fa'
import { Link } from "react-router-dom"
import { IconContext } from 'react-icons'
//import { SideBarData } from './SideBarData'
import FotoPerfil from '../img/IMG_3169.jpg'
//import * as Controller_Cuenta from '../../Controllers/Controller_Cuenta'
import React, { useState, useEffect, useRef } from 'react';
//import { useAuthStore } from '../../store/AuthStore'//
//import { CuentaStore } from '../../store/CuentaStore'

import './NavBar.css'
import NombreLogo from '../../../assets/Logo/NombreLogo.svg';

function NavBar() {

    return (
        <>
            <div className="NavBar">
                <div id='der'>
                    <h1><HiIcons.HiMenu /></h1>
                    <img src={NombreLogo}></img>
                </div>
                <div id="izq">
                    <h1><BsIcons.BsCartDash /></h1>
                    <h1><RxIcons.RxMagnifyingGlass /></h1>

                </div>



            </div>
        </>
    )
}

export default NavBar