import ConvenioItem from '../components/PanelConvenioItem.jsx';
import useGetConvenios from '../hooks/useGetConvenios.jsx';
import "../styles/PanelConvenioList.css";

const PanelConvenioList = () => {
    const convenios = useGetConvenios();

    return (
        <div className="panel-convenio-list-container">
            {convenios.map(convenio => (
                <ConvenioItem 
                key={convenio.id} 
                convenio={convenio}
                />
            ))}
            {convenios.map(convenio => (
                <ConvenioItem 
                key={convenio.id} 
                convenio={convenio}
                />
            ))}
        </div>
    );
}

export default PanelConvenioList;