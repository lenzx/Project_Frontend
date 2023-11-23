import LoginList from "../containers/LoginList.jsx";
import FooterWave from "../components/FooterWave.jsx";
import '../styles/Login.css';
const Login = () => { 
    return (
        <>
        <div className="container">
            <h2 className="servicio-titulo text-center">Inicio de Sesión</h2>
            <LoginList/>
        </div>
        <FooterWave/>
        </>
    );
}

export default Login;