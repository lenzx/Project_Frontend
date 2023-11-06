import Producto from "../components/CatalogoItem.jsx"
import ProductoExpanded from "../components/CatalogoItemExpanded.jsx"


import rodillera from "../assets/Productos/rodillera.jpg"
import bota from "../assets/Productos/bota ortop.jpg"

const ProductoList = () => {  
    return (
        <div className="row">
            <div className="col-md-6">
                <Producto 
                imagen = {bota} 
                nombre="Bota ortpédica"
                precio="2000"
                descripcion="Bota ortopédica para lesiones"
                />
            </div>
            <div className="col-md-6">
                <Producto 
                imagen = {rodillera} 
                nombre = "Rodillera ortopédica"
                precio="2000"
                descripcion="Rodillera ortopédica para lesiones"/>
            </div>
            
        </div>

    );
}

export default ProductoList;