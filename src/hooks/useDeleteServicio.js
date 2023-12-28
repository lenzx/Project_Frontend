import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const useDeleteServicio = () => {
    const deleteData = async (id) => {
        try {
            
            const confirmDelete = window.confirm('¿Seguro que quieres eliminar este servicio?');
            if (!confirmDelete) {
                return; 
            }

            const response = await axios.delete(`${API_BASE_URL}/api/v1/servicio/servicio/${id}/`);
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

export default useDeleteServicio;
