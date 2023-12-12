import Convenio from "../components/ConvenioItem.jsx"
import "../styles/ConvenioList.css";
import useGetConvenios from "../hooks/useGetConvenios.jsx";

const ConvenioList = () => {
    const convenios = useGetConvenios();


    return (
        <div className="convenio-list-contenedor">
            {convenios.map(convenio => (
                <Convenio
                nombreConvenio={convenio.nombre}
                descripcionConvenio={convenio.descripcion}
                imagenConvenio={convenio.imagen}
                enlaceConvenio={convenio.enlace}
                key={convenio.id}
                />
            ))}
        </div>
    );
}

export default ConvenioList;