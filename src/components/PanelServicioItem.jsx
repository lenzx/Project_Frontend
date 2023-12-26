
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/PanelServicioItem.css';



const PanelServicioItem = ({ servicio }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${servicio.imagen}`
    const navegador = useNavigate();
    
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioServicios/`,
        {
            state: {
                servicio: servicio
            }
        });
    }

    return (
        
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{ height: '20rem' }} />
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
