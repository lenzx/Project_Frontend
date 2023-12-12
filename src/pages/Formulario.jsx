import FormularioList from "../containers/FormularioList.jsx";
import '../styles/Formulario.css';
const Formulario = () => { 
    return (
        <>
        <div className="container">
            <br />
            <h2 className="servicio-titulo text-center">Formulario de Consulta</h2>
            <FormularioList/>
        </div>
        </>
    );
}

export default Formulario;