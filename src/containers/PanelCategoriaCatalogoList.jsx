
import useGetCategoriaProductos from "../hooks/useGetCategoriaProductos"
import CategoriaCatalogo from "../components/PanelCategoriaCatalogoItem.jsx";
import "../styles/PanelCategoriaCatalogoList.css";
import { Link } from 'react-router-dom';
import iconAgregar from '../assets/icon/boton-agregar.png';
const PanelCategoriaCatalogoList = () => {
    const categoriasCatalogos = useGetCategoriaProductos();
    return (    
        <div className="panel-categoria-catalogo-list-container">
            <div className="borde-boton-categoriaCatalogo">
                <Link to="/MenuAdministrador/formularioCategoriaProducto">
                <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </Link>
            </div>
            {categoriasCatalogos.map(categoria => (
                <CategoriaCatalogo 
                key={categoria.id} 
                categoria={categoria}
                />
            ))}
        </div>
    )
}

export default PanelCategoriaCatalogoList;