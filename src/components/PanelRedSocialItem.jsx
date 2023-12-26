import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/PanelRedSocialItem.css';
import useDeleteRedSocial from '../hooks/useDeleteRedSocial';
import iconAgregar from '../assets/icon/boton-agregar.png';
const PanelRedSocialItem = ({ redSocial }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${redSocial.imagen}`
    const navegador = useNavigate();
    const eliminarRedSocial = useDeleteRedSocial();
    
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioRedSocial`, {
            state: {
                redSocial: redSocial
            }
        });
    }

    const handleDelete = async () => {
        try {
            await eliminarRedSocial(redSocial.id);
            console.log('RedSocial eliminado con éxito');
        } catch (error) {
            console.error('Error al eliminar RedSocial:', error.message);
        }
    };

    return (
        
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{ height: '20rem' }} />
            <button className='boton-eliminar-redSocial' onClick={handleDelete} >
                <img className='img-eliminar-redSocial' src={iconAgregar} alt="Eliminar" />
            </button>
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