
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/PanelProductoItem.css';
import useDeleteMarkay from '../hooks/useDeleteMarkay';
import iconEliminar from '../assets/icon/eliminar.png';
const PanelMarkayItem = ({ markay, setSelectedForm, setSelectedObject }) => {
    
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${markay.imagen}`
    const eliminarMarkay = useDeleteMarkay();
    if (!markay) {
        return null; 
    }

    const handleClick = () => {
        setSelectedObject(markay);
        setSelectedForm('PaginaPrincipal');
    };

    const handleDelete = async () => {
        try {
            await eliminarMarkay(markay.id);
            console.log('Producto eliminado con éxito');
        } catch (error) {
            console.error('Error al eliminar producto:', error.message);
        }
    };
    if (markay.id == 1){
        return(
        <Card style={{ width: '32rem', position: 'relative' }}>
            <Card.Body>
                <Card.Title>Eslogan</Card.Title> 
                <Card.Text>{markay.descripcion}</Card.Text> 
                
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
        </Card>);

    } else {
        return(
            <Card style={{ width: '32rem', position: 'relative' }}>
                <button className='boton-eliminar-producto' onClick={handleDelete} >
                    <img className='img-eliminar-producto' src={iconEliminar} alt="Eliminar" />
                </button>
                <Card.Body>
                    <Card.Img variant="top" src={imagen} style={{ height: '20rem' }} />
                    <Card.Title>Sección {markay.id}</Card.Title> 
                    <Card.Text>{markay.descripcion}</Card.Text> 
                    
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
        );}

    
    
}

PanelMarkayItem.propTypes = {
    markay: PropTypes.object.isRequired, 
    setSelectedForm: PropTypes.func.isRequired,
    setSelectedObject: PropTypes.func.isRequired
};

export default PanelMarkayItem;
