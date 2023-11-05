

//eslint-disable-next-line react/prop-types
const ProductoExpanded = ({ imagen ,imagenWhatsapp,imagenCodigoQr, nombre,precio,descripcion, telefono}) => {
    
    return (
        <div className="expanded">
                <div className="row g-0">
                    <div className="col-md-4 catalogo-product">
                        <img src={imagen} className="img-fluid rounded-start img-expanded" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body catalogo-title">
                            <h5 className="card-title">{nombre}</h5>
                            <p className="card-text text-center"><small>Valor: ${precio}</small></p>
                            <p className="card-text">{descripcion}</p>
                            <img src={imagenWhatsapp} className="img-fluid rounded-start contacto-icon" alt="..." />
                            <img src={imagenCodigoQr} className="img-fluid rounded-start contacto-icon" alt="..." />
                            <p className="card-text">{telefono}</p>

                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default ProductoExpanded;
