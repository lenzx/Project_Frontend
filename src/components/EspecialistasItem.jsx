
import '../styles/Especialistas.css'

// eslint-disable-next-line react/prop-types
const Especialistas = ({imagen, nombre, descripcion,lugar}) => {
    return (
        <div className=' d-flex justify-content-center'>
            <div className="card mb-3 especialistas-card" style={{ maxWidth: '800px' }}>
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
                            <button type="button" className="btn-primary btn-lg">Solicitar Hora</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Especialistas;
