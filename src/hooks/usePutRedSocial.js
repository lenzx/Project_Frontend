import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePutRedSocial = () => {
    
    const putData = async (id,imagen,enlace,texto) => {
        try {
            const data = new FormData();
            data.append("imagen", imagen);
            data.append("enlace", enlace);
            data.append("texto", texto);
            const response = await axios.put(`${API_BASE_URL}/api/v1/web/redSocial/${id}/`, data);
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