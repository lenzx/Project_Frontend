import EspecialistasList from "../containers/EspecialistasList";
import '../styles/Especialistas.css'

const Especialistas = () => { 
    return (
        
        <div className="container">
            <br />
            <h2 className="especialista-titulo">Nuestros Especialistas</h2>
            <EspecialistasList/>
        </div>
    );
}

export default Especialistas;