import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/PanelRedSocialItem.css';

const PanelRedSocialItem = ({ redSocial }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${redSocial.imagen}`
    const navegador = useNavigate();
    
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioRedSocial`, {
            state: {
                redSocial: redSocial
            }
        });
    }



    return (
        
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{ height: '20rem' }} />
            <Card.Body>
                <Card.Title>{redSocial.texto}</Card.Title> 
                
                <Card.Text>
                    <Button onClick={handleClick} className='panel-redSocial-item-btn' variant="primary">Modificar</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

PanelRedSocialItem.propTypes = {
    redSocial: PropTypes.object.isRequired,
};

export default PanelRedSocialItem;