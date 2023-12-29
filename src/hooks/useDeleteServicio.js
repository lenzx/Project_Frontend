import axios from 'axios';
import Cookies from 'js-cookie';
import { SERVICIO } from '../markay/api/endpoint';

const useDeleteServicio = () => {
    const deleteData = async (id) => {
        try {
            
            const confirmDelete = window.confirm('¿Seguro que quieres eliminar este servicio?');
            if (!confirmDelete) {
                return; 
            }
            const token = Cookies.get('jwt');
            const response = await axios.delete(`${SERVICIO}${id}/`, {
                headers: {
                    // Incluye el token en las cabeceras de la solicitud
                    'Authorization': `Bearer ${token}`
                }
            });
            if (!response.status.toString().startsWith('2')) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            
            window.location.reload(true)

        
        } catch (error) {
            console.error('Error al eliminar datos:', error.response ? error.response.data : error.message);
            throw error;
        }
    };

    return deleteData;
};

export default useDeleteServicio;
