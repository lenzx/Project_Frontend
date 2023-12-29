


/* eslint-disable react/prop-types */
import useGetConvenios from "../hooks/useGetConvenios.jsx"
import DescripcionItem from "../components/DescripcionItem.jsx"
import { Link } from 'react-router-dom';

const Especialistas = ({ especialista }) => {
  const imagen = `https://res.cloudinary.com/dn1gcn5rm/${especialista.imagen}`;
  
  const conveniosIds = especialista.convenio || []; 
  const conveniosObjetos = conveniosIds.map(id => useGetConvenios({ id }));

  if (conveniosIds.length === 0) {
    return (
      <div className="row">
          <div className=" d-flex justify-content-center borde-especi">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={imagen}className="img-fluid rounded-start img-especialista" />
              </div>
              <div className="col-md-8 descri-especi">
                <div className="card-body">
                  <h5 className="card-title">{especialista.nombre}</h5>
                  <br />
                  
                  <p className="text-center">
                    No tiene convenios
                  </p>
                  
                  <div className="btn-especialista btn-producto">
                  <Link to={`/formularioConsulta/${especialista.id}`}>
                    <button type="button" className="btn-primary btn-lg">
                    Solicitar atención
                    </button>
                  </Link>
                </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }

  return (
    <div className="row">
      <div className="d-flex justify-content-center borde-especi">
        <div className="row g-0"></div>
          <div className="col-md-4">
            <img src={imagen} className="img-fluid rounded-start img-especialista" />
          </div>
          <div className="col-md-8 descri-especi">
            <div className="card-body">
              <h5 className="card-title">{especialista.nombre}</h5>
              <br />
              <p className="card-text">{especialista.descripcion}</p>
              <p className="card-text">
                <small className="text-muted">Disponibilidad en:</small>
              </p >
              <p className="card-text">
              {conveniosObjetos.map((convenioObjeto, index) => (
                <DescripcionItem
                  key={index}
                  contenido={convenioObjeto.nombre}
                />
              ))}
              </p>
              
              <div className="btn-especialista btn-producto">
                  <Link to={`/formularioConsulta/${especialista.id}`}>
                    <button type="button" className="btn-primary btn-lg">
                    Solicitar atención
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default Especialistas;
