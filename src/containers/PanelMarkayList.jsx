import PropTypes from 'prop-types';
import MarkayItem from '../components/PanelMarkayItem.jsx';
import useGetMarkay from '../hooks/useGetMarkay.jsx';
import iconAgregar from '../assets/icon/boton-agregar.png';
import "../styles/PanelProductoList.css";
import "../styles/BtnAdd.css";
const PanelMarkayList = ({setSelectedForm, setSelectedObject}) => {
    const markay = useGetMarkay({});
    console.log("IN")


    const handleClick = () => {
        setSelectedObject(null);
        setSelectedForm('PaginaPrincipal');
    
    }

    return (
        <div className="panel-producto-list-container">
            <div className="borde-boton-producto">
                <button onClick={handleClick} className="btn-add">
                    <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </button>
            </div>
            {markay.map(markayObject => (
                <MarkayItem 
                key={markayObject.id} 
                markay={markayObject}
                setSelectedForm={setSelectedForm}
                setSelectedObject={setSelectedObject}
                />
            ))}
            
            
            
        </div>
        
        
    );
}

PanelMarkayList.propTypes = {
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired
}

export default PanelMarkayList;