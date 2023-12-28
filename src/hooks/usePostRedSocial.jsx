
import axios from 'axios';
import { REDSOCIAL  } from '../markay/api/endpoint';
import Cookies from 'js-cookie';

const usePostRedSocial = () => {
 
    
  const postData = async (imagen, enlace, texto) => {
    try {
      const data = new FormData();
      data.append("imagen", imagen);
      data.append("enlace", enlace);
      data.append("texto", texto);

      // Obtén el token de las cookies
      const token = Cookies.get('jwt');

      const response = await axios.post(`${REDSOCIAL}`, data, {
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

export default usePostRedSocial;
