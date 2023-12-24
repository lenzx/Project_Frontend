import PropTypes from 'prop-types';
import SidebarMenu  from 'react-bootstrap-sidebar-menu';
import "../styles/menu_sidebar.css"
import { Button } from 'react-bootstrap';

function MenuNavService({setSelectedComponent}) {
    return (
        <>
            <SidebarMenu className='sidebar-menu-list'>
                <SidebarMenu.Header>
                    <SidebarMenu.Nav.Title className='menu-sidebar-title'>
                        Menu
                    </SidebarMenu.Nav.Title>
                </SidebarMenu.Header>
                <SidebarMenu.Body>
                    <SidebarMenu.Nav>
                        <ul className='menu-sidebar-ul'>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => setSelectedComponent('Citas')}>Citas</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => setSelectedComponent('Convenios')}>Convenios</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => setSelectedComponent('Servicios')}>Servicios</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => setSelectedComponent('Productos')}>Productos</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => setSelectedComponent('Especialistas')}>Kinesiologos</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => setSelectedComponent('Especialidades')}>Especialidades</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => setSelectedComponent('Redes Sociales')}>Redes Sociales</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => setSelectedComponent('Especialistas')}>Categoria de Productos</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                        </ul>
                    </SidebarMenu.Nav>
                    
                </SidebarMenu.Body>

            </SidebarMenu>
        </>
    );
}

MenuNavService.propTypes = {
    setSelectedComponent: PropTypes.func.isRequired,
};

export default MenuNavService;