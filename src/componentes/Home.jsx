import { Link } from "react-router-dom"
import "./estiloCss/Home.css"

const Home = () => {
    return(
        <>
            <h1>Hola Felipiño, Bienvenido a las criptomonedas. </h1>
            <p>Felipiño conozca las 100 criptos más usadas</p>
            <Link className="link" to="/criptomonedas">Ver las criptos </Link>
        </>
    )
}

export default Home
