import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CriptoPage = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const params = useParams()

    const[cripto, setCripto ] = useState({})
    const[history, setHistory] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
        .then(data =>{
            setCripto(data.data.data)
        })
        .catch(e => console.error(e))
    }, [])

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
        .then(data =>{
            setHistory(data.data.data)
        })
        .catch(e => console.error(e))
    }, [])

    return (
        <>
            <h1>Hola soy la Criptomoneda {params.id}</h1>
            <div className="info">
                <ul>
                    <li><span className="label">Nombre: </span>{cripto.name}</li>
                    <li><span className="label">Rango: </span>{cripto.rank}</li>
                    <li><span className="label">Identificaciòn: </span>{cripto.id}</li>
                    <li><span className="label">Precio: </span>{cripto.priceUsd}</li>
                </ul>
            </div>
            <h2>Historial</h2>
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        history.map(({date, priceUsd, time}) => (
                            <tr key={time}>
                                <td>{date}</td>
                                <td>{priceUsd}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default CriptoPage
