import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';
const useGetConvenios = () => { 
    const [convenios, setConvenios] = useState([]);

    useEffect(() => {
        const getConvenios = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/convenios/`);
            setConvenios(data);
        }
        getConvenios();
    }, []);

    return convenios;

}

export default useGetConvenios
