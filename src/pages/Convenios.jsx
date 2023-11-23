import ConvenioList from "../containers/ConvenioList";
import FooterWave from "../components/FooterWave";
import "../styles/Convenios.css";
const Convenios = () => { 
    return (
        <>
        <div className="convenio-container container">
            <h2 className="convenio-titulo text-center">Nuestros Convenios</h2>
            <ConvenioList/>
        </div>
        <FooterWave/>

        </>
        
    );
}

export default Convenios;