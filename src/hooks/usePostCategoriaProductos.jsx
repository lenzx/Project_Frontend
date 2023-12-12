/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostCategoriaProductos = () => {
    const [nombre, setNombre] = useState("");
    
  const postData = async (nombre) => {
    try {
      const data = new FormData();
      data.append("nombre", nombre);

      const response = await axios.post(`${API_BASE_URL}/api/v1/producto/categoria/`, data);
      console.log('Datos enviados con éxito:', response.data);
    } catch (error) {
      console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
    }
  };

  return postData;
};

export default usePostCategoriaProductos;
