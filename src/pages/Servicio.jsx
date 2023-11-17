import FooterWave from "../components/FooterWave.jsx";
import ServiciosCaroussel from "../containers/ServiciosCaroussel.jsx";
import camara from "../assets/Productos/camara hiperbarica.png"
import natacion from "../assets/Productos/natacion.png"
import plantilla from "../assets/Productos/plantillas.png"

const Servicios = () => { 
    return (
        <>
        <div className="container">
            <br />
            <h2 className="servicio-titulo text-center">Servicios</h2>
            <ServiciosCaroussel
            tipo="Médicos"
            imagen={camara}/>
            <ServiciosCaroussel
            tipo="Recreativos"
            imagen={natacion}/>
            <ServiciosCaroussel
            tipo="Productos"
            imagen={plantilla}/>
        </div>
        <FooterWave/>
        </>
    );
}

export default Servicios;