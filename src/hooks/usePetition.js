import axios from "axios"
import { useEffect, useState} from "react"

const usePetition = (endpoint) => {

    const API_URL = import.meta.env.VITE_API_URL

    const[data, setData ] = useState()
    const[cargando, setCargando ] = useState(false)
    const[error, setError ] = useState()

    useEffect(() => {
        setCargando(true)

        axios.get(`${API_URL}${endpoint}`)
        .then(data =>{
            setData(data.data.data)
            setCargando(false)
        })
        .catch(e => {
            setCargando(false)
            setError(e)
        })
    }, [])

    return [data, cargando, error]
}

export default usePetition;