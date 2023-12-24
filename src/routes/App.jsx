import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../containers/Layout';
import LayoutMenu from '../components/LayoutMenu';
import Convenio from '../pages/Convenios';
import Especialistas from '../pages/Especialistas';
import Catalogo from '../pages/Catalogo';
import Servicio from '../pages/Servicio';
import Login from '../pages/Login';
import Formulario from '../pages/Formulario';
import FormularioServicios from '../pages/FormularioServicios';
import FormularioProducto from '../pages/FormularioProducto';
import FormularioConvenio from '../pages/FormularioConvenio';
import FormularioEspecialista from '../pages/FormularioEspecialista';
import FormularioConsulta from '../pages/FormularioConsulta';
import FormularioCategoriaConvenio from '../pages/FormularioCategoriaConvenio';
import FormularioEspecialidad from '../pages/FormularioEspecialidad';
import FormularioEspecialistaEspecialidad from '../pages/FormularioEspecialistaEspecialidad';
import FormularioEspecialidadServicio from '../pages/FormularioEspecialidadServicio';
import FormularioCategoriaProducto from '../pages/FormularioCategoriaProducto';
import FormularioProductoCategoria from '../pages/FormularioProductoCategoria';
import FormularioEspecialistaConvenio from '../pages/FormularioEspecialistaConvenio';
import FormularioSeccion from '../pages/FormularioSeccion';
import FormularioMarkay from '../pages/FormularioMarkay';
import FormularioRedSocial from '../pages/FormularioRedSocial';
import ProductoExpanded from '../components/CatalogoItemExpanded';
import TestPostConvenios from '../pages/testpostconvenios';
import '../styles/Globals.css';
import MenuAdmin from '../pages/MenuAdminConvenios';

const routes = (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/especialistas" element={<Especialistas/>} />
        <Route exact path="/convenios" element={<Convenio/>} />
        <Route exact path="/catalogo" element={<Catalogo/>} />
        <Route exact path="/servicios" element={<Servicio/>} />
        <Route exact path="/expanded" element={<ProductoExpanded/>} />
        <Route exact path="/test" element={<TestPostConvenios/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/formulario" element={<Formulario/>} />
        <Route exact path="/MenuAdministrador/convenios/formularioConvenio" element={<FormularioConvenio/>} />
        <Route exact path="/MenuAdministrador/productos/formularioProducto" element={<FormularioProducto/>} />
        <Route exact path="/MenuAdministrador/servicios/formularioServicios" element={<FormularioServicios/>} />
        <Route exact path="/MenuAdministrador/especialista/formularioEspecialista" element={<FormularioEspecialista/>} />
        <Route exact path="/MenuAdministrador/formularioConsulta/:id" element={<FormularioConsulta/>} />
        <Route exact path="/MenuAdministrador/categoriaconvenio/formularioCategoriaConvenio" element={<FormularioCategoriaConvenio/>} />
        <Route exact path="/MenuAdministrador/formularioEspecialidad" element={<FormularioEspecialidad/>} />
        <Route exact path="/MenuAdministrador/formularioEspecialistaEspecialidad" element={<FormularioEspecialistaEspecialidad/>} />
        <Route exact path="/MenuAdministrador/formularioEspecialidadServicio" element={<FormularioEspecialidadServicio/>} />
        <Route exact path="/MenuAdministrador/formularioCategoriaProducto" element={<FormularioCategoriaProducto/>} />
        <Route exact path="/MenuAdministrador/formularioProductoCategoria" element={<FormularioProductoCategoria/>} />
        <Route exact path="/MenuAdministrador/formularioEspecialistaConvenio" element={<FormularioEspecialistaConvenio/>} />
        <Route exact path="/MenuAdministrador/formularioSeccion" element={<FormularioSeccion/>} />
        <Route exact path="/MenuAdministrador/formularioMarkay" element={<FormularioMarkay/>} />
        <Route exact path="/MenuAdministrador/formularioRedSocial" element={<FormularioRedSocial/>} />

        <Route exact path='/MenuAdministrador/Convenios' element={<MenuAdmin />} />
        <Route exact path='/MenuAdministrador/Especialistas' element={<MenuAdmin />} />
        <Route exact path='/MenuAdministrador/Servicios' element={<MenuAdmin />} />
        <Route exact path='/MenuAdministrador/Productos' element={<MenuAdmin />} />
        <Route exact path='/MenuAdministrador/Consultas' element={<MenuAdmin />} />
        <Route exact path='/MenuAdministrador/Categorias' element={<MenuAdmin />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
);

const Navigation = () => {
    const location = useLocation();

    if (location.pathname.startsWith('/MenuAdministrador')) {
        return (
            <LayoutMenu>
                {routes}
            </LayoutMenu>
        );
		
    } else {
        return (
            <NavBar>
                {routes}
            </NavBar>
        );
    }
}

function App() {
    return (
        <BrowserRouter>
            <Navigation />
        </BrowserRouter>
    );
}

export default App;