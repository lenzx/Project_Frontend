import "../styles/Header.css";
import logo from "../assets/logomarkay.png"
import { Link } from "react-router-dom";
import useGetMarkay from "../hooks/useGetMarkay.jsx"

const Header = () => {
    const eslogan = useGetMarkay({id:1});
    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <figure>
                        <img src={logo} alt="Markay" className="logo" />
                    </figure>
                    <h1 className="links-header">{eslogan.descripcion}</h1>
                    <Link to="/login" className="footer-content links-header">Iniciar sesión</Link>
                </div>
            </nav>



            <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="footer-content links-header">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/servicios" className="footer-content links-header">Servicios</Link>
                </li>
                <li className="nav-item">
                    <Link to="/especialistas" className="footer-content links-header">Especialistas</Link>
                </li>
                <li className="nav-item">
                    <Link to="/convenios" className="footer-content links-header">Convenios</Link>
                </li>
                <li className="nav-item">
                    <Link to="/catalogo" className="footer-content links-header">Catálogo</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>


        </>

    );
}

export default Header;