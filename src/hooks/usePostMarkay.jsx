/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostMarkay = () => {
    const [imagen, setImagen] = useState(null);
    const [descripcion, setDescripcion] = useState("");
    
    
  const postData = async (imagen, descripcion) => {
    try {
      const data = new FormData();
      data.append("descripcion", descripcion);
      data.append("imagen", imagen ? imagen:null);

      const response = await axios.post(`${API_BASE_URL}/api/v1/web/markay/`, data);
      console.log('Datos enviados con éxito:', response.data);
    } catch (error) {
      console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
    }
  };

  return postData;
};

export default usePostMarkay;
