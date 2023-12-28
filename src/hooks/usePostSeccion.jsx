/* eslint-disable no-unused-vars */

import axios from 'axios';
import { SECCION  } from '../markay/api/endpoint';
import Cookies from 'js-cookie';

const usePostSeccion = () => {
   
    
  const postData = async (titulo, descripcion) => {
    try {
      const data = new FormData();
      data.append("titulo", titulo);
      data.append("descripcion", descripcion);



      // Obtén el token de las cookies
      const token = Cookies.get('jwt');

      const response = await axios.post(`${SECCION}`, data, {
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

export default usePostSeccion;
