import { Link } from "react-router-dom"
import "../cripto/Cripto.css"

const Cripto =({ id, name, priceUsd, symbol, rank, suplly, vwap24Hr}) =>{
    return(
        <div className="cripto">
            <h2>{name}</h2>
            <div className="informacion">
                <p><span className="label">Precio: </span>{parseFloat(priceUsd).toFixed(4)}</p>
                <p><span className="label">Simbolo: </span>{symbol}</p>
                <p><span className="label">Rango: </span>{rank}</p>
                <p><span className="label">Suministrar: </span>{suplly}</p>
                <p>
                    <span className="label">Porcentaje: </span>
                    <span className={ parseFloat(vwap24Hr) > 0 ? "positivo" : "negativo" }>
                        {parseFloat(vwap24Hr).toFixed(3)}%
                    </span>  
                </p>
                <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default Cripto
