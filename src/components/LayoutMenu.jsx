import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import icon from '../assets/logomarkay.png';
import "../styles/LayoutMenu.css";
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LayoutMenu = ({children}) => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = (event) => {
        event.preventDefault();
        logout();
        navigate('/');
    };

    return (
        <div>
            <div className='menu-administracion-layout'>
                <div className='menu-administracion-layout-left'>
                    <figure className='menu-administracion-layout-icon'>
                        <img src={icon} alt="" />
                    </figure>
                </div>
                <div className='menu-administracion-layout-mid'>
                    <h1>
                        Panel de administración
                    </h1>
                </div>
                <div className='menu-administracion-layout-right'>
                    
                        <Button onClick={handleLogout} variant="danger" className='cerrar-sesion'>Cerrar sesión</Button>
                    
                </div>
            </div>
            {children}
        </div>
    )
} 

LayoutMenu.propTypes = {
    children: PropTypes.node.isRequired
};

export default LayoutMenu;