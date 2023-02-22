import { Link } from "react-router-dom"

const Home = () => {
    return(
        <>
            <h1>Hola Felipiño, Bienvenido </h1>
            <p>Felipiño conozca las 100 criptos más usadas</p>
            <Link to="/criptomonedas">Ver las criptos </Link>
        </>
    )
}

export default Home
