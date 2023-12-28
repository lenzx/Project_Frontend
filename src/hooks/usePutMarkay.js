import Cookies from 'js-cookie';
import axios from 'axios';
import { MARKAY } from '../markay/api/endpoint';

const usePutMarkay = () => {
    
    const putData = async (id,imagen, descripcion ) => {
        try {
            const data = new FormData();
            data.append("imagen", imagen);
            data.append("descripcion", descripcion);

            // Obtén el token de las cookies
            const token = Cookies.get('jwt');

            const response = await axios.put(`${MARKAY}${id}/`, data,{
                headers: {
                    // Incluye el token en las cabeceras de la solicitud
                    'Authorization': `Bearer ${token}`
                }
            });
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