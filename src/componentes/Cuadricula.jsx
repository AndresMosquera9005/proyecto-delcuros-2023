import { useEffect, useState } from "react"
import axios from "axios"
import "./Cuadricula.css"
//import Cripto from "./cripto"
import Cripto from "./cripto/Cripto"

function Cuadricula() {

  const API_URL = import.meta.env.VITE_API_URL
  const [criptos, setCritos] = useState()

  useEffect(() => {
    axios.get(`${API_URL}assets`)
    .then((data) =>{
      setCritos(data.data.data)
      console.log(data)
    })
    .catch(() => {
      console.error("la peticion no funciono")
    })
  },[])

  if(!criptos) return <span>Cargando espere un momento por favor...</span>

  return (
    <div className="app-container">
      <h1>Lista de criptomonedas</h1>
      <p>Hola Felipiño esto lo vamos a ver en este proyecto va a hacer sobre la cripto moneda</p>
      <div className="cripto-container">
        {
          criptos.map(({id, name, priceUsd, symbol, rank, suplly, vwap24Hr }) => (
            <Cripto
             key={id}
             name={name}
              priceUsd={priceUsd}
              symbol={symbol}
              rank={rank}
              suplly={suplly}
              vwap24Hr={vwap24Hr}
              id={id}
            />
          ))
        }
      </div>
    </div>

  )
}

export default Cuadricula
