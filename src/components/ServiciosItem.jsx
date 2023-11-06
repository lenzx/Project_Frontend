


const Servicio = ({servicio1, servicio2,descripcion1,descripcion2}) => {
    return (
        <div className=' d-flex justify-content-center'>
            <div className="card mb-3 card-servicio1" style={{ maxWidth: '540px' }}>
            <div className="card-header">Servicios</div>
            <div className="card-body">
                <h5 className="card-title">{servicio1}</h5>
                <p className="card-text">{descripcion1}</p>
            </div>
            </div>
            <div className="card  mb-3 card-servicio2" style={{ maxWidth: '540px' }}>
            <div className="card-header">Servicios</div>
            <div className="card-body">
                <h5 className="card-title">{servicio2}</h5>
                <p className="card-text">{descripcion2}</p>
            </div>
            </div>
        </div>
    );
};

export default Servicio;
