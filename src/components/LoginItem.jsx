import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'; // Asegúrate de importar tu AuthContext correctamente

function Login() {
    const { login } = useContext(AuthContext);
    const [rut, setRut] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const response = await fetch('http://localhost:8000/api/v1/custom_auth/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: rut,
                password: password,
            }),
        });
    
        const data = await response.json();
        
        console.log("asdasd"+data);

        login(data.access_token); // Utiliza la función login del hook useAuthProvider

        // Redirigir a /test
        navigate('/test');
    };

    return (
        <div className="login1 ">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label text-login">Ingrese su Rut:</label>
                    <input type="text" id="rut" className="form-control ingreso-login" value={rut} onChange={(e) => setRut(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label text-login">Ingrese su Contraseña:</label>
                    <input type="password" id="password" className="form-control ingreso-login" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="btn-login">
                    <button type="submit" className="btn btn-login1">Iniciar sesión</button>
                </div>
            </form>
        </div>
    );
}

export default Login;