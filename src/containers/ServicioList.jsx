import Servicio from "../components/ServiciosItem.jsx"


const ServiciosList = () => {  
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <Servicio
                    servicio1={"Rehabilitacón Traumatológica"}
                    servicio2={"Rehabilitacón Neurológica"}
                    descripcion1={"La rehabilitación traumatológica es un enfoque médico que ayuda a las personas con lesiones ortopédicas a recuperar su movilidad, reducir el dolor y restaurar la función a través de terapias y ejercicios personalizados."}
                    descripcion2={"La rehabilitación neurológica se enfoca en ayudar a personas con lesiones o afecciones del sistema nervioso a mejorar su función y calidad de vida a través de terapias, ejercicios y técnicas especializadas."}
                    />
                </div>
            </div>

            <div className="row">
            <div className="col-md-12">
                    <Servicio
                    servicio1={"Confección de órtesis y prótesis"}
                    servicio2={"Quiropraxia"}
                    descripcion1={"La confección de órtesis y prótesis implica la creación de dispositivos personalizados para ayudar a personas con discapacidades físicas, proporcionando soporte, corrección o reemplazo de extremidades. Estos dispositivos se adaptan a las necesidades individuales de los pacientes para mejorar su movilidad y calidad de vida."}
                    descripcion2={"La quiropraxia es un enfoque de atención médica que se centra en ajustes manuales para tratar problemas musculoesqueléticos, especialmente en la columna vertebral. Busca aliviar el dolor, mejorar la función y promover la salud mediante la corrección de desalineaciones en el cuerpo, basándose en la importancia de un sistema nervioso saludable."}
                    
                    />
                </div>
            </div>
        </>
    );
}

export default ServiciosList;