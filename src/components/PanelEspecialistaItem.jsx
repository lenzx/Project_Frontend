
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/PanelEspecialistaItem.css';
import useDeleteEspecialista from '../hooks/useDeleteEspecialista';
import iconEliminar from '../assets/icon/eliminar.png';

const PanelEspecialistaItem = ({ especialista, setSelectedForm, setSelectedObject }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${especialista.imagen}`

    const eliminarEspecialista = useDeleteEspecialista();

    const handleClick = () => {
        setSelectedObject(especialista);
        setSelectedForm('Especialistas');
    };


    const handleDelete = async () => {
        try {
            await eliminarEspecialista(especialista.id);
            
        } catch (error) {
            console.error('Error al eliminar Especialista:', error.message);
        }
    };

    return (
        
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{ height: '20rem' }} />
            <button className='boton-eliminar-especialista' onClick={handleDelete} >
                <img className='img-eliminar-especialista' src={iconEliminar} alt="Eliminar" />
            </button>
            <Card.Body >
                <Card.Title>{especialista.nombre}</Card.Title>
                <Card.Text >{especialista.descripcion}</Card.Text>
                <Card.Text>
                    <Button onClick={handleClick} className='panel-especialista-item-btn' variant="primary">Modificar</Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

PanelEspecialistaItem.propTypes = {
    especialista: PropTypes.object.isRequired,
    setSelectedObject: PropTypes.func.isRequired,
    setSelectedForm: PropTypes.func.isRequired,

};

export default PanelEspecialistaItem;
