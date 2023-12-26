import PropTypes from "prop-types";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "../styles/PanelEspecialidadItem.css";

import useDeleteEspecialidad from '../hooks/useDeleteEspecialidad';
import iconAgregar from '../assets/icon/boton-agregar.png';


const PanelEspecialidadItem = ({ especialidad }) => {  
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${especialidad.imagen}`
    const navegador = useNavigate();
    const eliminarEspecialidad = useDeleteEspecialidad();
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioEspecialidad/`,
        {
            state: {
                especialidad: especialidad
            }
        });
    }


    const handleDelete = async () => {
        try {
            await eliminarEspecialidad(especialidad.id);
            console.log('Especialidad eliminado con éxito');
        } catch (error) {
            console.error('Error al eliminar Especialidad:', error.message);
        }
    };


    return (
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{height:'20rem'}} />
            <button className='boton-eliminar-especialidad' onClick={handleDelete} >
                <img className='img-eliminar-especialidad' src={iconAgregar} alt="Eliminar" />
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
};
export default PanelEspecialidadItem;