import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetCategoriaProductos = () => {
    const [categoriaProducto, setCategoriaProducto] = useState([]);

    useEffect(() => {
        const getCategoriaProductos = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/producto/categoria/`);
            setCategoriaProducto(data);
        }
        getCategoriaProductos();
    }, []);

    return categoriaProducto;
}

export default useGetCategoriaProductos;