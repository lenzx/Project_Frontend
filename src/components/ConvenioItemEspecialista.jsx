// eslint-disable-next-line react/prop-types
const ConvenioItemEspecialista = ({ convenios }) => {
    return (
        {convenios.map(convenio=>
        <div>{convenios.nombre}</div>
        )}
    );
};    

export default ConvenioItemEspecialista;