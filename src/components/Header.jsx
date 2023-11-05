import "../styles/Header.css";
import logo from "../"
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
                        <Link to="/">Home</Link>
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
                </ul>
            </nav>
        </div>
    );
}

export default Header;