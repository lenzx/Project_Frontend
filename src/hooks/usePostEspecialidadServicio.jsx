/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostEspecialidadServicio = () => {
    const [servicioId, setServicioId] = useState("");
    const [especialidadId, setEspecialidadId] = useState("");
    
    const postData = async (servicioId,especialidadId) => {
        try {
        const data = new FormData();
        
        data.append("servicio_id", servicioId);
        data.append("especialidad_id", especialidadId);

        const response = await axios.post(`${API_BASE_URL}/api/v1/servicio/especialidadServicio/`, data);
        console.log('Datos enviados con éxito:', response.data);
        } catch (error) {
        console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
        }
    };

    return postData;
};

export default usePostEspecialidadServicio;
