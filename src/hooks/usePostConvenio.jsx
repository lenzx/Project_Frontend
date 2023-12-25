/* eslint-disable no-unused-vars */
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostConvenio = () => {


  const postData = async (nombre, descripcion,enlace,imagen,num_telefono, tipo_convenio_id) => {
    try {
      const data = new FormData();
      data.append("nombre", nombre);
      data.append("descripcion", descripcion);
      data.append("enlace",enlace);
      data.append("imagen", imagen);
      data.append("num_telefono", num_telefono);
      data.append("tipo_convenio_id",tipo_convenio_id)

      const response = await axios.post(`${API_BASE_URL}/api/v1/servicio/convenios/`, data);
      console.log('Datos enviados con éxito:', response.data);
    } catch (error) {
      console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
    }
  };

  return postData;
};

export default usePostConvenio;
