import ConsultaItem from '../components/PanelConsultaItem.jsx';
import useGetConsultas from '../hooks/useGetConsultas.jsx';
import "../styles/PanelConvenioList.css";

const PanelConsultaList = () => {
    const consultas = useGetConsultas();

    return (
        <div className="panel-convenio-list-container">
            
            {consultas.map(consulta => (
                <ConsultaItem 
                key={consulta.id} 
                consulta={consulta}
                />
            ))}
        </div>
    );
}

export default PanelConsultaList;