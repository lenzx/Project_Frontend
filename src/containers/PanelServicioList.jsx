import useGetServicio from "../hooks/useGetServicio"
import ServicioItem from "../components/PanelServicioItem.jsx";
import { Link } from 'react-router-dom';
import iconAgregar from '../assets/icon/boton-agregar.png';
import "../styles/PanelServicioList.css";
const PanelServicioList = () => {
    const servicios = useGetServicio();

    return (
        <div className="panel-servicio-list-container">
            <div className="borde-boton-servicio">
                <Link to="/MenuAdministrador/formularioServicios">
                <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </Link>
            </div>
            {servicios.map(servicio => (
                <ServicioItem 
                key={servicio.id} 
                servicio={servicio}
                />
            ))}
        </div>
    );
}



export default PanelServicioList;