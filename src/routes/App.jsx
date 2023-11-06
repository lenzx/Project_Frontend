import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../containers/Layout';
import Convenio from '../pages/Convenios';
import Especialistas from '../pages/Especialistas';
import Catalogo from '../pages/Catalogo';
import Servicio from '../pages/Servicio';
import ProductoExpanded from '../components/CatalogoItemExpanded';
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
					</Routes>
				</NavBar>
			</BrowserRouter>
	);
}
export default App;