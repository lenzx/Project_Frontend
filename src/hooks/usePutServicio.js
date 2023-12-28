import axios from 'axios';
import { SERVICIO } from '../markay/api/endpoint';
import Cookies from 'js-cookie';

const usePutServicio = () => {
    
    const putData = async (id,nombre,descripcion, imagen) => {
        try {
            const data = new FormData();
            const token = Cookies.get('jwt');
            data.append("nombre", nombre);
            data.append("descripcion", descripcion);
            data.append("imagen", imagen);
            const response = await axios.put(`${SERVICIO}${id}/`, data, {
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

export default usePutServicio;