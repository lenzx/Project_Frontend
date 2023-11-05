import ConvenioList from "../containers/ConvenioList";
import "../styles/Convenios.css";
const Convenios = () => { 
    return (
        <div className="convenio-container">
            <div className="convenio-titulo">Nuestros Convenios</div>
            <ConvenioList/>
        </div>
        
    );
}

export default Convenios;