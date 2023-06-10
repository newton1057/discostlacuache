import { HiMenu } from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'
import * as RxIcons from 'react-icons/rx'
import Logo from '../../../assets/Logo/NombreLogo.svg';
import './NavBar.css'
import { IconContext } from 'react-icons'
import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import { SideBarData } from './SliderBarData'
import * as AiIcons from 'react-icons/ai'
import Logo_Completo from '../../../assets/Logo/Logo_Completo.svg'
function NavBar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    const isInitialMount = useRef(true);
    const URL = "CuentaStore(state => state.URL_Photo)";
    const Nombres = "CuentaStore(state => state.Nombres)";
    const Apellidos = "CuentaStore(state => state.Apellidos)";

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
            //Controller_Cuenta.consultarCuenta(useAuthStore.getState().email);
        }
    });

    return (
        <IconContext.Provider value={{ color: 'black' }}>

            <div className="NavBar">
                <div id='der'>
                    <h1><HiMenu size={30} className='Bold_Icon' onClick={showSidebar} /></h1>
                    <img src={Logo}></img>
                </div>
                <div id="izq">
                    <h1><BsIcons.BsCartDash size={30} className='Bold_Icon' /></h1>
                    <h1><RxIcons.RxMagnifyingGlass size={30} className='Bold_Icon' /></h1>
                </div>
            </div>



            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>

                <ul className='nav-menu-items' onClick={showSidebar}>
                    
                    <li className='navbar-toogle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li className='nav_info'>
                        <img src={Logo_Completo} ></img>
                    </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    }
                    )}
                </ul>
            </nav>
        </IconContext.Provider>

    )
}
export default NavBar
//import { Link } from "react-router-dom"
//import { SideBarData } from './SideBarData'
//import * as Controller_Cuenta from '../../Controllers/Controller_Cuenta'
//import React, { useState, useEffect, useRef } from 'react';
//import { useAuthStore } from '../../store/AuthStore'//
//import { CuentaStore } from '../../store/CuentaStore'