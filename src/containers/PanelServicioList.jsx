import PropTypes from "prop-types";
import useGetServicio from "../hooks/useGetServicio"
import ServicioItem from "../components/PanelServicioItem.jsx";
import iconAgregar from '../assets/icon/boton-agregar.png';
import "../styles/PanelServicioList.css";
const PanelServicioList = ({setSelectedForm, setSelectedObject}) => {
    const servicios = useGetServicio();

const handleClick = () => {
    setSelectedForm("Servicios");
    setSelectedObject(null);
}
    return (
        <div className="panel-servicio-list-container">
            <div className="borde-boton-servicio">
                <button onClick={handleClick} className="btn-add">
                    <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </button>
            </div>
            {servicios.map(servicio => (
                <ServicioItem 
                key={servicio.id} 
                servicio={servicio}
                setSelectedForm={setSelectedForm}
                setSelectedObject={setSelectedObject}
                />
            ))}
        </div>
    );
}

PanelServicioList.propTypes = {
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired
}

export default PanelServicioList;