import EspecialistaItem from '../components/PanelEspecialistaItem.jsx';
import useGetEspecialista from '../hooks/useGetEspecialista.jsx';
import "../styles/PanelEspecialistaList.css";

const PanelEspecialistaList = () => {
    const especialistas = useGetEspecialista();

    return (
        <div className="panel-especialista-list-container">
            {especialistas.map(especialista => (
                <EspecialistaItem 
                key={especialista.id} 
                especialista={especialista}
                />
            ))}
        </div>
    );
}

export default PanelEspecialistaList;