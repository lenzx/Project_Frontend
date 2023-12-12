/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostSeccion = () => {
    const [titulo, setTitulo] = useState(null);
    const [descripcion, setDescripcion] = useState("");
    
    
  const postData = async (titulo, descripcion) => {
    try {
      const data = new FormData();
      data.append("titulo", titulo);
      data.append("descripcion", descripcion);

      const response = await axios.post(`${API_BASE_URL}/api/v1/web/seccion/`, data);
      console.log('Datos enviados con éxito:', response.data);
    } catch (error) {
      console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
    }
  };

  return postData;
};

export default usePostSeccion;
