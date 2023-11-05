const Producto = ({ imagen , nombre,precio,descripcion,enlace}) => {
    return (
        <div>
            <div className="card mb-3 catalogo-card" style={{ maxWidth: '540px' }}>
                <div className="row g-0">
                    <div className="col-md-4 catalogo-product">
                        <img src={imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body catalogo-title">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text">{descripcion}</p>
                            <p className="card-text"><small className="text-muted">{precio}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Producto;
