/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostProducto = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [valor, setValor] = useState(0);
    const [necesitaReceta, setNecesitaReceta] = useState(1);
    const [imagen, setImagen] = useState(null);
    const [categoria, setCategoria]= useState("");
    
  const postData = async (nombre, descripcion, valor, necesitaReceta, imagen,categoria) => {
    try {
      const data = new FormData();
      data.append("nombre", nombre);
      data.append("descripcion", descripcion);
      data.append("valor", valor);
      data.append("necesitaReceta", necesitaReceta);
      data.append("imagen", imagen);
      categoria.forEach(id => data.append("categoria", id));


      const response = await axios.post(`${API_BASE_URL}/api/v1/producto/producto/`, data);
      if (!response.status.toString().startsWith('2')) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      console.log('Datos enviados con éxito:', response.data);
    } catch (error) {
      console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
    }
  };

  return postData;
};

export default usePostProducto;
