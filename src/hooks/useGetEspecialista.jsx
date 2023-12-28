import { useState, useEffect } from 'react';
import axios from 'axios';
import {ESPECIALISTA} from '../markay/api/endpoint.js';

const useGetEspecialista = () => {
    const [especialistas, setEspecialistas] = useState([]);

    useEffect(() => {
        const getEspecialistas = async () => {
            const { data } = await axios.get(`${ESPECIALISTA}`);
            setEspecialistas(data);
        }
        getEspecialistas();
    }, []);

    return especialistas;
}

export default useGetEspecialista;