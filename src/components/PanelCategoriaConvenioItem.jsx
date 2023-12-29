import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/PanelCategoriaCatalogoItem.css';
import useDeleteCategoriaConvenio from '../hooks/useDeleteCategoriaConvenio';
import iconEliminar from '../assets/icon/eliminar.png';
const PanelCategoriaConvenioItem = ({ convenio, setSelectedForm, setSelectedObject }) => {

    const eliminarCategoriaConvenio = useDeleteCategoriaConvenio();
    
    const handleClick = () => {
        setSelectedForm('CategoriasConvenio');
        setSelectedObject(convenio);
    }
    
    const handleDelete = async () => {
        try {
            await eliminarCategoriaConvenio(convenio.id);
            console.log('Categoría eliminada con éxito');

        } catch (error) {
            console.error('Error al eliminar categoría:', error.message);
        }
    };
    return (
        <Card style={{ width: '32rem', height:'20rem'  }}>
            
            <button className='boton-eliminar-categoriaProducto' onClick={handleDelete} >
                <img className='img-eliminar-categoriaProducto' src={iconEliminar} alt="Eliminar" />
            </button>
            <br /><br /><br />
            <Card.Body>
                <Card.Title>{convenio.nombre}</Card.Title> 
                <Card.Text>
                    <Button onClick={handleClick} className='panel-categoriaCatalogo-item-btn' variant="primary">Modificar</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}



PanelCategoriaConvenioItem.propTypes = {
    convenio: PropTypes.object.isRequired, 
    setSelectedForm: PropTypes.func.isRequired,
    setSelectedObject: PropTypes.func.isRequired
};

export default PanelCategoriaConvenioItem;