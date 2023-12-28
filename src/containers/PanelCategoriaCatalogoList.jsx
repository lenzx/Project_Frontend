
import PropTypes from "prop-types";
import useGetCategoriaProductos from "../hooks/useGetCategoriaProductos"
import CategoriaCatalogo from "../components/PanelCategoriaCatalogoItem.jsx";
import "../styles/PanelCategoriaCatalogoList.css";
import "../styles/BtnAdd.css";
import iconAgregar from '../assets/icon/boton-agregar.png';
const PanelCategoriaCatalogoList = ({setSelectedForm, setSelectedObject}) => {
    const categoriasCatalogos = useGetCategoriaProductos();

    const handleClick = () => {
        setSelectedObject(null);
        setSelectedForm('CategoriasCatalogo');
    }

    return (    
        <div className="panel-categoria-catalogo-list-container">
            <div className="borde-boton-categoriaCatalogo">
                <button onClick={handleClick} className="btn-add">
                <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </button>
            </div>
            {categoriasCatalogos.map(categoria => (
                <CategoriaCatalogo 
                key={categoria.id} 
                categoria={categoria}
                setSelectedForm={setSelectedForm}
                setSelectedObject={setSelectedObject}
                />
            ))}
        </div>
    )
}

PanelCategoriaCatalogoList.propTypes = {
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired
}

export default PanelCategoriaCatalogoList;