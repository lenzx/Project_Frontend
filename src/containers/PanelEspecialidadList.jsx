import PropTypes from 'prop-types';
import EspecialidadItem from '../components/PanelEspecialidadItem.jsx';
import useGetEspecialidades from '../hooks/useGetEspecialidades.jsx';
import "../styles/PanelEspecialidadList.css";
import iconAgregar from '../assets/icon/boton-agregar.png';

const PanelEspecialidadList = ({setSelectedForm,setSelectedObject}) => {
    
    const especialidades = useGetEspecialidades();
    
    const handleClick = () => {
        setSelectedObject(null);
        setSelectedForm('Especialidades');
    };


    return (
        <div className="panel-convenio-list-container">
            <div className="borde-boton-especialidad">
                <button onClick= {handleClick} className="btn-add">
                <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </button>
            </div>
            {especialidades.map(especialidad => (
                <EspecialidadItem 
                key={especialidad.id} 
                especialidad={especialidad}
                setSelectedForm={setSelectedForm}
                setSelectedObject={setSelectedObject}
                />
            ))}
        </div>
    );
}

PanelEspecialidadList.propTypes = {
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired
}

export default PanelEspecialidadList;