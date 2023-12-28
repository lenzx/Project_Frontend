import FooterWave from '../containers/FooterWave';
import ServiciosCaroussel from "../containers/ServiciosCaroussel.jsx";
import SeccionList from "../containers/SeccionList.jsx";


const Servicios = () => { 
    return (
        <>
        <div className="container">
            <SeccionList idSeccion={1} />
            <ServiciosCaroussel/>
            
        </div>
        <FooterWave/>
        </>
    );
}

export default Servicios;