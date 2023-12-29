import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'; // Asegúrate de importar tu AuthContext correctamente
import { LOGIN } from '../markay/api/endpoint';

function Login() {
    const { login } = useContext(AuthContext);
    const [rut, setRut] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const response = await fetch(`${LOGIN}`, {
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
        
       

        try {
            await login(data.access_token); 
            navigate('/MenuAdministrador/');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
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