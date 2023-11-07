import React from "react";
import bota from "../assets/Productos/bota ortop.jpg";
import whatsapp from "../assets/WhatsApp.svg.webp";
import qr from "../assets/QRplaceholder.jpeg";
import { Link } from "react-router-dom";

const ProductoExpanded = ({imagen,imagenWhatsapp,imagenCodigoQr,nombre,precio,descripcion,telefono,}) => {
    return (
        <>
        <div className="container">
        <div className="container expanded bg-expanded">
            <div className="row display-item-expanded">
                <div className="col-md-4">
                    <img src={imagen} className="img-fluid rounded-start img-expanded" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body catalogo-title content-expanded">

                        <div className="row col-md-12">
                                    <h5 className="card-title text-center text-product-title">{nombre}</h5>
                        </div><br/>
                        
                        <div className="row col-md-12">
                            <p className="card-text text-center text-product-price">Valor: ${precio}</p>
                        </div> <br/>

                        <div className="row col-md-12">
                            <p className="card-text">{descripcion}</p>
                        </div><br/><br/>


                        <div className="row">
                            <div className="col-md-4">
                                <img src={imagenWhatsapp} className="img-fluid rounded-start contacto-icon" alt="..." />
                            </div>
                            <div className="col-md-2">
                                <br/>
                                <Link to="https://api.whatsapp.com/send?phone=56982954572" className="footer-content card-text card-telefono" target="_blank"><p>+56982954572</p></Link>
                                
                            </div>
                            <div className="col-md-6">
                                <img src={imagenCodigoQr} className="img-fluid rounded-start contacto-icon" alt="..." />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
        <br />
        <Link to="/catalogo"><button type="button" className="btn-primary btn-lg btn-volver">Volver</button></Link>
        </div>
            </>
    );
};

ProductoExpanded.defaultProps = {
    imagen: bota,
    imagenWhatsapp: whatsapp,
    imagenCodigoQr: qr,
    nombre: "Rodillera ortopédica",
    precio: "2000",
    descripcion: "Una bota ortopédica es un dispositivo médico que se utiliza para inmovilizar o proporcionar apoyo a una extremidad inferior lesionada, especialmente el tobillo y el pie. Está diseñada para estabilizar la articulación y reducir la tensión en músculos y ligamentos dañados, siendo comúnmente utilizada en el tratamiento de fracturas, esguinces graves y después de cirugías ortopédicas en esta área. Ayuda en la recuperación al permitir que el paciente camine con apoyo adecuado mientras la lesión se cura.",
    telefono: "+56982954572",
};

export default ProductoExpanded;
