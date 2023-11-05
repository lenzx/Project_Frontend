import Especialistas from "../components/EspecialistasItem.jsx"
import marcos from "../assets/Especialistas/doctor.webp"

const EspecialistasList = () => {  
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <Especialistas
                    imagen={marcos}
                    nombre={"Marcos Diaz"}
                    descripcion={"Las especialidades del kinesiólogo se desempeña en el área de traumatología"}
                    lugar={"- Centro Médico Diagnosalud"}
                    />
                </div>
            </div>

            <div className="row">
            <div className="col-md-12">
                    <Especialistas
                    imagen={marcos}
                    nombre={"Kelly Rivera"}
                    descripcion={"Las especialidades del kinesiólogo se desempeña en el área de neurologia"}
                    lugar={"- Centro Médico Moneda"}
                    />
                </div>
            </div>
        </>
    );
}

export default EspecialistasList ;
