import { useState, useEffect } from 'react';
import axios from 'axios';
import {CATEGORIACONVENIO} from '../markay/api/endpoint.js';

const useGetCategoriaConvenio = () => {
    const [categoriaConvenio, setCategoriaConvenio] = useState([]);

    useEffect(() => {
        const getCategoriaConvenio = async () => {
            const { data } = await axios.get(`${CATEGORIACONVENIO}`);
            setCategoriaConvenio(data);
        }
        getCategoriaConvenio();
    }, []);

    return categoriaConvenio;
}

export default useGetCategoriaConvenio;