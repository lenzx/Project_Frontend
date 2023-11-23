import { useEffect, useRef } from "react";
import Servicio from "../components/ServiciosItem.jsx";
import useGetServicios from "../hooks/useGetServicio.jsx";

const ServiciosCaroussel = () => {
  const servicios = useGetServicios();

  return (
      
      <div className="row">
          {servicios.map(servicio => (
              <Servicio
              item = {servicio}
          
              />
          ))}
              
      </div>
      
  );
}

export default ServiciosCaroussel ;
