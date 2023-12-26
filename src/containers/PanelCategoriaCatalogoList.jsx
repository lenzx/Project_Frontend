
import useGetCategoriaProductos from "../hooks/useGetCategoriaProductos"
import CategoriaCatalogo from "../components/PanelCategoriaCatalogoItem.jsx";


const PanelCategoriaCatalogoList = () => {
    const categoriasCatalogos = useGetCategoriaProductos();
    return (    
        <div className="panel-categoria-catalogo-list-container">
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