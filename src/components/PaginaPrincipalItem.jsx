/* eslint-disable react/prop-types */
import '../styles/Servicio.css'

const PaginaPrincipalItem = ({ seccion }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${seccion.imagen}`

    if (!seccion) {
        return <div>...</div>;
    }
    if(seccion.id == 1){
        return(
            <>
        <p className="descripcion-item">{seccion.descripcion}
        </p>
        </>
        )
    }

    return (
        <div className="row rowspan-2 card-servicio">
            <div className="col-6">
                <img src={imagen} alt="" />
            </div>
            <div className="col-6">
                <p className="card-text">{seccion.descripcion}</p>
            </div>
    </div>
    );
};

export default PaginaPrincipalItem;


