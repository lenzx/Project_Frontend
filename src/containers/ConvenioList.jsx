import Convenio from "../components/ConvenioItem.jsx"
import delmirador from "../assets/delmirador.png"
import "../styles/ConvenioList.css";
import farfalla from "../assets/farfalla.webp"
import diagno from "../assets/diagnoSalud.jpg"

const ConvenioList = () => {
    return (
        <div className="convenio-list-contenedor">
            <Convenio
            nombreConvenio={"Clínica del Mirador"}
            descripcionConvenio={"El centro médico y de diagnóstico más moderno. Entregamos al paciente un amplio servicio de imágenes, confiables, oportunos y de excelencia. Disponemos de un sistema RIS (Radiology Information System) que permite el uso de telemedicina, la transmisión de imágenes, la conexión de toda nuestra red y nos permite entregar los resultados de manera digital y web en calidad diagnóstica. Además, contamos con consultas médicas con los mejores especialistas de la región y en el mejor ambiente. Tu comodidad es nuestra motivación."}
            imagenConvenio={delmirador}
            linkConvenio={"https://api.delmirador.ziz.cl/widget/agenda/reserva"}
            />
            <Convenio
            nombreConvenio={"Farfalla Médica"}
            descripcionConvenio={"Ocupándonos de la carencia médica en nuestra ciudad, nos preocupamos por tener a su alcance excelentes médicos y especialistas para brindarles a nuestros pacientes una atención cercana y oportuna para atender sus necesidades."}
            imagenConvenio={farfalla}
            linkConvenio={"https://agendamiento.reservo.cl/makereserva/agenda/80g31pG010sB6g9n1P64DNx3O6a4Rt"}
            />
            <Convenio
            nombreConvenio={"Diagno Salud"}
            descripcionConvenio={"Profesionalismo, calidez de sus médicos y personal de servicio, vanguardia tecnológica y enfoque constante en el bienestar de sus pacientes son acciones que nos convierten en un centro de especialidades médicas, imagenología y laboratorio clínico único en su tipo, presente en Antofagasta, Calama, Ovalle, Quilpué y Coquimbo."}
            imagenConvenio={diagno}
            linkConvenio={"https://www.diagno.cl/agenda-tu-hora"}
            />
        </div>
    );
  }
  
  export default ConvenioList;