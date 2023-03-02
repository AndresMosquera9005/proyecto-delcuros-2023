import { Axios } from "axios"
import { useEffect, useState} from "react"

const usePetition = (endpoint) => {

    const API_URL = import.meta.env.VITE_API_URL

    const[data, setData ] = useState()

    useEffect(() => {
        Axios.get(`${API_URL}${endpoint}`)
        .then(data =>{
            setData(data.data.data)
        })
        .catch(e => console.error(e))
    }, [])

    return data
}

export default usePetition;