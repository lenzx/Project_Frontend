import ConvenioList from "../containers/ConvenioList";
import FooterWave from "../components/FooterWave";
import "../styles/Convenios.css";
const Convenios = () => { 
    return (
        <>
        <div className="convenio-container container">
            <div className="convenio-titulo text-center">Nuestros Convenios</div>
            <ConvenioList/>
        </div>
        <FooterWave/>

        </>
        
    );
}

export default Convenios;