import "../styles/Header.css"
import logo from "../assets/logo.png"
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
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Equipo</a>
                    </li>
                    <li>
                        <a>Servicios</a>
                    </li>
                    <li>
                        <a>Convenios</a>
                    </li>
                    <li>
                        <a>Catalogos</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;