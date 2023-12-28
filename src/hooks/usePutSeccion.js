import axios from 'axios';
import { SECCION } from '../markay/api/endpoint';
import Cookies from 'js-cookie';

const usePutRedSocial = () => {
    
    const putData = async (id,titulo, descripcion) => {
        try {
            const data = new FormData();
            data.append("titulo", titulo);
            data.append("descripcion", descripcion);

            const token = Cookies.get('jwt');

            const response = await axios.put(`${SECCION}${id}/`, data, {
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

export default usePutRedSocial;