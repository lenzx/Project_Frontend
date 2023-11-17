// eslint-disable-next-line react/prop-types
const Login = () => {
    
    return (
        
        <div className="login1 ">
            <form>
                <div className="mb-3">
                    <label  className="form-label text-login">Ingrese su Rut:</label>
                    <input type="text" id="rut" className="form-control ingreso-login"/>
                </div>
                <div className="mb-3">
                    <label className="form-label text-login"> Ingrese su Contraseña:</label>
                    <input type="password" id="password" className="form-control ingreso-login"  />
                </div>
                <div className="btn-login">
                    <button type="button" className="btn btn-login1" >Iniciar sesión</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
