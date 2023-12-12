import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetCategoriaConvenio = () => {
    const [categoriaConvenio, setCategoriaConvenio] = useState([]);

    useEffect(() => {
        const getCategoriaConvenio = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/servicio/categoriaConvenio/`);
            setCategoriaConvenio(data);
        }
        getCategoriaConvenio();
    }, []);

    return categoriaConvenio;
}

export default useGetCategoriaConvenio;