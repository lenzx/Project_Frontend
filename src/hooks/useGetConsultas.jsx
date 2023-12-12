import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetConsultas = () => { 
    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        const getConsultas = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/servicio/consulta/`);
            setConsultas(data);
        }
        getConsultas();
    }, []);

    return consultas;

}

export default useGetConsultas
