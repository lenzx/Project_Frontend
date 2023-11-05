import "../styles/ConvenioItem.css";
// eslint-disable-next-line react/prop-types
const ConvenioItem = ({nombreConvenio, descripcionConvenio, imagenConvenio }) => {
    return (
        <div className="convenio-card">
            <div className="convenio-card-texto">{nombreConvenio}</div>
            <div className="convenio-card-container">
                <div className="convenio-img-container">
                    <figure className="convenio-img">
                        <img src={imagenConvenio} alt="" />
                    </figure>
                </div>
                <div className="convenio-descripcion">
                    {descripcionConvenio}
                </div>
            </div>
        </div>
    );
};    

export default ConvenioItem;