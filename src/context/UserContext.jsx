import { createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({ children }) =>{

    const [ usuario, setUsuario ] = useState({})
    useEffect(() =>{
        setUsuario({
            name: "Javier Mosquera",
            registered: "08-Marzo-2023"
        })
    },[])

    return(
        <UserContext.Provider value={usuario}>
            { children }
        </UserContext.Provider>
    )
}

export default { UserContext, UserContextProvider }