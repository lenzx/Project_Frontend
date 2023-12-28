import PropTypes from 'prop-types';
import RedSocialItem from "../components/PanelRedSocialItem";
import iconAgregar from '../assets/icon/boton-agregar.png';
import useGetRedSocial from "../hooks/useGetRedSocial";

import "../styles/PanelRedSocialList.css";
import "../styles/BtnAdd.css";
const PanelRedSocialList = ({setSelectedForm, setSelectedObject}) => {
    
    const redSociales = useGetRedSocial({});

    const handleClick = () => {
        setSelectedObject(null);
        setSelectedForm('Redes Sociales');
    }
    return (
        <div className="panel-redSocial-list-container">
            <div className="borde-boton-redSocial">
                <button onClick={handleClick} className="btn-add">
                <img src={iconAgregar} className='imagen-boton-agregar-container'/>
                </button>
            </div>
            {redSociales.map(redSocial => (
                <RedSocialItem
                key={redSocial.id}
                redSocial = {redSocial}
                setSelectedForm={setSelectedForm}
                setSelectedObject={setSelectedObject}
                />
            ))}

        </div>
    );
}

PanelRedSocialList.propTypes = {
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired
}
export default PanelRedSocialList;