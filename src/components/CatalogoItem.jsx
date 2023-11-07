import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Producto = ({ imagen , nombre,precio,descripcion}) => {
    
    return (
        <div>
            <div className="card mb-3 catalogo-card" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4 catalogo-product">
                        <img src={imagen} className="img-fluid rounded-start img-catalogo" alt="..." />
                        <p className="card-text text-center text-valor"><small>Valor: ${precio}</small></p>
                    
                    </div>
                    <div className="col-md-8">
                        <div className="card-body catalogo-title">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">{descripcion}</p>
                            <div className="btn-producto">
                                <Link to="/expanded"><button type="button" className="btn-primary btn-lg">Ver más</button></Link>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Producto;
