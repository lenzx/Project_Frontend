import Formulario from "../components/FormularioItem.jsx"

const FormularioList = () => {  
    return (
        <div className="row">
            <div className="col-4"></div>
            <div className="col-4 col-sd-12">
                <Formulario/>
            </div>
            <div className="col-4"></div>

        </div>

    );
}

export default FormularioList;