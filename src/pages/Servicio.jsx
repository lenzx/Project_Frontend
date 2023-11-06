import ServiciosList from "../containers/ServicioList.jsx";
import '../styles/Servicio.css'
import FooterWave from "../components/FooterWave.jsx";
const Servicios = () => { 
    return (
        <>
        <div className="container">
            <br />
            <h2 className="servicio-titulo text-center">Servicios Ofrecidos</h2>
            <ServiciosList/>
        </div>
        <FooterWave/>
        </>
    );
}

export default Servicios;