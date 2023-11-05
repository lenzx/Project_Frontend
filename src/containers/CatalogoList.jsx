import Producto from "../components/CatalogoItem.jsx"

const ProductoList = () => {  
    return (
        <div className="row">
            <div className="col-md-6">
                <Producto 
                imagen = "../assets/Productos/bota ortopedica.jpg" 
                nombre="Bota ortpédica"
                precio="2000"
                descripcion="Bota ortopédica para lesiones"
                />
            </div>
            <div className="col-md-6">
                <Producto imagen = "../assets/Productos/bota ortopedica.jpg"
                nombre = "Rodillera ortopédica"
                precio="2000"
                descripcion="Rodillera ortopédica para lesiones"/>
            </div>
        </div>

    );
}

export default ProductoList;