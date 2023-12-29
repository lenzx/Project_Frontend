/* eslint-disable react/prop-types */
import '../styles/Servicio.css'

const PaginaPrincipalItem = ({ seccion }) => {
    const imagen = seccion.imagen !='image/upload/null' ? `https://res.cloudinary.com/dn1gcn5rm/${seccion.imagen}`:null;
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
    if(imagen){
        return (
            <div className="row rowspan-2 card-servicio">
                <div className="col-6">
                    <img src={imagen} alt="" className='main-image'/>
                </div>
                <div className="col-6 pagina-principal-card-text">
                    <p className="card-text pagina-principal-card-text">{seccion.descripcion}</p>
                </div>
        </div>
        );
        
    } else{
        return(
            <>
        <p className="descripcion-item">{seccion.descripcion}
        </p>
        </>
        )
        
        
    }

    
};

export default PaginaPrincipalItem;


