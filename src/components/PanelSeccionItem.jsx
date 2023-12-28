
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';

import '../styles/PanelSeccionItem.css';
const PanelSeccionItem = ({ seccion , setSelectedForm, setSelectedObject}) => {


    
    
    const handleClick = () => {
        
        setSelectedObject(seccion);
        setSelectedForm('Seccion');
    }

    return (
        
        <Card style={{ width: '34rem' , height:'24rem' }}>
            <Card.Body >
                <Card.Title>{seccion.titulo}</Card.Title>
                <Card.Text >{seccion.descripcion}</Card.Text>
                <Card.Text>
                    <Button onClick={handleClick} className='panel-seccion-item-btn' variant="primary">Modificar</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

PanelSeccionItem.propTypes = {
    seccion: PropTypes.object.isRequired,
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired,
};

export default PanelSeccionItem;
