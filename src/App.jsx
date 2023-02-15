import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"


function App() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCritos] = useState()
  
  useEffect(()=>{
    axios.get(`${API_URL}assets`)
    .then((data) =>{
      setCritos(data.data.data)
    })
    .catch(() => {
      console.error("la peticion no funciono")
    })
  },[])

  if(!criptos) return <span>Cargando espere un momento por favor...</span>

  return (
    <>
      <p>Hola Felipiño esto lo vamos a ver en este proyecto va a hacer sobre la crito moneda</p>
      <h1>Lista de criptomonedas</h1>
      <ol>
          { criptos.map(({id, name, priceUsd, symbol})=>(
            <li key={id}>Nombre: {name} Precio: {priceUsd} simbolo: {symbol}</li>
          ))
        }
      </ol>
    </>
    
  )
}

export default App
