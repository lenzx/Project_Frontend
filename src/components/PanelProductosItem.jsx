

import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/PanelProductoItem.css';
import { useNavigate } from 'react-router-dom';

const PanelProductoItem = ({ producto }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${producto.imagen}`
    const navegador = useNavigate();
    
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioProducto/`, {
            state: {
                producto: producto
            }
        });
    }

    return (
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{ height: '20rem' }} />
            <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title> 
                <Card.Text>
                    <Button onClick={handleClick} className='panel-producto-item-btn' variant="primary">Modificar</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

PanelProductoItem.propTypes = {
    producto: PropTypes.object.isRequired, 
};

export default PanelProductoItem;
