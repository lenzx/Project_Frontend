/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostRedSocial = () => {
    const [imagen, setImagen] = useState(null);
    const [enlace, setEnlace] = useState("");
    const [texto, setTexto] = useState("");
    
    
  const postData = async (imagen, enlace, texto) => {
    try {
      const data = new FormData();
      data.append("imagen", imagen);
      data.append("enlace", enlace);
      data.append("texto", texto);

      const response = await axios.post(`${API_BASE_URL}/api/v1/web/redSocial/`, data);
      console.log('Datos enviados con éxito:', response.data);
    } catch (error) {
      console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
    }
  };

  return postData;
};

export default usePostRedSocial;
