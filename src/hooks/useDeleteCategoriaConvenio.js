import axios from 'axios';
import { CATEGORIACONVENIO } from '../markay/api/endpoint';
import Cookies from 'js-cookie';

const useDeleteCategoriaConvenio = () => {
    const deleteData = async (id) => {
        try {
            const confirmDelete = window.confirm('¿Seguro que quieres eliminar esta categoría de convenio?');
            if (!confirmDelete) {
                return; 
            }

            const token = Cookies.get('jwt');
            const response = await axios.delete(`${CATEGORIACONVENIO}${id}/`,{
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

export default useDeleteCategoriaConvenio;



