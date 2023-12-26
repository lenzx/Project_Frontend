import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetEspecialistaEspecialidad = () => {
    const [especialistaEspecialidad, setEspecialistaEspecialidad] = useState([]);

    useEffect(() => {
        const getEspecialistaEspecialidad = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/servicio/especialistaEspecialidad/`);
            setEspecialistaEspecialidad(data);
        }
        getEspecialistaEspecialidad();
    }, []);

    return especialistaEspecialidad;
}

export default useGetEspecialistaEspecialidad;