import FooterWave from "../components/FooterWave.jsx";
import ServiciosCaroussel from "../containers/ServiciosCaroussel.jsx";


const Servicios = () => { 
    return (
        <>
        <div className="container">
            <h2 className="servicio-titulo text-center">Servicios</h2>
            <ServiciosCaroussel/>
            
        </div>
        <FooterWave/>
        </>
    );
}

export default Servicios;