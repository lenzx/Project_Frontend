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
import ProductoExpanded from '../components/CatalogoItemExpanded';
import TestPostConvenios from '../pages/testpostconvenios';
import '../styles/Globals.css';


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
						
					
					
					</Routes>
				</NavBar>
			</BrowserRouter>
	);
}
export default App;