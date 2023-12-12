/* eslint-disable react/prop-types */
import '../styles/Servicio.css'
const Servicio = ({item}) => {
    


    return (
        <div className="row rowspan-2 card-servicio">
            <div className="col-6">
                <img src={item.imagen} alt="" />
            </div>
            <div className="col-6">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
            </div>
    </div>
    );
};

export default Servicio;
