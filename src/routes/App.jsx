
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
	return (
			<BrowserRouter>
					<Routes>
						<Route path="/" element={<h1>Hola mundo</h1>} />
                        <Route path="/about" element={<h1>About</h1>} />
					</Routes>
			</BrowserRouter>
		
	);
}

export default App;