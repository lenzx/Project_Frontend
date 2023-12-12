/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../markay/api/endpoint';

const usePostEspecialistaConvenio = () => {
    const [especialistaId, setEspecialistaId] = useState("");
    const [convenioId, setConvenioId] = useState("");
    
    const postData = async (especialistaId,convenioId) => {
        try {
        const data = new FormData();
        
        data.append("especialista_id", especialistaId);
        data.append("convenio_id", convenioId);

        const response = await axios.post(`${API_BASE_URL}/api/v1/servicio/especialistaConvenio/`, data);
        console.log('Datos enviados con éxito:', response.data);
        } catch (error) {
        console.error('Error al enviar datos:', error.response ? error.response.data : error.message);
        }
    };

    return postData;
};

export default usePostEspecialistaConvenio;
