import { Link } from 'react-router-dom';
import SidebarMenu  from 'react-bootstrap-sidebar-menu';
import "../styles/menu_sidebar.css"

function MenuNavService() {
    return (
        <>
            <SidebarMenu>
                <SidebarMenu.Header>
                    <SidebarMenu.Nav.Title className='menu-sidebar-title'>
                        Menu de Servicios
                    </SidebarMenu.Nav.Title>
                </SidebarMenu.Header>
                <SidebarMenu.Body>
                    <SidebarMenu.Nav>
                        <ul className='menu-sidebar-ul'>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Link to="/MenuAdministrador/convenios">Convenios</Link>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Link to="/MenuAdministrador/Servicios">Servicios</Link>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Link to="/MenuAdministrador/productos">Productos</Link>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Link to="/MenuAdministrador/especialistas">Kinesiologos</Link>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Link to="/MenuAdministrador/especialidades">Especialidades</Link>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Link to="/MenuAdministrador/redesSociales">Redes Sociales</Link>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Link to="/MenuAdministrador/categoriaCatalogo">Categorias de Producto</Link>
                                </SidebarMenu.Nav.Title>
                            </li>
                        </ul>
                    </SidebarMenu.Nav>
                    
                </SidebarMenu.Body>

            </SidebarMenu>
        </>
    );
}

export default MenuNavService;