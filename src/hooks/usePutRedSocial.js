import { REDSOCIAL } from '../markay/api/endpoint';
import Cookies from 'js-cookie';
import axios from 'axios';



const usePutRedSocial = () => {
    
    const putData = async (id,imagen,enlace,texto) => {
        try {
            const data = new FormData();
            data.append("imagen", imagen);
            data.append("enlace", enlace);
            data.append("texto", texto);

            // Obtén el token de las cookies
            const token = Cookies.get('jwt');

            const response = await axios.put(`${REDSOCIAL}${id}/`, data, {
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