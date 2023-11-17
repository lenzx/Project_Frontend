import "../styles/Header.css";
import logo from "../assets/logomarkay.png"
import user from "../assets/user.png"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div>
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
            </div>
            <nav className="navbar">
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/especialistas">Especialistas</Link>
                    </li>
                    <li>
                        <Link to="/servicios">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/convenios">Convenios</Link>
                    </li>
                    <li>
                        <Link to="/catalogo">Catálogo</Link>
                    </li>
                    
                    <li>
                        <Link to="/login">
                            <img src={user} alt="Iniciar sesión" className="user-icon"/>
                        </Link>
                    </li>
                    

                    
                </ul>
            </nav>
        </div>
    );
}

export default Header;