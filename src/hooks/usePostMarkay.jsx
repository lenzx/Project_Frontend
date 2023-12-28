
import axios from 'axios';
import { MARKAY  } from '../markay/api/endpoint';
import Cookies from 'js-cookie';

const usePostMarkay = () => {
    
    
    
  const postData = async (imagen, descripcion) => {
    try {
      const data = new FormData();
      data.append("descripcion", descripcion);
      data.append("imagen", imagen ? imagen:null);

      // Obtén el token de las cookies
      const token = Cookies.get('jwt');

      const response = await axios.post(`${MARKAY}`, data, {
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

export default usePostMarkay;
