import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PanelCategoriaCatalogoItem = ({ categoria }) => {

    const navegador = useNavigate();
    
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioCategoriaProducto/`, {
            state: {
                categoria: categoria
            }
        });
    }

    return (
        <Card style={{ width: '32rem' }}>
            
            <Card.Body>
                <Card.Title>{categoria.nombre}</Card.Title> 
                <Card.Text>
                    <Button onClick={handleClick} className='panel-categoriaCatalogo-item-btn' variant="primary">Modificar</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}



PanelCategoriaCatalogoItem.propTypes = {
    categoria: PropTypes.object.isRequired, 
};

export default PanelCategoriaCatalogoItem;