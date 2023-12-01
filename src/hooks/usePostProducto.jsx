import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostProducto = () => {
    const [nombre, setNombre] = useState("");
    const [descripcionCorta, setDescripcionCorta] = useState("");
    const [descripcionLarga, setDescripcionLarga] = useState("");
    const [valor, setValor] = useState(0);
    const [necesitaReceta, setNecesitaReceta] = useState(1);
    const [imagen, setImagen] = useState(null);
    
  const postData = async (nombre, descripcionCorta,descripcionLarga, valor, necesitaReceta, imagen) => {
    try {
      const data = new FormData();
      data.append("nombre", nombre);
      data.append("descripcion_corta", descripcionCorta);
      data.append("descripcion_larga", descripcionLarga);
      data.append("valor", valor);
      data.append("necesitaReceta", necesitaReceta);
      data.append("imagen", imagen);

      const response = await axios.post(`${API_BASE_URL}/api/v1/producto/`, data);
      console.log('Datos enviados con éxito:', response.data);
    } catch (error) {
      console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
    }
  };

  return postData;
};

export default usePostProducto;
