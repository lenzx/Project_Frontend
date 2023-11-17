

// eslint-disable-next-line react/prop-types
import { Link } from 'react-router-dom';
const Especialistas = ({imagen, nombre, descripcion,lugar}) => {
    return (
        <div className=' d-flex justify-content-center borde-especi'>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={imagen} className="img-fluid rounded-start img-especialista"  />
                    </div>
                    <div className="col-md-8 descri-especi">
                        <div className="card-body">
                            <h5 className="card-title">{nombre}</h5>
                            <br/>
                            <p className="card-text">{descripcion}</p>
                            <p className="card-text"><small className="text-muted">Disponibilidad en:</small></p>
                            <p className="card-text"><small className="text-muted">{lugar}</small></p>
                            <div className="btn-especialista">
                            <div className="btn-producto">
                                <Link to="/formulario"><button type="button" className="btn-primary btn-lg">Ver más</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Especialistas;