import Especialistas from "../components/EspecialistasItem.jsx"
import marcos from "../assets/Especialistas/doctor.webp"
import especialista from "../assets/Especialistas/especialista.png"
const EspecialistasList = () => {  
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <Especialistas
                    imagen={especialista}
                    nombre={"Ks. Jason Rojo Valenzuela"}
                    descripcion={"Especialista en: Kinesiología en Traumatología, Kinesiología en Fisioterapia, Neurorehabilitación en Adultos, Kinesiología Respiratoria."}
                    lugar={"- Clínica del Mirador"}
                    />
                </div>
            </div>

            <div className="row">
            <div className="col-md-12">
                    <Especialistas
                    imagen={marcos}
                    nombre={"Ana Belén Miranda cuevas"}
                    descripcion={"Especialista en: Terapia Manual Ortopédica, Kinesiología en Fisioterapia."}
                    lugar={"- Farfalla Medica"}
                    />
                </div>
            </div>
        </>
    );
}

export default EspecialistasList ;
