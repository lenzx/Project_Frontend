/* eslint-disable no-unused-vars */
import { useState } from 'react';
import axios from 'axios';
import { CONSULTA  } from '../markay/api/endpoint';

const usePostConsulta = () => {
  const [nombre, setNombre] = useState("");
  const [correo_electronico, setCorreo_electronico] = useState("");
  const [num_telefono, setNum_telefono]= useState("");
  const [motivo_consulta, setMotivo_consulta] = useState("");

  const postData = async (nombre, correo_electronico, num_telefono, motivo_consulta, especialistaId) => {
    try {
      const idEntero = parseInt(especialistaId, 10);
      const data = new FormData();
      data.append("nombre", nombre);
      data.append("correo_electronico", correo_electronico);
      data.append("num_telefono", num_telefono);
      data.append("motivo_consulta", motivo_consulta);
      data.append("especialista_id", idEntero);

      const response = await axios.post(`${CONSULTA}`, data);
      console.log('Datos enviados con éxito:', response.data);
      alert('Consulta enviada con éxito');

    } catch (error) {
      console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
      alert("Datos ingresados invalidos")
    }
  };

  return postData;
};

export default usePostConsulta;

