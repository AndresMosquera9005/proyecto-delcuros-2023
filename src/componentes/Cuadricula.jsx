import "./Cuadricula.css"
import Cripto from "./cripto/Cripto"
import usePetition from "../hooks/usePetition"

function Cuadricula() {

  const [criptos] = usePetition("assets")

  if(!criptos) return <span>Cargando espere un momento por favor...</span>

  return (
    <div className="grid-container">
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
              //id={id}
            />
          ))
        }
      </div>
    </div>

  )
}

export default Cuadricula
