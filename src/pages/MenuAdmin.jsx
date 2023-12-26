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
import FormularioEspecialista from '../pages/FormularioEspecialista.jsx';
import FormularioConvenio from '../pages/FormularioConvenio.jsx';
import FormularioServicio from '../pages/FormularioServicios.jsx';
import FormularioProducto from '../pages/FormularioProducto.jsx';
import FormularioRedSocial from '../pages/FormularioRedSocial.jsx';
import FormularioEspecialidad from '../pages/FormularioEspecialidad.jsx';
import FormularioCategoriaCatalogo from '../pages/FormularioCategoriaCatalogo.jsx';
import '../styles/MenuAdmin.css';

const MenuAdmin = () => {
    const [selectedComponent, setSelectedComponent] = useState('Citas');
    const [selectedForm, setSelectedForm] = useState('');
    const [object, setObject] = useState(null);


    const renderComponent = () => {
        if (selectedForm) {
            console.log(object);
            return <FormularioEspecialista object = {object}/>;
        }
        switch(selectedComponent) {
            case 'Convenios':
                return <Convenios />;
            case 'Citas':
                return <Consultas/>;
            case 'Servicios':
                return <Servicios/>;
            case 'Productos':
                return <Producto/>;
            case 'Especialistas':
                return <Especialistas setSelectedForm={setSelectedForm} setSelectedEspecialista = {setObject}/>;
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
                <MenuNavService setSelectedComponent={setSelectedComponent} setSelectedComponent2={setSelectedForm}/>
            </div>
            <div className="menu-admninistrador-container-right">
                {renderComponent()}
            </div>
        </div>
    );
}

export default MenuAdmin;