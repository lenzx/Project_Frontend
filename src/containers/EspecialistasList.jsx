import Especialistas from "../components/EspecialistasItem.jsx"
import marcos from "../assets/Especialistas/doctor.webp"
import especialista from "../assets/Especialistas/especialista.png"
import useGetEspecialista from "../hooks/useGetEspecialista.jsx"
const EspecialistasList = () => {  

    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <Especialistas
                    imagen={especialista}
                    nombre={"Patricio Andres Donoso Pinto"}
                    descripcion={"kinesiologo- Representante 3DPRO plantillas ortopédicas- Trainfes- Terapeuta Puncion seca"}
                    lugar={"- Farfalla Medica"}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Especialistas
                    imagen={especialista}
                    nombre={"Ulises Williams Castro Carvajal                    "}
                    descripcion={"Kinesiólogo – Licenciado en kinesiología - Técnica en Punción Seca – Masoterapeuta Deportivo – Trainfes - Especialista en rehabilitación traumatológica y respiratoria"}
                    lugar={"- Clínica del Mirador"}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <Especialistas
                    imagen={especialista}
                    nombre={"Jhonny Cristopher Castillo Parra"}
                    descripcion={"Kinesiólogo – Especialista entrenamiento deportivo – Manejo en Columna Vertebral – Rehabilitación respiratoria"}
                    lugar={"- Diagno salud Calama"}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <Especialistas
                    imagen={especialista}
                    nombre={"Rafael Alejandro Silva Valenzuela"}
                    descripcion={"Doctor en Quiropraxia – Master en técnicas osteopáticas del aparato locomotor – Osteópata de Academía Latinoamericana de Osteopatía"}
                    lugar={"- Farfalla Medica"}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <Especialistas
                    imagen={especialista}
                    nombre={"Jeremy Andres Zambrano Encalada"}
                    descripcion={"kinesiologo- diplomado en neurorrehabilitación- especialista en rehabilitación traumatologica y respiratoria- entrenamiento deportivo"}
                    lugar={"- Torre cobre medical"}
                    />
                </div>
            </div>
            
            

        </>
    );
}

export default EspecialistasList ;
