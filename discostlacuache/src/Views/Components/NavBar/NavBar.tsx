import { HiMenu } from 'react-icons/hi'
import * as BsIcons from 'react-icons/bs'
import * as RxIcons from 'react-icons/rx'
import Logo from '../../../assets/Logo/NombreLogo.svg';
import './NavBar.css'
import { IconContext } from 'react-icons'
import { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom"
import { SideBarData_LogIn } from './SliderBarData_LogIn'
import * as AiIcons from 'react-icons/ai'
import Logo_Completo from '../../../assets/Logo/Logo_Completo.svg'
import { useAutenticacionStore } from '../../../Stores/AutenticacionStore';
import { SideBarData_LogOut } from './SliderBarData_LogOut';
import { useCarritoStore } from '../../../Stores/CarritoStore';

function NavBar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
        const isInitialMount = useRef(true);

    useEffect(() => {
        useCarritoStore.getState().Cantidad;
        if (isInitialMount.current) {
            isInitialMount.current = false;
            //Controller_Cuenta.consultarCuenta(useAuthStore.getState().email);
        }
    });

    if (useAutenticacionStore.getState().logged) {
        return (

            <IconContext.Provider value={{ color: 'black' }}>
                <div className="NavBar">
                    <div id='der'>
                        <h1><HiMenu size={30} className='Bold_Icon' onClick={showSidebar} /></h1>
                        <img src={Logo}></img>
                    </div>
                    <div id="izq">
                        <h1><BsIcons.BsCartDash size={30} className='Bold_Icon' /></h1>
                        <h1>{useCarritoStore.getState().Cantidad}</h1>
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

                        {SideBarData_LogIn.map((item, index) => {
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

    } else {
        return (

            <IconContext.Provider value={{ color: 'black' }}>
                <div className="NavBar">
                    <div id='der'>
                        <h1><HiMenu size={30} className='Bold_Icon' onClick={showSidebar} /></h1>
                        <img src={Logo}></img>
                    </div>
                    <div id="izq">
                        <h1><BsIcons.BsCartDash size={30} className='Bold_Icon' /></h1>
                        <h5>{useCarritoStore.getState().Cantidad}</h5>
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

                        {SideBarData_LogOut.map((item, index) => {
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

}

export default NavBar