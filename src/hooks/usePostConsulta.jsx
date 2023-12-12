/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostConsulta = () => {
    const [nombre, setNombre] = useState("");
    const [correo_electronico, setCorreo_electronico] = useState("");
    const [num_telefono, setNum_telefono]= useState("")
    const [motivo_consulta, setMotivo_consulta] = useState("")
    
    
  const postData = async (nombre, correo_electronico,num_telefono, motivo_consulta) => {
    try {
      const data = new FormData();
      data.append("nombre", nombre);
      data.append("correo_electronico",correo_electronico)
      data.append("num_telefono", num_telefono);
      data.append("motivo_consulta",motivo_consulta)

      const response = await axios.post(`${API_BASE_URL}/api/v1/servicio/consulta/`, data);
      console.log('Datos enviados con éxito:', response.data);
    } catch (error) {
      console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
    }
  };

  return postData;
};

export default usePostConsulta;
