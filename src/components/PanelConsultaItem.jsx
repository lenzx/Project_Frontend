import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const PanelConsultaItem= ({ consulta }) => {  
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${consulta.imagen}`
    const navegador = useNavigate();
    
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioConsulta/`,
        {
            state: {
                consulta: consulta
            }
        });
    }
    return (
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{height:'20rem'}} />
            <Card.Body>
                <Card.Title>{consulta.nombre}</Card.Title>
                <Card.Text>
                    <Button onClick={handleClick} className='panel-especialidad-item-btn' variant="primary">Modificar</Button>
                </Card.Text>    
            </Card.Body>
        </Card>
    );

}

PanelConsultaItem.propTypes = {
    consulta: PropTypes.object.isRequired,
};
export default PanelConsultaItem;