
import axios from 'axios';
import { ESPECIALIDAD  } from '../markay/api/endpoint';
import Cookies from 'js-cookie';
const usePostEspecialidad = () => {
    
    
    const postData = async (nombre,descripcion,imagen) => {
        try {
        const data = new FormData();
        
        data.append("nombre", nombre);
        data.append("descripcion", descripcion);
        data.append("imagen", imagen);

        // Obtén el token de las cookies
      const token = Cookies.get('jwt');

      const response = await axios.post(`${ESPECIALIDAD}`, data, {
        headers: {
            // Incluye el token en las cabeceras de la solicitud
            'Authorization': `Bearer ${token}`
        }
    });
        console.log('Datos enviados con éxito:', response.data);
        } catch (error) {
        console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
        }
    };

    return postData;
};

export default usePostEspecialidad;
