
import axios from 'axios';
import { CATEGORIACONVENIO } from '../markay/api/endpoint';
import Cookies from 'js-cookie';

const usePostCategoriaConvenio = () => {

    
  const postData = async (nombre) => {
    try {
      const data = new FormData();
      data.append("nombre", nombre);

      // Obtén el token de las cookies
      const token = Cookies.get('jwt');

      const response = await axios.post(`${CATEGORIACONVENIO}`, data, {
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

export default usePostCategoriaConvenio;
