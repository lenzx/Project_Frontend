/* eslint-disable react/prop-types */
import useGetSeccion from "../hooks/useGetSeccion.jsx"
import SeccionItem from "../components/SeccionItem.jsx"
import "../styles/SeccionItem.css"


const SeccionList = ({ idSeccion }) => {
    const { seccion } = useGetSeccion({ id: idSeccion });
    return <SeccionItem seccion={seccion} />;
};

export default SeccionList;