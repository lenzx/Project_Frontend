import Convenio from "../components/ConvenioItem.jsx"
import delmirador from "../assets/delmirador.png"
import "../styles/ConvenioList.css";
import farfalla from "../assets/farfalla.webp"
import diagno from "../assets/diagnoSalud.jpg"

const ConvenioList = () => {  
    return (
        <div className="conveniolist-contenedor">
            <Convenio
            nombreConvenio = {"Clinica del Mirador"}
            descripcionConvenio = {"Quisque faucibus libero vehicula orci sollicitudin, eu bibendum erat vestibulum. Aliquam erat volutpat. Mauris volutpat, libero sed pharetra ullamcorper, leo nisi imperdiet nisi, nec dictum justo metus a dolor. Aliquam faucibus convallis auctor. Fusce massa risus, condimentum vitae congue et, sollicitudin suscipit diam. Ut maximus malesuada erat vitae ornare. Ut vel ornare velit. Etiam ac orci consequat, semper diam vel, varius neque. Pellentesque a fermentum odio, quis laoreet nisi."} 
            imagenConvenio={delmirador}
            />
            <Convenio
            nombreConvenio = {"Farfalla Medica"}
            descripcionConvenio = {"Quisque faucibus libero vehicula orci sollicitudin, eu bibendum erat vestibulum. Aliquam erat volutpat. Mauris volutpat, libero sed pharetra ullamcorper, leo nisi imperdiet nisi, nec dictum justo metus a dolor. Aliquam faucibus convallis auctor. Fusce massa risus, condimentum vitae congue et, sollicitudin suscipit diam. Ut maximus malesuada erat vitae ornare. Ut vel ornare velit. Etiam ac orci consequat, semper diam vel, varius neque. Pellentesque a fermentum odio, quis laoreet nisi."} 
            imagenConvenio={farfalla}
            />
            <Convenio
            nombreConvenio = {"Clinica del Mirador"}
            descripcionConvenio = {"Quisque faucibus libero vehicula orci sollicitudin, eu bibendum erat vestibulum. Aliquam erat volutpat. Mauris volutpat, libero sed pharetra ullamcorper, leo nisi imperdiet nisi, nec dictum justo metus a dolor. Aliquam faucibus convallis auctor. Fusce massa risus, condimentum vitae congue et, sollicitudin suscipit diam. Ut maximus malesuada erat vitae ornare. Ut vel ornare velit. Etiam ac orci consequat, semper diam vel, varius neque. Pellentesque a fermentum odio, quis laoreet nisi."} 
            imagenConvenio={diagno}
            />
            <Convenio
            nombreConvenio = {"Clinica del Mirador"}
            descripcionConvenio = {"Quisque faucibus libero vehicula orci sollicitudin, eu bibendum erat vestibulum. Aliquam erat volutpat. Mauris volutpat, libero sed pharetra ullamcorper, leo nisi imperdiet nisi, nec dictum justo metus a dolor. Aliquam faucibus convallis auctor. Fusce massa risus, condimentum vitae congue et, sollicitudin suscipit diam. Ut maximus malesuada erat vitae ornare. Ut vel ornare velit. Etiam ac orci consequat, semper diam vel, varius neque. Pellentesque a fermentum odio, quis laoreet nisi."} 
            imagenConvenio={delmirador}
            />
        </div>
    );
}

export default ConvenioList;