
import EspecialistaItem from '../components/PanelEspecialistaItem.jsx';
import useGetEspecialista from '../hooks/useGetEspecialista.jsx';
import "../styles/PanelEspecialistaList.css";
import iconAgregar from '../assets/icon/boton-agregar.png';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const PanelEspecialistaList = ({setSelectedForm, setSelectedObject}) => {
// ...
    const especialistas = useGetEspecialista();
    
    const handleClick = () => {
        setSelectedObject(null);
        setSelectedForm('Especialistas');
    
    }

    return (
        <div className="panel-especialista-list-container">
            <div className="borde-boton-especialista">
                <Button onClick={handleClick}>
                    <img src={iconAgregar} className='imagen-boton-agregarEspecialista-container'/>
                </Button>
                
            </div>
            {especialistas.map(especialista => (
                <EspecialistaItem 
                key={especialista.id} 
                especialista={especialista}
                setSelectedForm={setSelectedForm}
                setSelectedObject={setSelectedObject}
                />
            ))}
        </div>
    );
}

PanelEspecialistaList.propTypes = {
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired
};

export default PanelEspecialistaList;