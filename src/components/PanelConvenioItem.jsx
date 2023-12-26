
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import '../styles/PanelConvenioItem.css';
import {useNavigate } from 'react-router-dom';
import useDeleteConvenio from "../hooks/useDeleteConvenio";
import iconAgregar from '../assets/icon/boton-agregar.png';

const PanelConvenioItem = ({ convenio }) => {
    const imagen = `https://res.cloudinary.com/dn1gcn5rm/${convenio.imagen}`
    const navegador = useNavigate();
    const deleteData = useDeleteConvenio();

    const handleDelete = async () => {
        
        try {
            await deleteData(convenio.id);
            console.log('Producto eliminado con éxito');
        } catch (error) {
            console.error('Error al eliminar producto:', error.message);
        }
    };
    
    
    
    const handleClick = () => {
        navegador(`/MenuAdministrador/formularioConvenio/`,
        {
            state: {
                convenio: convenio
            }
        });
    }

    return (
        <Card style={{ width: '32rem' }}>
            <Card.Img variant="top" src={imagen} style={{height:'20rem'}} />
            <button className='boton-eliminar-convenio' onClick={handleDelete} >
                <img className='img-eliminar-convenio' src={iconAgregar} alt="Eliminar" />
            </button>

            <Card.Body>
                <Card.Title>{convenio.nombre}</Card.Title>
                <Card.Text>
                    <Button onClick={handleClick} className='panel-convenio-item-btn' variant="primary">Modificar</Button>       
                </Card.Text>    
            </Card.Body>
        </Card>
    );
}

PanelConvenioItem.propTypes = {
    convenio: PropTypes.object.isRequired,
};

export default PanelConvenioItem;
