import React from "react"
import UserContextProvider from "./context/UserContext"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import App from "./componentes/App"
import Home from "./componentes/Home"
import Perfil from "./componentes/usuarios/Perfil"
import Cuadricula from "./componentes/Cuadricula"
import CriptoPage from "./componentes/cripto/CriptoPage"
import Login from "./componentes/usuarios/Login"
import Pagina404 from "./componentes/Pagina404"
import "../src/main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="perfil" element={<Perfil />} />
        </Route>
      </Routes>
      <Route path="/criptomonedas" element={<App />}>
        <Route index element={<Cuadricula />} />
        <Route path="perfil" element={<CriptoPage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Pagina404 />} />
    </BrowserRouter>
  </UserContextProvider>
)