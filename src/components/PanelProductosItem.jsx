

import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/PanelProductoItem.css';
import { useNavigate } from 'react-router-dom';
import useDeleteProducto from '../hooks/useDeleteProducto';
import iconAgregar from '../assets/icon/boton-agregar.png';
const PanelProductoItem = ({ producto }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${producto.imagen}`
    const navegador = useNavigate();
    const eliminarProducto = useDeleteProducto();

    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioProducto/`, {
            state: {
                producto: producto,
            },
        });
    };

    const handleDelete = async () => {
        try {
            await eliminarProducto(producto.id);
            console.log('Producto eliminado con éxito');
        } catch (error) {
            console.error('Error al eliminar producto:', error.message);
        }
    };
    return (
        <Card style={{ width: '32rem', position: 'relative' }}>
            <Card.Img variant="top" src={imagen} style={{ height: '20rem' }} />
            <button className='boton-eliminar-producto' onClick={handleDelete} >
                <img className='img-eliminar-producto' src={iconAgregar} alt="Eliminar" />
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
};

export default PanelProductoItem;
