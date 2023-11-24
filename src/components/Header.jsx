import "../styles/Header.css";
import logo from "../assets/logomarkay.png"
import user from "../assets/user.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <figure>
                        <img src={logo} alt="Markay" className="logo" />
                    </figure>
                    <h1 class="links-header">Somos especialistas en rehabilitacion</h1>
                    <Link to="/login" class="footer-content links-header">Iniciar sesión</Link>
                </div>
            </nav>



            <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <Link to="/" className="footer-content links-header">Inicio</Link>
                </li>
                <li class="nav-item">
                    <Link to="/servicios" className="footer-content links-header">Servicios</Link>
                </li>
                <li class="nav-item">
                    <Link to="/especialistas" className="footer-content links-header">Especialistas</Link>
                </li>
                <li class="nav-item">
                    <Link to="/convenios" className="footer-content links-header">Convenios</Link>
                </li>
                <li class="nav-item">
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