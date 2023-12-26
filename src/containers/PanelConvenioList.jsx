import ConvenioItem from '../components/PanelConvenioItem.jsx';
import useGetConvenios from '../hooks/useGetConvenios.jsx';
import "../styles/PanelConvenioList.css";
import { Link } from 'react-router-dom';
import iconAgregar from '../assets/icon/boton-agregar.png';
const PanelConvenioList = () => {
    const convenios = useGetConvenios();

    return (
        <div className="panel-convenio-list-container">
            <div className="borde-boton-convenio">
                <Link to="/MenuAdministrador/formularioConvenio">
                <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </Link>
            </div>
            {convenios.map(convenio => (
                <ConvenioItem 
                key={convenio.id} 
                convenio={convenio}
                />
            ))}
            
        </div>
    );
}

export default PanelConvenioList;