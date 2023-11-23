import EspecialistasList from "../containers/EspecialistasList";
import '../styles/Especialistas.css'
import FooterWave from "../components/FooterWave";

const Especialistas = () => { 
    return (
        <>
        <div className="container">
            <h2 className="especialista-titulo text-center">Nuestros Especialistas</h2>
            <EspecialistasList />
        </div>
        <FooterWave/>


        </>
    );
}

export default Especialistas;