import PropTypes from 'prop-types';
import ProductoItem from '../components/PanelProductosItem.jsx';
import useGetProducto from '../hooks/useGetCatalogo.jsx';
import iconAgregar from '../assets/icon/boton-agregar.png';
import "../styles/PanelProductoList.css";
import { Button } from 'react-bootstrap';
const PanelProductoList = ({setSelectedForm, setSelectedObject}) => {
    const productos = useGetProducto();

    const handleClick = () => {
        setSelectedObject(null);
        setSelectedForm('Productos');
    
    }

    return (
        <div className="panel-producto-list-container">
            <div className="borde-boton-producto">
                <Button onClick={handleClick}>
                    <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </Button>
            </div>
            {productos.map(producto => (
                <ProductoItem 
                key={producto.id} 
                producto={producto}
                setSelectedForm={setSelectedForm}
                setSelectedObject={setSelectedObject}
                />
            ))}
            
            
            
        </div>
        
        
    );
}

PanelProductoList.propTypes = {
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired
}

export default PanelProductoList;