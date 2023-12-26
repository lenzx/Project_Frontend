import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/PanelCategoriaCatalogoItem.css';
import useDeleteCategoriaProductos from '../hooks/useDeleteCategoriaProductos';
import iconAgregar from '../assets/icon/boton-agregar.png';
const PanelCategoriaCatalogoItem = ({ categoria }) => {

    const navegador = useNavigate();
    const eliminarCategoriaProductos = useDeleteCategoriaProductos();
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioCategoriaProducto/`, {
            state: {
                categoria: categoria
            }
        });
    }
    
    const handleDelete = async () => {
        try {
            await eliminarCategoriaProductos(categoria.id);
            console.log('Producto eliminado con éxito');
        } catch (error) {
            console.error('Error al eliminar producto:', error.message);
        }
    };
    return (
        <Card style={{ width: '32rem' }}>
            <button className='boton-eliminar-categoriaProducto' onClick={handleDelete} >
                <img className='img-eliminar-categoriaProducto' src={iconAgregar} alt="Eliminar" />
            </button>
            <Card.Body>
                <Card.Title>{categoria.nombre}</Card.Title> 
                <Card.Text>
                    <Button onClick={handleClick} className='panel-categoriaCatalogo-item-btn' variant="primary">Modificar</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}



PanelCategoriaCatalogoItem.propTypes = {
    categoria: PropTypes.object.isRequired, 
};

export default PanelCategoriaCatalogoItem;