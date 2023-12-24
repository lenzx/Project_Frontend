import { useState } from 'react';
import MenuNavService from "../components/MenuNavLeft";
import Convenios from "../containers/PanelConvenioList";
import '../styles/MenuAdmin.css';
import Especialistas from '../containers/EspecialistasList';

const MenuAdmin = () => {
    const [selectedComponent, setSelectedComponent] = useState('');

    const renderComponent = () => {
        switch(selectedComponent) {
            case 'Convenios':
                return <Convenios/>;
            case 'Citas':
                return <Convenios/>;
            case 'Servicio':
                return <Convenios/>;
            case 'Productos':
                return <Convenios/>;
            case 'Especialistas':
                return <Especialistas/>;
            case 'Especialidades':
                return <Convenios/>;
            case 'Redes Sociales':
                return <Convenios/>;
            case 'CategoriasCatalogo':
                return <Convenios/>;
            default:
                return <Convenios/>;
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