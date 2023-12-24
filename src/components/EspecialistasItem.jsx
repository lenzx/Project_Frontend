/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
const Especialistas = ({especialista}) => {
  const imagen = `https://res.cloudinary.com/dn1gcn5rm/${especialista.imagen}`
    return (
      <div className="row">
        <div className="col-md-12">
          <div className=" d-flex justify-content-center borde-especi">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={imagen}
                  className="img-fluid rounded-start img-especialista"
                />
              </div>
              <div className="col-md-8 descri-especi">
                <div className="card-body">
                  <h5 className="card-title">{especialista.nombre}</h5>
                  <br />
                  <p className="card-text">{especialista.descripcion}</p>
                  <p className="card-text">
                    <small className="text-muted">Disponibilidad en:</small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">Lugares</small>
                  </p>
                  <div className="btn-especialista">
                    <div className="btn-producto">
                    <Link to={`/formularioConsulta/${especialista.id}`}>
                      <button type="button" className="btn-primary btn-lg">
                        Ver más
                      </button>
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default Especialistas;