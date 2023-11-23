import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetCatalogo = () => {
    const [catalogo, setCatalogo] = useState([]);

    useEffect(() => {
        const getCatalogo = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/producto/`);
            setCatalogo(data);
        }
        getCatalogo();
    }, []);

    return catalogo;
}

export default useGetCatalogo;