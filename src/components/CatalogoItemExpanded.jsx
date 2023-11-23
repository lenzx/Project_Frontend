import React from "react";
import whatsapp from "../assets/WhatsApp.svg.webp";
import qr from "../assets/QRplaceholder.jpeg";
import { Link } from "react-router-dom";


const CatalogoItemExpanded = ({item}) => {
    return (
        <>
        
                <div className="col-md-4">
                    <img src={item.imagen} className="img-fluid rounded-start img-expanded" alt="..." />
                </div>
                <div className="col-md-8">

                        <div className="row">
                            <p className="card-text">{item.descripcion_larga}</p>
                        </div>

                        <div className="row">
                            <div className="col-4 ">
                                <img src={whatsapp} className="img-fluid rounded-start icon-social" alt="..." />
                            </div>
                            <div className="col-8 text-number">
                                <Link to="https://api.whatsapp.com/send?phone=56982954572" className="footer-content card-text card-telefono" target="_blank"><p>+56982954572</p></Link>
                            </div>
                            

                        </div>

                                
                    </div>


            </>
    );
};

export default CatalogoItemExpanded;
