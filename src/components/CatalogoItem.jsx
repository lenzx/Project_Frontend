import React, { useState } from 'react';
import { Link } from "react-router-dom";
import CatalogoItemExpanded from "../components/CatalogoItemExpanded.jsx";

// eslint-disable-next-line react/prop-types
const Producto = ({ item }) => {
    const [mostrarItemExpanded, setMostrarItemExpanded] = useState(false);

    const handleClick = () => {
        setMostrarItemExpanded(!mostrarItemExpanded);
    };

    return (
        <div >
            <div className={`card mb-3 catalogo-card ${mostrarItemExpanded ? 'expanded' : ''}`} style={{ maxWidth: '1040px' }}>
                <div className="row g-0">
                    <div className="col-md-4 catalogo-product">
                        <img src={item.imagen} className="img-fluid rounded-start img-catalogo" alt="..." />
                        <p className="card-text text-center text-valor"><small>Valor: ${item.valor}</small></p>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body catalogo-title">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">{item.descripcion_corta}</p>
                            {mostrarItemExpanded && <CatalogoItemExpanded item={item} />}
                            <div className="btn-producto">
                                <button
                                    type="button"
                                    className="btn-primary btn-lg"
                                    onClick={handleClick}
                                >
                                    Ver más
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Producto;

