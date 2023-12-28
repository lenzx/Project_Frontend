import PropTypes from 'prop-types';
import SidebarMenu  from 'react-bootstrap-sidebar-menu';
import "../styles/menu_sidebar.css"
import { Button } from 'react-bootstrap';

function MenuNavService({setSelectedComponent, setSelectedComponent2}) {

    const handleClick = (valor) => {
        setSelectedComponent(valor);
        setSelectedComponent2('');
    }
    
    return (
        <>
            <SidebarMenu className='sidebar-menu-list'>
                <SidebarMenu.Header>
                    <SidebarMenu.Nav.Title className='menu-sidebar-title'>
                        Menú
                    </SidebarMenu.Nav.Title>
                </SidebarMenu.Header>
                <SidebarMenu.Body>
                    <SidebarMenu.Nav>
                        <ul className='menu-sidebar-ul'>
                            <SidebarMenu.Header className='menu-sidebar-subtitle'>
                                <SidebarMenu.Nav.Item>
                                    Consultas
                                </SidebarMenu.Nav.Item>
                            </SidebarMenu.Header>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => handleClick('Citas')}>Solicitudes de citas</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <SidebarMenu.Header className='menu-sidebar-subtitle'>
                                <SidebarMenu.Nav.Title>
                                    Markay
                                </SidebarMenu.Nav.Title>
                            </SidebarMenu.Header>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => handleClick('PaginaPrincipal')}>Página principal</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            
                            <SidebarMenu.Header className='menu-sidebar-subtitle'>
                                <SidebarMenu.Nav.Title>
                                    Contenido
                                </SidebarMenu.Nav.Title>
                            </SidebarMenu.Header>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => handleClick('Convenios')}>Convenios</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => handleClick('Servicios')}>Servicios</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => handleClick('Productos')}>Productos</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => handleClick('Especialistas')}>Especialistas</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => handleClick('Especialidades')}>Especialidades</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <SidebarMenu.Header className='menu-sidebar-subtitle'>
                                <SidebarMenu.Nav.Title>
                                    Categorías
                                </SidebarMenu.Nav.Title>
                            </SidebarMenu.Header>
                            
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => handleClick('CategoriasCatalogo')}>Categorías de Productos</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => handleClick('CategoriasConvenio')}>Categorías de Convenios</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <SidebarMenu.Header className='menu-sidebar-subtitle'>
                                <SidebarMenu.Nav.Title>
                                    General
                                </SidebarMenu.Nav.Title>
                            </SidebarMenu.Header>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => handleClick('Seccion')}>Secciones de páginas</Button>
                                </SidebarMenu.Nav.Title>
                            </li>
                            <li>
                                <SidebarMenu.Nav.Title>
                                    <Button variant="outline-secondary" size="2" onClick={() => handleClick('Redes Sociales')}>Redes Sociales</Button>
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
    setSelectedComponent2: PropTypes.func.isRequired,
};

export default MenuNavService;