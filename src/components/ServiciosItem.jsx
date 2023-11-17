import '../styles/Servicio.css'

// eslint-disable-next-line react/prop-types
const Servicio = ({servicio,descripcion,activo=false,imagen}) => {
    let clase=""
    if (activo){
        clase = "carousel-item active"
    }
    else{
        clase = "carousel-item"
    }


    return (
    <div className={clase}>
        <div className="row rowspan-2">
            <div className="col-6">
                <img src={imagen} alt="" />
            </div>
            <div className="col-6">
                <h5 className="card-title">{servicio}</h5>
                <p className="card-text">{descripcion}</p>
            </div>
            


        </div>

    </div>
      
    );
};

export default Servicio;
