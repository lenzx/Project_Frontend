import { useState } from 'react';
import MenuNavService from "../components/MenuNavLeft";
import Convenios from "../containers/PanelConvenioList";
import Especialistas from "../containers/PanelEspecialistaList";
import Especialidad from "../containers/PanelEspecialidadList";
import Producto from "../containers/PanelProducto";
import RedSocial from "../containers/PanelRedSocialList";
import Consultas from "../containers/PanelConsultaList.jsx";
import Servicios from "../containers/PanelServicioList.jsx";
import CategoriaCatalogo from '../containers/PanelCategoriaCatalogoList.jsx';
import '../styles/MenuAdmin.css';

const MenuAdmin = () => {
    const [selectedComponent, setSelectedComponent] = useState('Citas');

    const renderComponent = () => {
        switch(selectedComponent) {
            case 'Convenios':
                return <Convenios/>;
            case 'Citas':
                return <Consultas/>;
            case 'Servicios':
                return <Servicios/>;
            case 'Productos':
                return <Producto/>;
            case 'Especialistas':
                return <Especialistas/>;
            case 'Especialidades':
                return <Especialidad/>;
            case 'Redes Sociales':
                return <RedSocial/>;
            case 'CategoriasCatalogo':
                return <CategoriaCatalogo/>;
            default:
                return <Consultas/>;
        }
    }

    return (
        <div className="menu-admninistrador-container">
            <div className="menu-admninistrador-container-left">
                <MenuNavService setSelectedComponent={setSelectedComponent}/>
            </div>
            <div className="menu-admninistrador-container-right">
                {renderComponent()}
            </div>
        </div>
    );
}

export default MenuAdmin;