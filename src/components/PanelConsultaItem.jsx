import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { format } from 'date-fns';
import useDeleteConsultas from '../hooks/useDeleteConsultas';
import '../styles/PanelConsultaItem.css';
import iconAgregar from '../assets/icon/boton-agregar.png';
const PanelConsultaItem= ({ consulta }) => {  
    const eliminarConsulta =useDeleteConsultas();

    const fecha = format(consulta.fecha_creacion,'dd/MM/yyyy')
    const hora = format(consulta.fecha_creacion, 'HH:mm:ss');
    
    
    const handleDelete = async () => {
        try {
            await eliminarConsulta(consulta.id);
            console.log('Producto eliminado con éxito');
        } catch (error) {
            console.error('Error al eliminar producto:', error.message);
        }
    };
    return (
        <Card className="consulta-card">
        <br />
            <button className='boton-eliminar-producto' onClick={handleDelete} >
                <img className='img-eliminar-producto' src={iconAgregar} alt="Eliminar" />
            </button>
            <Card.Body>
                <Card.Title>Consulta {consulta.id}</Card.Title>
                <Card.Text>Nombre : {consulta.nombre} </Card.Text>
                <Card.Text>Correo electrónico : {consulta.correo_electronico} </Card.Text>
                <Card.Text>Teléfono : {consulta.num_telefono} </Card.Text>
                <Card.Text>Motivo : {consulta.motivo_consulta} </Card.Text>
                <Card.Text>Eviado el : {fecha} a las {hora} </Card.Text>
                
            </Card.Body>
        </Card>
    );
}
PanelConsultaItem.propTypes = {
    consulta: PropTypes.object.isRequired,
};
export default PanelConsultaItem;