import Producto from "../components/CatalogoItem.jsx"
import useGetCatalogo from "../hooks/useGetCatalogo.jsx";

const ProductoList = () => { 
    const catalogos = useGetCatalogo(); 
    return (
        <div className="row">
            {catalogos.map(producto =>(
                        <Producto 
                            item = {producto}
                            key = {producto.id}
                        />

                ))}


            
        </div>

    );
}

export default ProductoList;