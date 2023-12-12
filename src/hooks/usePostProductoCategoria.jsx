/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostProductoCategoria = () => {
    const [categoriaId, setCategoriaId] = useState("");
    const [productoId, setProductoId] = useState("");
    
  const postData = async (categoriaId,productoId) => {
    try {
      const data = new FormData();
      data.append("categoria_id", categoriaId);
      data.append("producto_id", productoId);

      const response = await axios.post(`${API_BASE_URL}/api/v1/producto/productoCategoria/`, data);
      console.log('Datos enviados con éxito:', response.data);
    } catch (error) {
      console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
    }
  };

  return postData;
};

export default usePostProductoCategoria;
