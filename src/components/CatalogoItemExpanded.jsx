/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import useGetRedSocial from "../hooks/useGetRedSocial";


const CatalogoItemExpanded = ({item}) => {
    const whatsapp = useGetRedSocial({id:4})
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${whatsapp.imagen}`

    return (
        <>
        
                
                <div className="col-md-8">
                        
                        <div className="row ">
                            <p className="card-text text-descripcion">{item.descripcion}</p>
                        </div>

                        <div className="row center-row">
                            <div className="col-md-4 footer-content text-center-descripcion">
                                <img src={imagen} alt="whatsapp" className="icon-social-producto"/>
                                <Link to={whatsapp.enlace} className="footer-content  card-telefono" target="_blank"><p className="text-number">{whatsapp.texto}</p></Link>
                            </div>
                            
                            

                        </div>

                                
                    </div>


            </>
    );
};

export default CatalogoItemExpanded;
