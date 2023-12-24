
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import icon from '../assets/logomarkay.png';
import "../styles/LayoutMenu.css";

const LayoutMenu = ({children}) => {
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
                        Panel de Administracion
                    </h1>
                </div>
                <div className='menu-administracion-layout-right'>
                    <a href="/logout">
                        <Button variant="danger">Cerrar Sesión</Button>
                    </a>
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