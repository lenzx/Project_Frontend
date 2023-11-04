import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../containers/Layout';
import '../styles/Globals.css'


const App = () => {
	return (
			<BrowserRouter>
				<NavBar>
					<Routes>
						<Route path="/" element={<Home/>} />
					</Routes>
				</NavBar>
			</BrowserRouter>
		
	);
}
export default App;