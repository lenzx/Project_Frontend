
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/PanelServicioItem.css';
import useDeleteServicio from '../hooks/useDeleteServicio';
import iconEliminar from '../assets/icon/eliminar.png';


const PanelServicioItem = ({ servicio , setSelectedForm, setSelectedObject}) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${servicio.imagen}`

    const eliminarServicio = useDeleteServicio();
    
    const handleClick = () => {
        setSelectedObject(servicio);
        setSelectedForm('Servicios');
    }

    const handleDelete = async () => {
        try {
            await eliminarServicio(servicio.id);
        } catch (error) {
            console.error('Error al eliminar servicio:', error.message);
        }
    };

    return (
        
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{ height: '20rem' }} />
            <button className='boton-eliminar-servicio' onClick={handleDelete} >
                <img className='img-eliminar-servicio' src={iconEliminar} alt="Eliminar" />
            </button>
            <Card.Body >
                <Card.Title>{servicio.nombre}</Card.Title>
                <Card.Text >{servicio.descripcion}</Card.Text>
                <Card.Text>
                    <Button onClick={handleClick} className='panel-servicio-item-btn' variant="primary">Modificar</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

PanelServicioItem.propTypes = {
    servicio: PropTypes.object.isRequired,
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired,
};

export default PanelServicioItem;
