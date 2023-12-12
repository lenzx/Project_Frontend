import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../containers/Layout';
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
import MenuAdmin from '../pages/MenuAdmin';


const App = () => {
	return (
			<BrowserRouter>
				<NavBar>
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
						<Route exact path="/formularioConvenio" element={<FormularioConvenio/>} />
						<Route exact path="/formularioProducto" element={<FormularioProducto/>} />
						<Route exact path="/formularioServicios" element={<FormularioServicios/>} />
						<Route exact path="/formularioEspecialista" element={<FormularioEspecialista/>} />
						<Route exact path="/formularioConsulta" element={<FormularioConsulta/>} />
						<Route exact path="/formularioCategoriaConvenio" element={<FormularioCategoriaConvenio/>} />
						<Route exact path="/formularioEspecialidad" element={<FormularioEspecialidad/>} />
						<Route exact path="/formularioEspecialistaEspecialidad" element={<FormularioEspecialistaEspecialidad/>} />
						<Route exact path="/formularioEspecialidadServicio" element={<FormularioEspecialidadServicio/>} />
						<Route exact path="/formularioCategoriaProducto" element={<FormularioCategoriaProducto/>} />
						<Route exact path="/formularioProductoCategoria" element={<FormularioProductoCategoria/>} />
						<Route exact path="/formularioEspecialistaConvenio" element={<FormularioEspecialistaConvenio/>} />
						<Route exact path="/formularioSeccion" element={<FormularioSeccion/>} />
						<Route exact path="/formularioMarkay" element={<FormularioMarkay/>} />
						<Route exact path="/formularioRedSocial" element={<FormularioRedSocial/>} />



						<Route exact path='/MenuAdministrador' element={<MenuAdmin />} />
						<Route path="*" element={<h1>404 Not Found</h1>} />
					</Routes>
				</NavBar>
			</BrowserRouter>
	);
}
export default App;