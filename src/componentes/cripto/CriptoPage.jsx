import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CriptoPage = () => {

    const API_URL = import.meta.env.VITE_API_URL
    const params = useParams()

    const[cripto, setCripto ] = useState({})

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
        .then(data =>{
            setCripto(data.data.data)
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
                </ul>
            </div>
        </>
    )
}

export default CriptoPage
