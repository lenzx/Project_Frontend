import { useEffect, useRef } from "react";
import Servicio from "../components/ServiciosItem.jsx";


const ServiciosCaroussel = ({tipo="Servicio",imagen=""}) => {  

  let idcarrusel = "#"+tipo

    return (<>
    <h1 className="servicio-title">{tipo}</h1>
<div id={tipo} className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
                <Servicio
                    servicio={"Rehabilitación Traumatológica"}
                    descripcion={"La rehabilitación traumatológica es un enfoque médico que ayuda a las personas con lesiones ortopédicas a recuperar su movilidad, reducir el dolor y restaurar la función a través de terapias y ejercicios personalizados."}
                    activo={true}
                    imagen={imagen}
                />
    <Servicio
                    servicio={"Rehabilitación cardiaca"}
                    descripcion={"La rehabilitación traumatológica es un enfoque médico que ayuda a las personas con lesiones ortopédicas a recuperar su movilidad, reducir el dolor y restaurar la función a través de terapias y ejercicios personalizados."}
                    imagen={imagen}
                
                />
    <Servicio
                    servicio={"Rehabilitación Traumatológica"}
                    descripcion={"La rehabilitación traumatológica es un enfoque médico que ayuda a las personas con lesiones ortopédicas a recuperar su movilidad, reducir el dolor y restaurar la función a través de terapias y ejercicios personalizados."}
                    imagen={imagen}
                />
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target={idcarrusel} data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target={idcarrusel} data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

</>);
}

export default ServiciosCaroussel ;
