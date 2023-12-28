import Cookies from 'js-cookie';
import axios from 'axios';
import { MARKAY } from '../markay/api/endpoint';

const useDeleteMarkay = () => {
    const deleteData = async (id) => {
        try {

            const confirmDelete = window.confirm('¿Seguro que quieres eliminar este dato?');
            if (!confirmDelete) {
                return; 
            }
            const token = Cookies.get('jwt');
            const response = await axios.delete(`${MARKAY}${id}/`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }});
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

export default useDeleteMarkay;
