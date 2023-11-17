import LoginList from "../containers/LoginList.jsx";
import FooterWave from "../components/FooterWave.jsx";
import '../styles/Login.css';
const Login = () => { 
    return (
        <>
        <div className="container">
            <br />
            <h2 className="servicio-titulo text-center">Inicio de Sesión</h2>
            <LoginList/>
        </div>
        </>
    );
}

export default Login;