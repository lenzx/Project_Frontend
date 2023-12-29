import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/PanelCategoriaCatalogoItem.css';
import useDeleteCategoriaProductos from '../hooks/useDeleteCategoriaProductos';
import iconEliminar from '../assets/icon/eliminar.png';
const PanelCategoriaCatalogoItem = ({ categoria, setSelectedForm, setSelectedObject }) => {

    const eliminarCategoriaProductos = useDeleteCategoriaProductos();
    
    const handleClick = () => {
        setSelectedForm('CategoriasCatalogo');
        setSelectedObject(categoria);
    }
    const handleDelete = async () => {
        try {
            await eliminarCategoriaProductos(categoria.id);
            
        } catch (error) {
            console.error('Error al eliminar producto:', error.message);
        }
    };
    return (
        <Card style={{ width: '32rem' , height:'24rem' }}>
            <button className='boton-eliminar-categoriaProducto' onClick={handleDelete} >
                <img className='img-eliminar-categoriaProducto' src={iconEliminar} alt="Eliminar" />
            </button>
            <br /><br /><br /><br />
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
    setSelectedForm: PropTypes.func.isRequired,
    setSelectedObject: PropTypes.func.isRequired
};

export default PanelCategoriaCatalogoItem;