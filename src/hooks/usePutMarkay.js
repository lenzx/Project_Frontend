import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePutMarkay = () => {
    
    const putData = async (id,imagen, descripcion ) => {
        try {
            const data = new FormData();
            data.append("imagen", imagen);
            data.append("descripcion", descripcion);
            const response = await axios.put(`${API_BASE_URL}/api/v1/web/markay/${id}/`, data);
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
export default usePutMarkay;