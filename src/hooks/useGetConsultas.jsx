import { useState, useEffect } from 'react';
import axios from 'axios';
import {CONSULTA} from '../markay/api/endpoint.js';

const useGetConsultas = () => { 
    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        const getConsultas = async () => {
            const { data } = await axios.get(`${CONSULTA}`);
            setConsultas(data);
        }
        getConsultas();
    }, []);

    return consultas;

}

export default useGetConsultas
