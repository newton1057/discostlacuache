//  Realiza la animacion entre rutas

//  Importacion de Modulos necesario
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'

// Importacion de IU ubicada en Views
//import IU_Login from './Views/IU_Login/IU_Login'
import UI_Login from "./Views/UI/UI_Login/UI_Login";
import UI_Home from "./Views/UI/UI_Home/UI_Home"
import UI_Producto_Fisico from "./Views/UI/UI_Producto/UI_Producto_Fisico";
//import { ProctectedRoute } from "./ProctectedRoute";
import UI_Carrito from "./Views/UI/UI_Carrito/UI_Carrito";


function AnimatedRoutes() {
    const location = useLocation();
    console.log(location)
    //  Se tienen que colocar todas las rutas para que se tenga animacion entre ellas
    return (
        <AnimatePresence mode="wait">
           
            <Routes key={location.pathname} location={location}>
                <Route path='/' element={<UI_Login />} />
                <Route path='/Home' element={<UI_Home/>} />
                <Route path='/Producto' element={<UI_Producto_Fisico/>} />
                <Route path='/Carrito' element={<UI_Carrito/>} />
            </Routes>
            
        </AnimatePresence>
    )
}

export default AnimatedRoutes