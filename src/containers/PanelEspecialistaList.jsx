import EspecialistaItem from '../components/PanelEspecialistaItem.jsx';
import useGetEspecialista from '../hooks/useGetEspecialista.jsx';
import "../styles/PanelEspecialistaList.css";
import { Link } from 'react-router-dom';
import iconAgregar from '../assets/icon/boton-agregar.png';
const PanelEspecialistaList = () => {
    const especialistas = useGetEspecialista();

    return (
        <div className="panel-especialista-list-container">
            <div className="borde-boton-especialista">
                <Link to="/MenuAdministrador/formularioEspecialista">
                <img src={iconAgregar} className='imagen-boton-agregarEspecialista-container'/>
                </Link>
            </div>
            {especialistas.map(especialista => (
                <EspecialistaItem 
                key={especialista.id} 
                especialista={especialista}
                />
            ))}
        </div>
    );
}

export default PanelEspecialistaList;