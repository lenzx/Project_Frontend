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
import Seccion from '../containers/PanelSeccionList.jsx';
import Markay from '../containers/PanelMarkayList.jsx';
import CategoriaConvenio from '../containers/PanelCategoriaConvenioList.jsx';
import FormularioEspecialista from '../pages/FormularioEspecialista.jsx';
import FormularioConvenio from '../pages/FormularioConvenio.jsx';
import FormularioServicio from '../pages/FormularioServicios.jsx';
import FormularioProducto from '../pages/FormularioProducto.jsx';
import FormularioRedSocial from '../pages/FormularioRedSocial.jsx';
import FormularioEspecialidad from '../pages/FormularioEspecialidad.jsx';
import FormularioCategoriaCatalogo from '../pages/FormularioCategoriaProducto.jsx';
import FormularioSeccion from '../pages/FormularioSeccion.jsx';
import FormularioCategoriaConvenio from '../pages/FormularioCategoriaConvenio.jsx';
import FormularioMarkay from './FormularioMarkay.jsx';
// import Scroll from '../animation/scroll.js';
import '../styles/MenuAdmin.css';

const MenuAdmin = () => {
    const [selectedComponent, setSelectedComponent] = useState('Citas');
    const [selectedForm, setSelectedForm] = useState('');
    const [object, setObject] = useState(null);

    // const scroll = Scroll();

    const formMap = {
        'Convenios': <FormularioConvenio object={object} setSelectedForm = {setSelectedForm} />,  // <FormularioConvenio object={object} setSelectComponen("Convenios"), setSelectForm (null)/>
        'Citas': <FormularioEspecialista object={object} />, // <FormularioEspecialista object={object} setSelectComponen("Citas"), setSelectForm (null), setSelectObject(n)/>  
        'Servicios': <FormularioServicio object={object} setSelectedForm = {setSelectedForm}/>,
        'Productos': <FormularioProducto object={object} setSelectedForm = {setSelectedForm} />,
        'Especialistas': <FormularioEspecialista object={object} setSelectedForm = {setSelectedForm}/>,
        'Especialidades': <FormularioEspecialidad object={object} setSelectedForm = {setSelectedForm} />,
        'Redes Sociales': <FormularioRedSocial object={object} setSelectedForm = {setSelectedForm}/>,
        'CategoriasCatalogo': <FormularioCategoriaCatalogo object={object} setSelectedForm = {setSelectedForm}/>,
        'Seccion': <FormularioSeccion object={object} />,
        'CategoriasConvenio': <FormularioCategoriaConvenio object={object} setSelectedForm = {setSelectedForm} />,
        'PaginaPrincipal': <FormularioMarkay object={object} setSelectedForm = {setSelectedForm}/>,
        // 'ReturnConvenios':<Convenios object ={null}/>,
        
    };

    const renderComponent = () => {
        if (selectedForm) {
            return formMap[selectedForm];
        }
        switch(selectedComponent) {
            case 'Convenios':
                return <Convenios setSelectedForm={setSelectedForm} setSelectedObject = {setObject}/>;
            case 'Citas':
                return <Consultas setSelectedForm={setSelectedForm} setSelectedObject = {setObject}/>;
            case 'Servicios':
                return <Servicios setSelectedForm={setSelectedForm} setSelectedObject = {setObject}/>;
            case 'Productos':
                return <Producto setSelectedForm={setSelectedForm} setSelectedObject = {setObject}/>;
            case 'Especialistas':
                return <Especialistas setSelectedForm={setSelectedForm} setSelectedObject = {setObject}/>;
            case 'Especialidades':
                return <Especialidad setSelectedForm={setSelectedForm} setSelectedObject = {setObject}/>;
            case 'Redes Sociales':
                return <RedSocial setSelectedForm={setSelectedForm} setSelectedObject = {setObject}/>;
            case 'CategoriasCatalogo':
                return <CategoriaCatalogo setSelectedForm={setSelectedForm} setSelectedObject = {setObject}/>;
            case 'Seccion':
                return <Seccion setSelectedForm={setSelectedForm} setSelectedObject = {setObject}/>;
            case 'CategoriasConvenio':
                return <CategoriaConvenio setSelectedForm={setSelectedForm} setSelectedObject = {setObject}/>;
            case 'PaginaPrincipal':
                return <Markay setSelectedForm={setSelectedForm} setSelectedObject = {setObject}/>;
            default:
                return <Consultas setSelectedForm={setSelectedForm} setSelectedObject = {setObject}/>;
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