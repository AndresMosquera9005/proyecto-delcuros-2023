import { useEffect, useState } from "react"

const Perfil = () => {

    const [ usuario, setUsuario ] = useState({})
    useEffect(() =>{
        setUsuario({
            name: "Javier A Mosquera R",
            registered: "08-Marzo-2023"
        })
    },[])
    return( 
        <div>
            <h1>Perfil de {usuario.name}</h1>
            <div>
                Usuario desde: {usuario.registered}
            </div>

        </div>
    )
}

export default Perfil