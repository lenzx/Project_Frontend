import EspecialidadItem from '../components/PanelEspecialidadItem.jsx';
import useGetEspecialidades from '../hooks/useGetEspecialidades.jsx';
import "../styles/PanelEspecialidadList.css";
import { Link } from 'react-router-dom';
import iconAgregar from '../assets/icon/boton-agregar.png';
const PanelEspecialidadList = () => {
    const especialidades = useGetEspecialidades();



    return (
        <div className="panel-convenio-list-container">
            <div className="borde-boton-especialidad">
                <Link to="/MenuAdministrador/formularioEspecialidad">
                <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </Link>
            </div>
            {especialidades.map(especialidad => (
                <EspecialidadItem 
                key={especialidad.id} 
                especialidad={especialidad}
                />
            ))}
        </div>
    );
}

export default PanelEspecialidadList;