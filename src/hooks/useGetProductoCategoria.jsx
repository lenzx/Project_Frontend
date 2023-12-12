import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetProductoCategoria = () => {
    const [productoCategoria, setProductoCategoria] = useState([]);

    useEffect(() => {
        const getCategoriaConvenio = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/producto/productoCategoria/`);
            setProductoCategoria(data);
        }
        getCategoriaConvenio();
    }, []);

    return productoCategoria;
}

export default useGetProductoCategoria;