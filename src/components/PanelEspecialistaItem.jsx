
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/PanelEspecialistaItem.css';


const PanelEspecialistaItem = ({ especialista }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${especialista.imagen}`
    const navegador = useNavigate();
    
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioEspecialista/`,
        {
            state: {
                especialista: especialista
            }
        });
    }

    return (
        
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{ height: '20rem' }} />
            <Card.Body >
                <Card.Title>{especialista.nombre}</Card.Title>
                <Card.Text >{especialista.descripcion}</Card.Text>
                <Card.Text>
                    <Button onClick={handleClick} className='panel-especialista-item-btn' variant="primary">Modificar</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

PanelEspecialistaItem.propTypes = {
    especialista: PropTypes.object.isRequired,
};

export default PanelEspecialistaItem;
