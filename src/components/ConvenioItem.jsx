import "../styles/ConvenioItem.css";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ConvenioItem = ({ nombreConvenio, descripcionConvenio, imagenConvenio,enlaceConvenio, direccionConvenio }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${imagenConvenio}`
    
    

    return (
        <div className="convenio-card">
            <div className="convenio-card-texto">{nombreConvenio}</div>
            <div className="convenio-card-container">
                <div className="convenio-img-container">
                    <figure className="convenio-img">
                        <img src={imagen} alt="" />
                    </figure>
                </div>
                <div className="convenio-descripcion">
                    {descripcionConvenio}
                </div>
                <div className="convenio-direccion">
                    {direccionConvenio}
                </div>
            </div>
            
            <div className="btn-convenio1">
                <Link to={enlaceConvenio} target="_blank"><button type="button" className="btn-convenios" >ver más</button></Link>
            </div>
        </div>
    );
};    

export default ConvenioItem;