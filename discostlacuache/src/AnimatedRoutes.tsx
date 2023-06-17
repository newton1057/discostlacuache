//  Realiza la animacion entre rutas

//  Importacion de Modulos necesario
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'

// Importacion de IU ubicada en Views
//import IU_Login from './Views/IU_Login/IU_Login'
import UI_Login from "./Views/UI/UI_Login/UI_Login";
import UI_Registrate from "./Views/UI/UI_Registrate/UI_Registrate";
import UI_Olvidaste_Contrasena from "./Views/UI/UI_Olvidaste_Contrasena/UI_Olvidaste_Contrasena";
import UI_Home from "./Views/UI/UI_Home/UI_Home"
import UI_Producto_Fisico from "./Views/UI/UI_Producto/UI_Producto_Fisico";
//import { ProctectedRoute } from "./ProctectedRoute";
import UI_Carrito from "./Views/UI/UI_Carrito/UI_Carrito";
import UI_Elegir_Direccion from "./Views/UI/UI_Elegir_Direccion/UI_Elegir_Direccion";
import UI_Opciones_Entrega from "./Views/UI/UI_Opciones_Entrega/UI_Opciones_Entrega";
import UI_Metodos_Pago from "./Views/UI/UI_Metodos_Pago/UI_Metodos_Pago";
import UI_Pago_Tarjeta from "./Views/UI/UI_Pago_Tarjeta/UI_Pago_Tarjeta";
import UI_Reproductor_Musica from "./Views/UI/UI_Reproductor_Musica/UI_Reproductor_Musica";
function AnimatedRoutes() {
    const location = useLocation();
    console.log(location)
    //  Se tienen que colocar todas las rutas para que se tenga animacion entre ellas
    return (
        <AnimatePresence mode="wait">
           
            <Routes key={location.pathname} location={location}>
                <Route path='/Login' element={<UI_Login />} />
                <Route path='/OlvidasteContrasena' element={<UI_Olvidaste_Contrasena/>}/>
                <Route path='/' element={<UI_Home/>} />
                <Route path='/Producto' element={<UI_Producto_Fisico/>} />
                <Route path='/Carrito' element={<UI_Carrito/>} />
                <Route path='/ElegirDireccion' element={<UI_Elegir_Direccion/>}/>
                <Route path='/OpcionesEntrega' element={<UI_Opciones_Entrega/>}/>
                <Route path='/MetodosPago' element={<UI_Metodos_Pago/>}/>
                <Route path='/PagoTarjeta' element={<UI_Pago_Tarjeta/>}/>
                <Route path='/Registrate' element={<UI_Registrate/>}/>
                <Route path='/ReproductorMusica' element={<UI_Reproductor_Musica/>}/>
            </Routes>
            
        </AnimatePresence>
    )
}

export default AnimatedRoutes