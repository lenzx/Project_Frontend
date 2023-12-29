

import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/PanelProductoItem.css';
import useDeleteProducto from '../hooks/useDeleteProducto';
import iconEliminar from '../assets/icon/eliminar.png';
const PanelProductoItem = ({ producto, setSelectedForm, setSelectedObject }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${producto.imagen}`
    const eliminarProducto = useDeleteProducto();

    const handleClick = () => {
        setSelectedObject(producto);
        setSelectedForm('Productos');
    };

    const handleDelete = async () => {
        try {
            await eliminarProducto(producto.id);
            
        } catch (error) {
            console.error('Error al eliminar producto:', error.message);
        }
    };
    return (
        <Card style={{ width: '32rem', position: 'relative' }}>
            <Card.Img variant="top" src={imagen} style={{ height: '20rem' }} />
            <button className='boton-eliminar-producto' onClick={handleDelete} >
                <img className='img-eliminar-producto' src={iconEliminar} alt="Eliminar" />
            </button>
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title> 
                <Card.Text>
                    <Button
                        onClick={handleClick}
                        className='panel-producto-item-btn'
                        variant="primary"
                    >
                        Modificar
                    </Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

PanelProductoItem.propTypes = {
    producto: PropTypes.object.isRequired, 
    setSelectedForm: PropTypes.func.isRequired,
    setSelectedObject: PropTypes.func.isRequired
};

export default PanelProductoItem;
