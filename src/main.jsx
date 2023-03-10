import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import App from "./componentes/App"
import "../src/main.css"
import Cuadricula from './componentes/Cuadricula'
import Home from './componentes/Home'
import CriptoPage from './componentes/cripto/CriptoPage'
import Perfil from './Perfil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='perfil' element={<Perfil />} />
      </Route>
      <Route path='/criptomonedas' element={<App />}>
        <Route index element={<Cuadricula />}/>
        <Route path=':id' element={< CriptoPage />} />
      </Route>
    </Routes>   
  </BrowserRouter>  
)