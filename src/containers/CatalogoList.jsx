import Producto from "../components/CatalogoItem.jsx"
import ProductoExpanded from "../components/CatalogoItemExpanded.jsx"


import rodillera from "../assets/Productos/rodillera.jpg"
import bota from "../assets/Productos/bota ortop.jpg"
import useGetCatalogo from "../hooks/useGetCatalogo.jsx";

const ProductoList = () => { 
    const catalogos = useGetCatalogo(); 
    return (
        <div className="row">
            {catalogos.map(producto =>(
                        <div className="col-md-6">
                        <Producto 
                            item = {producto}
                        />

                </div>

                ))}


            
        </div>

    );
}

export default ProductoList;