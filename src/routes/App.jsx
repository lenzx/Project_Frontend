import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import NavBar from '../containers/Layout';
import LayoutMenu from '../components/LayoutMenu';
import Convenio from '../pages/Convenios';
import Especialistas from '../pages/Especialistas';
import Catalogo from '../pages/Catalogo';
import Servicio from '../pages/Servicio';
import Login from '../pages/Login';
import Formulario from '../pages/FormularioConsulta';
import ProductoExpanded from '../components/CatalogoItemExpanded';
import PrivateRoute from '../auth/ProtectedRoute';
import '../styles/Globals.css';
import MenuAdmin from '../pages/MenuAdmin';
import AuthContext from '../context/AuthContext';
import useAuthProvider from '../hooks/useAuthProvider';

const routes = (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/especialistas" element={<Especialistas/>} />
        <Route exact path="/convenios" element={<Convenio/>} />
        <Route exact path="/catalogo" element={<Catalogo/>} />
        <Route exact path="/servicios" element={<Servicio/>} />
        <Route exact path="/expanded" element={<ProductoExpanded/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/formularioConsulta/:id" element={<Formulario/>} />
        <Route exact path='/MenuAdministrador' element={<PrivateRoute><MenuAdmin /></PrivateRoute>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
);

const Navigation = () => {
    const location = useLocation();

    if (location.pathname.startsWith('/MenuAdministrador') || location.pathname.startsWith('/test')) {
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
    const auth = useAuthProvider();
    return (
    <AuthContext.Provider value={auth}>
            <BrowserRouter >
                <Navigation />
            </BrowserRouter>
    </AuthContext.Provider>
    );
}

export default App;