/* eslint-disable react/prop-types */

const SeccionItem = ({ seccion }) => {
    if (!seccion) {
        return <div>...</div>;
    }

    return (
        <div>
            <h2 className="convenio-titulo text-center">{seccion.titulo}</h2>
            <h3 className="text-description">{seccion.descripcion}</h3>
        </div>
    );
};

export default SeccionItem;
