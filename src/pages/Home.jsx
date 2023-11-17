import '../styles/Home.css';
import FooterWave from '../components/FooterWave';
import HomeMain from '../components/HomeMain';
import ServiciosCaroussel from '../containers/ServiciosCaroussel';
import camara from "../assets/Productos/camara hiperbarica.png"
import DescripcionItem from '../components/DescripcionItem';

const Home = () => {
    return (<>

            <div className="container">

                <HomeMain/>
                <DescripcionItem
                contenido={"Somos especialistas en rehabilitación"}
                
                />

                <ServiciosCaroussel
                tipo='Servicios'
                imagen={camara}/>
                
            </div>
            <FooterWave/>

        </>
    );
}

export default Home;