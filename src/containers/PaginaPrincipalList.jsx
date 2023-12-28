/* eslint-disable react/prop-types */
import useGetMarkay from "../hooks/useGetMarkay.jsx"
import PaginaPrincipalItem from "../components/PaginaPrincipalItem.jsx"
import "../styles/SeccionItem.css"


const SeccionList = () => {
    const secciones = useGetMarkay();

  return (
      
      <div className="row">
          {secciones.map(seccion => (
              <PaginaPrincipalItem
              seccion={seccion}
              key = {seccion.id}
              />
          ))}
              
      </div>
      
  );
};

export default SeccionList;