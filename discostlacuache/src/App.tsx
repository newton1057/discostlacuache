import './App.css'

//Librerias para la creacion de Rutas en React
import {
  BrowserRouter
} from 'react-router-dom'

import AnimatedRoutes from './AnimatedRoutes'
//import React, { useState } from 'react'

function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <AnimatedRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
