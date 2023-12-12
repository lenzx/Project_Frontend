/* eslint-disable react/prop-types */
import CatalogoItemExpanded from "../components/CatalogoItemExpanded.jsx";
import { useState } from "react";


const Producto = ({ item }) => {
    const [mostrarItemExpanded, setMostrarItemExpanded] = useState(false);

    const handleClick = () => {
        setMostrarItemExpanded(!mostrarItemExpanded);
    };

    return (
        <div className={"col-6" + (mostrarItemExpanded ? 'col-12' : '')}>

            <div className="card mb-3 catalogo-card">

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

