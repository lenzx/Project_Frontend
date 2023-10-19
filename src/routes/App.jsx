import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import '../styles/Globals.css'


const App = () => {
	return (
			<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home/>} />
                        <Route path="/about" element={<h1>asasdadasdsa</h1>} />
					</Routes>
			</BrowserRouter>
		
	);
}
export default App;