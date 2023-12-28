import EspecialistasList from "../containers/EspecialistasList";
import '../styles/Especialistas.css'
import FooterWave from '../containers/FooterWave';
import SeccionList from "../containers/SeccionList.jsx"

const Especialistas = () => { 
    return (
        <>
        <div className="container">
            <SeccionList idSeccion={2} />
            <EspecialistasList />
        </div>
        <FooterWave/>


        </>
    );
}

export default Especialistas;