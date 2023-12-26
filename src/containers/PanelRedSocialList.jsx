import RedSocialItem from "../components/PanelRedSocialItem";
import iconAgregar from '../assets/icon/boton-agregar.png';
import useGetRedSocial from "../hooks/useGetRedSocial";
import { Link } from 'react-router-dom';
import "../styles/PanelRedSocialList.css";
const PanelRedSocialList = () => {
    const redSociales = useGetRedSocial();

    return (
        <div className="panel-redSocial-list-container">
            <div className="borde-boton-redSocial">
                <Link to="/MenuAdministrador/formularioRedSocial">
                <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </Link>
            </div>
            {redSociales.map(redSocial => (
                <RedSocialItem
                key={redSocial.id}
                redSocial = {redSocial}
                />
            ))}

        </div>
    );
}

export default PanelRedSocialList;