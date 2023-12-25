import { useState } from 'react';
import MenuNavService from "../components/MenuNavLeft";
import Convenios from "../containers/PanelConvenioList";
import '../styles/MenuAdmin.css';


const MenuAdmin = () => {
    const [selectedComponent, setSelectedComponent] = useState('');

    const renderComponent = () => {
        switch(selectedComponent) {
            case 'Convenios':
                return <Convenios/>;
            case 'Citas':
                return <div/>;
            case 'Servicios':
                return <div/>;
            case 'Productos':
                return <div/>;
            case 'Especialistas':
                return <div/>;
            case 'Especialidades':
                return <div/>;
            case 'Redes Sociales':
                return <div/>;
            case 'CategoriasCatalogo':
                return <div/>;
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