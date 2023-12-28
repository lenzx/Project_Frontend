import axios from 'axios';
import Cookies from 'js-cookie';
import { PRODUCTO } from '../markay/api/endpoint';

const useDeleteProducto = () => {
    const deleteData = async (id) => {
        try {
            const confirmDelete = window.confirm('¿Seguro que quieres eliminar este producto?');
            if (!confirmDelete) {
                return; 
            }

            // Obtén el token de las cookies
            const token = Cookies.get('jwt');

            const response = await axios.delete(`${PRODUCTO}${id}/`, {
                headers: {
                    // Incluye el token en las cabeceras de la solicitud
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.status.toString().startsWith('2')) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            console.log('Datos eliminados con éxito:', response.data);
    
        } catch (error) {
            console.error('Error al eliminar datos:', error.response ? error.response.data : error.message);
            throw error;
        }
    };

    return deleteData;
};

export default useDeleteProducto;