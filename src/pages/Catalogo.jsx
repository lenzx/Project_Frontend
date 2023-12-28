import ProductoList from "../containers/CatalogoList.jsx"
import '../styles/Catalogo.css'
import SeccionList from "../containers/SeccionList.jsx"
import FooterWave from '../containers/FooterWave';


const Catalogo = () => { 
    return (
        <>
        <div className="container">
            <SeccionList idSeccion={4} />

            <ProductoList/>
        </div>
        <FooterWave/>
        </>
    );
}

export default Catalogo;