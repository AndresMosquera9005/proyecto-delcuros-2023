import { useParams } from "react-router-dom"
import usePetition from "../../hooks/usePetition"
import "../cripto/CriptoPage.css"
import CriptoHistory from "../cripto/info/CriptoHistorial"
import CriptoInfo from "../cripto/info/CriptoInfo"
 

const CriptoPage = () => {
    
    const params = useParams()

    const [cripto, cargandoCripto] =usePetition(`assets/${params.id}`)
    const [history, cargandoHistory] =usePetitionetition(`assets/${params.id}/history?interval=d1`)

    if (cargandoCripto || cargandoHistory ) return <span>Cargando... </span>
       
    return (
    <div className="cripto-page-container">   
        { cripto && <CriptoInfo cripto={cripto} /> }
        { history && <CriptoHistory history={history} /> }    
    </div>
    )   
}

export default CriptoPage
