
import axios from 'axios';
import { CONVENIO  } from '../markay/api/endpoint';
import Cookies from 'js-cookie';
const usePostConvenio = () => {


  const postData = async (nombre, descripcion,enlace,direccion,imagen,num_telefono, tipo_convenio_id) => {
    try {
      const data = new FormData();
      data.append("nombre", nombre);
      data.append("descripcion", descripcion);
      data.append("enlace",enlace);
      data.append("direccion", direccion)
      data.append("imagen", imagen);
      data.append("num_telefono", num_telefono);
      data.append("tipo_convenio_id",tipo_convenio_id)
      for (var pair of data.entries()) {
        console.log(pair[0]+ ', ' + pair[1]); 
    }

      // Obtén el token de las cookies
      const token = Cookies.get('jwt');
      
      const response = await axios.post(`${CONVENIO}`, data, {
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

export default usePostConvenio;
