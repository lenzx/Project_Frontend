import ProductoItem from '../components/PanelProductosItem.jsx';
import useGetProducto from '../hooks/useGetCatalogo.jsx';
import iconAgregar from '../assets/icon/boton-agregar.png';
import "../styles/PanelProductoList.css";
import { Link } from 'react-router-dom';
const PanelProductoList = () => {
    const productos = useGetProducto();

    return (
        <div className="panel-producto-list-container">
            <div className="borde-boton-producto">
                <Link to="/MenuAdministrador/formularioProducto/">
                <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </Link>
            </div>
            {productos.map(producto => (
                <ProductoItem 
                key={producto.id} 
                producto={producto}
                />
            ))}
            
            
            
        </div>
        
        
    );
}

export default PanelProductoList;