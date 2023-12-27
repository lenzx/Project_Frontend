import PropTypes from 'prop-types';
import ConvenioItem from '../components/PanelConvenioItem.jsx';
import useGetConvenios from '../hooks/useGetConvenios.jsx';
import "../styles/PanelConvenioList.css";
import iconAgregar from '../assets/icon/boton-agregar.png';
import { Button } from 'react-bootstrap';
const PanelConvenioList = ({setSelectedForm, setSelectedObject}) => {

    const convenios = useGetConvenios();

    const handleClick = () => {
        setSelectedObject(null);
        setSelectedForm('Convenios');
    
    }

    return (
        <div className="panel-convenio-list-container">
            <div className="borde-boton-convenio">
                <Button onClick={handleClick}>
                    <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </Button>
            </div>
            {convenios.map(convenio => (
                <ConvenioItem 
                key={convenio.id} 
                convenio={convenio}
                setSelectedForm={setSelectedForm}
                setSelectedObject={setSelectedObject}
                />
            ))}
            
        </div>
    );
}

PanelConvenioList.propTypes = {
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired
}


export default PanelConvenioList;