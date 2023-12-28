/* eslint-disable react/prop-types */
import '../styles/Servicio.css'
const Servicio = ({item}) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${item.imagen}`

    return (
        <div className="row rowspan-2 card-servicio">
            <div className="col-6">
                <img src={imagen} alt="" />
            </div>
            <div className="col-6">
                <h5 className="card-title">{item.nombre}</h5>
                <p className="card-text">{item.descripcion}</p>
            </div>
    </div>
    );
};

export default Servicio;
