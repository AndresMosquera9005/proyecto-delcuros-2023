import "../menu/Menu.css"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

const Menu = () => {
    
    const [ usuario, setUsuario ] = useState({})
    useEffect(() =>{
        setUsuario({
            name: "Javier Mosquera",
            registered: "08-Marzo-2023"
        })
    },[])

    return(
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/criptomonedas">Lista de criptomonedas</NavLink></li>
                <li><NavLink to="/perfil">Perfil de { usuario.name }</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu
