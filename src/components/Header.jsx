import "../styles/Header.css";
import logo from "../assets/logomarkay.png"
import user from "../assets/user.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="container">

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
                <figure>
                    <img src={logo} alt="Markay" className="logo"/>
                </figure>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li class="nav-item">
            <Link to="/">Inicio</Link>
        </li>
        <li class="nav-item">
            <Link to="/servicios">Servicios</Link>
        </li>
        <li class="nav-item">
            <Link to="/especialistas">Especialistas</Link>
        </li>
        <li class="nav-item">
            <Link to="/convenios">Convenios</Link>
        </li>
        <li class="nav-item">
            <Link to="/catalogo">Catálogo</Link>
        </li>
        
        <li class="nav-item">
            <Link to="/login">Iniciar sesión</Link>
        </li>
        


      </ul>
      
    </div>
  </div>
</nav>
</div>
        
    );
}

export default Header;