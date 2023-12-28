
import axios from 'axios';
import { CONSULTA  } from '../markay/api/endpoint';
import Cookies from 'js-cookie';

const usePostConsulta = () => {
  
  const postData = async (nombre, correo_electronico, num_telefono, motivo_consulta, especialistaId) => {
    try {
      const idEntero = parseInt(especialistaId, 10);
      const data = new FormData();
      data.append("nombre", nombre);
      data.append("correo_electronico", correo_electronico);
      data.append("num_telefono", num_telefono);
      data.append("motivo_consulta", motivo_consulta);
      data.append("especialista_id", idEntero);

      // Obtén el token de las cookies
      const token = Cookies.get('jwt');

      const response = await axios.post(`${CONSULTA}`, data, {
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

export default usePostConsulta;
