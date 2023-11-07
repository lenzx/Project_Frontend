

import '../styles/Servicio.css'
const Servicio = ({servicio,descripcion}) => {
    return (
        <div className="card-servicio">
                <div className="">
                    <div className="" style={{ maxWidth: '540px' }}></div>
                    <h5 className="card-title">{servicio}</h5>
                    <p className="card-text">{descripcion}</p>
                </div>
        </div>
      
    );
};

export default Servicio;
