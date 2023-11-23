import ProductoList from "../containers/CatalogoList.jsx"
import '../styles/Catalogo.css'

import FooterWave from "../components/FooterWave.jsx";

const Catalogo = () => { 
    return (
        <>
        <div className="container">
            <h2 className="catalogo-titulo text-center">Nuestros Productos</h2>
            <ProductoList/>
        </div>
        <FooterWave/>
        </>
    );
}

export default Catalogo;