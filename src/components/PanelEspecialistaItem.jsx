
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
        
        <Card className='panel-especialista-item-container' style={{ width: '24rem', height:'50rem'}}>
            <Card.Img className='panel-especialista-item-img' variant="top" src={imagen} style={{height:'24rem'}}/>
            <Card.Body className='panel-especialista-item-body'>
                <Card.Title>{especialista.nombre}</Card.Title>
                <Card.Text className='panel-especialista-item-descripcion'>
                    {especialista.descripcion}
                </Card.Text>
                <Button variant="primary" className='panel-especialista-item-detalle' onClick={handleClick}>Detalles</Button>
            </Card.Body>
        </Card>
    );
}

PanelEspecialistaItem.propTypes = {
    especialista: PropTypes.object.isRequired,
};

export default PanelEspecialistaItem;
