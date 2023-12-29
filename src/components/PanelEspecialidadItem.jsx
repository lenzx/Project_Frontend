import PropTypes from "prop-types";
import { Card, Button } from 'react-bootstrap';

import "../styles/PanelEspecialidadItem.css";

import useDeleteEspecialidad from '../hooks/useDeleteEspecialidad';
import iconEliminar from '../assets/icon/eliminar.png';


const PanelEspecialidadItem = ({ especialidad, setSelectedForm, setSelectedObject }) => {  

    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${especialidad.imagen}`
    
    const eliminarEspecialidad = useDeleteEspecialidad();
    
    const handleClick = () => {
        setSelectedObject(especialidad);
        setSelectedForm('Especialidades');
    }


    const handleDelete = async () => {
        try {
            await eliminarEspecialidad(especialidad.id);
            
        } catch (error) {
            console.error('Error al eliminar Especialidad:', error.message);
        }
    };


    return (
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{height:'20rem'}} />
            <button className='boton-eliminar-especialidad' onClick={handleDelete} >
                <img className='img-eliminar-especialidad' src={iconEliminar} alt="Eliminar" />
            </button>
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
    setSelectedForm: PropTypes.func.isRequired,
    setSelectedObject: PropTypes.func.isRequired
};
export default PanelEspecialidadItem;