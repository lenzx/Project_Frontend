import ProductoList from "../containers/CatalogoList.jsx"
import '../styles/Catalogo.css'

const Catalogo = () => { 
    return (
        <div className="container">
            <div className="catalogo-titulo">Nuestros Productos</div>
            <ProductoList/>
        </div>
    );
}

export default Catalogo;