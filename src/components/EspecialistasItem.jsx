
import '../styles/Especialistas.css'
const Especialistas = ({imagen, nombre, descripcion,lugar}) => {
    return (
        <div>
            <div className="card mb-3" style={{ maxWidth: '1000px' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">{descripcion}</p>
                            <p className="card-text"><small className="text-muted">Disponibilidad en:</small></p>
                            <p className="card-text"><small className="text-muted">{lugar}</small></p>
                            <button type="button" className="btn btn-primary btn-lg">Agendar Hora</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Especialistas;
