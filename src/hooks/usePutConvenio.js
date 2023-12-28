import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePutConvenio = () => {
    
    const putData = async (id, nombre, descripcion, enlace,direccion, imagen, num_telefono, tipo_convenio_id) => {
        try {
            const data = new FormData();
            data.append("nombre", nombre);
            data.append("descripcion", descripcion);
            data.append("enlace", enlace);
            data.append("direccion", direccion)
            data.append("imagen", imagen);
            data.append("num_telefono", num_telefono);
            data.append("tipo_convenio_id", tipo_convenio_id);
            const response = await axios.put(`${API_BASE_URL}/api/v1/servicio/convenios/${id}/`, data);
            if (!response.status.toString().startsWith('2')) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            console.log('Datos actualizados con éxito:', response.data);
        } catch (error) {
            console.error('Error al actualizar datos:', error.response ? error.response.data : error.message);
            throw error; 
        }
    };

    return putData;
};

export default usePutConvenio;