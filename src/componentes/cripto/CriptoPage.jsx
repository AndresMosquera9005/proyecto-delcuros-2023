import { useParams } from "react-router-dom"
import usePetition from "../../hooks/usePetition"

import "../cripto/CriptoPage.css"

const CriptoPage = () => {
    
    const params = useParams()

    const cripto =usePetition(`assets/${params.id}`)
    const history =usePetition(`assets/${params.id}/history?interval=d1`)
       
    return (
    <div className="cripto-page-container">
        {
            cripto && (
                <div className="info">
                    <div className="main-info">
                     <span>Ranking: {cripto.rank}</span>
                        <h1>{cripto.name}</h1>
                    <span className="symbol">{cripto.symbol}</span>
                    </div>
                    <div className="detail">
                        <ul>
                            <li className="detail">
                                <span className="label">Precio: </span>
                                <span>{parseFloatNumber(cripto.priceUsd, 3)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">MaxSupply: </span>
                                <span>{parseFloatNumber(cripto.maxSupply, 3)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Markry Cap (USD): </span>
                                <span>{parseFloatNumber(cripto.marketCapUSD, 3)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Volumen (USD - 24 Hrs.)</span>
                                <span>{parseFloatNumber(cripto.volumeUsd24Hr, 3)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Variaciòn (24 Hrs.): </span>
                                <span>{parseFloatNumber(criptoPercent24Hrs, 3)}</span>
                            </li>
                            <li className="detail">
                                <span className="label">Vwap 24 Hrs.: </span>
                                <span>{parseFloatNumber(cripto.vwap24Hr, 3)}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )
        }
        <div className="history">
            {
                history && (
                    <table>
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Precio</th>
                            </tr>
                        </thead>           
                        <tbody>
                            {history.map(({date, priceUsd, time}) => (
                                <tr key={time}>
                                    <td className="label">{new Date(date).toDateString()}</td>
                                    <td className="price">{parseFloatNumber(priceUsd, 3)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )
            }
        </div>
    </div>
    )
    
}

export default CriptoPage
