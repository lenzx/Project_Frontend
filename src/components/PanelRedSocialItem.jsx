import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/PanelRedSocialItem.css';
import useDeleteRedSocial from '../hooks/useDeleteRedSocial';
import iconEliminar from '../assets/icon/eliminar.png';
const PanelRedSocialItem = ({ redSocial, setSelectedForm, setSelectedObject }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${redSocial.imagen}`
    
    const eliminarRedSocial = useDeleteRedSocial();
    
    const handleClick = () => {
        setSelectedObject(redSocial);
        setSelectedForm('Redes Sociales');
    }

    const handleDelete = async () => {
        try {
            await eliminarRedSocial(redSocial.id);

        } catch (error) {
            console.error('Error al eliminar RedSocial:', error.message);
        }
    };
    if (redSocial.id == 4){
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

    } else{
        return (
        
            <Card style={{ width: '32rem' }}>
                <Card.Img variant="top" src={imagen} style={{ height: '20rem' }} />
                <button className='boton-eliminar-redSocial' onClick={handleDelete} >
                    <img className='img-eliminar-redSocial' src={iconEliminar} alt="Eliminar" />
                </button>
                <Card.Body>
                    <Card.Title>{redSocial.texto}</Card.Title> 
                    <Card.Text>
                        <Button onClick={handleClick} className='panel-redSocial-item-btn' variant="primary">Modificar</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }

    
};

PanelRedSocialItem.propTypes = {
    redSocial: PropTypes.object.isRequired,
    setSelectedForm: PropTypes.func.isRequired,
    setSelectedObject: PropTypes.func.isRequired
};

export default PanelRedSocialItem;