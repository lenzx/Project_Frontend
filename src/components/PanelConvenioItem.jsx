
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/PanelConvenioItem.css';
import {useNavigate } from 'react-router-dom';


const PanelConvenioItem = ({ convenio }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${convenio.imagen}`
    const navegador = useNavigate();
    
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioConvenio/`,
        {
            state: {
                convenio: convenio
            }
        });
    }

    return (
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{convenio.nombre}</Card.Title>
                <Card.Text>
                    <Button onClick={handleClick} className='panel-convenio-item-btn' variant="primary">Modificar</Button>       
                </Card.Text>    
            </Card.Body>
        </Card>
    );
}

PanelConvenioItem.propTypes = {
    convenio: PropTypes.object.isRequired,
};

export default PanelConvenioItem;
