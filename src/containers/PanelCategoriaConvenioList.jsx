
import PropTypes from "prop-types";
import useGetCategoriaConvenios from "../hooks/useGetCategoriaConvenios.jsx"
import CategoriaConvenio from "../components/PanelCategoriaConvenioItem.jsx"
import "../styles/PanelCategoriaCatalogoList.css";
import "../styles/BtnAdd.css";

import iconAgregar from '../assets/icon/boton-agregar.png';
const PanelCategoriaConvenioList = ({setSelectedForm, setSelectedObject}) => {
    const categoriasConvenio = useGetCategoriaConvenios();

    const handleClick = () => {
        setSelectedObject(null);
        setSelectedForm('CategoriasConvenio');
    }

    return (    
        <div className="panel-categoria-catalogo-list-container">
            <div className="borde-boton-categoriaCatalogo">
                <button onClick={handleClick} className="btn-add">
                <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </button>
            </div>
            {categoriasConvenio.map(convenio => (
                <CategoriaConvenio 
                key={convenio.id} 
                convenio={convenio}
                setSelectedForm={setSelectedForm}
                setSelectedObject={setSelectedObject}
                />
            ))}
        </div>
    )
}

PanelCategoriaConvenioList.propTypes = {
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired
}

export default PanelCategoriaConvenioList;