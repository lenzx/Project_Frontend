import ProductoList from "../containers/CatalogoList.jsx"
import '../styles/Catalogo.css'

import FooterWave from "../components/FooterWave.jsx";

const Catalogo = () => { 
    return (
        <>
        <div className="container">
            <div className="catalogo-titulo text-center">Nuestros Productos</div>
            <ProductoList/>
        </div>
        <FooterWave/>
        </>
    );
}

export default Catalogo;