/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostEspecialistaEspecialidad = () => {
    const [especialistaId, setEspecialistaId] = useState("");
    const [especialidadId, setEspecialidadId] = useState("");
    
  const postData = async (especialistaId,especialidadId) => {
    try {
      const data = new FormData();
      data.append("especialista_id", especialistaId);
      data.append("especialidad_id", especialidadId);

      const response = await axios.post(`${API_BASE_URL}/api/v1/servicio/especialistaEspecialidad/`, data);
      console.log('Datos enviados con éxito:', response.data);
    } catch (error) {
      console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
    }
  };

  return postData;
};

export default usePostEspecialistaEspecialidad;
