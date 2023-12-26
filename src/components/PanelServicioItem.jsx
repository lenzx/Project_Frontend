
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/PanelServicioItem.css';
import useDeleteServicio from '../hooks/useDeleteServicio';
import iconAgregar from '../assets/icon/boton-agregar.png';


const PanelServicioItem = ({ servicio }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${servicio.imagen}`
    const navegador = useNavigate();
    const eliminarServicio = useDeleteServicio();
    
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioServicios/`,
        {
            state: {
                servicio: servicio
            }
        });
    }

    const handleDelete = async () => {
        try {
            await eliminarServicio(servicio.id);
            console.log('servicio eliminado con éxito');
        } catch (error) {
            console.error('Error al eliminar servicio:', error.message);
        }
    };

    return (
        
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{ height: '20rem' }} />
            <button className='boton-eliminar-servicio' onClick={handleDelete} >
                <img className='img-eliminar-servicio' src={iconAgregar} alt="Eliminar" />
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
};

export default PanelServicioItem;
