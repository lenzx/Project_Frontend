import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetEspecialdadServicio = () => {
    const [especialdadServicio, setEspecialdadServicio] = useState([]);

    useEffect(() => {
        const getEspecialdadServicio = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/servicio/especialidadServicio/`);
            setEspecialdadServicio(data);
        }
        getEspecialdadServicio();
    }, []);

    return especialdadServicio;
}

export default useGetEspecialdadServicio;