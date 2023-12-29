
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/PanelConvenioItem.css';
import useDeleteConvenio from "../hooks/useDeleteConvenio";
import iconEliminar from '../assets/icon/eliminar.png';

const PanelConvenioItem = ({ convenio, setSelectedForm, setSelectedObject }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${convenio.imagen}`
    const deleteData = useDeleteConvenio();
    

    
    
    const handleDelete = async () => {
        
        try {
            await deleteData(convenio.id);
            
            
        } catch (error) {
            console.error('Error al eliminar producto:', error.message);
        }
    };
    
    const handleClick = () => {
        setSelectedObject(convenio);
        setSelectedForm('Convenios');
    };

    return (
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{height:'20rem'}} />
            <button className='boton-eliminar-convenio' onClick={handleDelete} >
                <img className='img-eliminar-convenio' src={iconEliminar} alt="Eliminar" />
            </button>

            <Card.Body>
                <Card.Title>{convenio.nombre}</Card.Title>
                <Card.Text>
                    <Button onClick={handleClick} className='panel-convenio-item-btn' variant="primary" >Modificar</Button>       
                </Card.Text>    
            </Card.Body>
        </Card>
    );
}

PanelConvenioItem.propTypes = {
    convenio: PropTypes.object.isRequired,
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired,
};

export default PanelConvenioItem;
