import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetEspecialidades = () => {
    const [especialidades, setEspecialidades] = useState([]);

    useEffect(() => {
        const getEspecialidades = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/servicio/especialidad/`);
            setEspecialidades(data);
        }
        getEspecialidades();
    }, []);

    return especialidades;
}

export default useGetEspecialidades;