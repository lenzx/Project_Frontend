import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetEspecialista = () => {
    const [especialistas, setEspecialistas] = useState([]);

    useEffect(() => {
        const getEspecialistas = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/especialista/`);
            setEspecialistas(data);
        }
        getEspecialistas();
    }, []);

    return especialistas;
}

export default useGetEspecialista;