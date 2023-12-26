import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePutEspecialista = () => {
    
    const putData = async (id, nombre, rut, num_telefono, descripcion, horarios,  imagen, convenio_id, especialidad_id) => {
        try {
            const data = new FormData();
            data.append("nombre", nombre);
            data.append("rut", rut);
            data.append("num_telefono", num_telefono);
            data.append("descripcion", descripcion);
            data.append("horarios", horarios);
            data.append("imagen", imagen);
            convenio_id.forEach(id => data.append("convenio", id));
            especialidad_id.forEach(id => data.append("especialidad", id));
    
            const response = await axios.put(`${API_BASE_URL}/api/v1/servicio/especialista/${id}/`, data);
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

export default usePutEspecialista;