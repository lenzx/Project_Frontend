import { useState, useEffect } from 'react';
import axios from 'axios';
import {ESPECIALIDAD} from '../markay/api/endpoint.js';

const useGetEspecialidades = () => {
    const [especialidades, setEspecialidades] = useState([]);

    useEffect(() => {
        const getEspecialidades = async () => {
            const { data } = await axios.get(`${ESPECIALIDAD}`);
            setEspecialidades(data);
        }
        getEspecialidades();
    }, []);

    return especialidades;
}

export default useGetEspecialidades;