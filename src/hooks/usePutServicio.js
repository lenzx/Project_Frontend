import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePutRedSocial = () => {
    
    const putData = async (id,nombre,descripcion, imagen) => {
        try {
            const data = new FormData();
            data.append("nombre", nombre);
            data.append("descripcion", descripcion);
            data.append("imagen", imagen);
            const response = await axios.put(`${API_BASE_URL}/api/v1/servicio/servicio/${id}/`, data);
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

export default usePutRedSocial;