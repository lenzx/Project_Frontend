import PropTypes from "prop-types";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../styles/PanelConvenioItem.css";




const PanelEspecialidadItem = ({ especialidad }) => {  
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${especialidad.imagen}`
    const navegador = useNavigate();
    
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioEspecialidad/`,
        {
            state: {
                especialidad: especialidad
            }
        });
    }
    return (
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{height:'20rem'}} />
            <Card.Body>
                <Card.Title>{especialidad.nombre}</Card.Title>
                <Card.Text>
                    <Button onClick={handleClick} className='panel-especialidad-item-btn' variant="primary">Modificar</Button>
                </Card.Text>    
            </Card.Body>
        </Card>
    );

}

PanelEspecialidadItem.propTypes = {
    especialidad: PropTypes.object.isRequired,
};
export default PanelEspecialidadItem;