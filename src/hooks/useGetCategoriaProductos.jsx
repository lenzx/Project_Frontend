import { useState, useEffect } from 'react';
import axios from 'axios';
import {CATEGORIAPRODUCTO} from '../markay/api/endpoint.js';

const useGetCategoriaProductos = () => {
    const [categoriaProducto, setCategoriaProducto] = useState([]);

    useEffect(() => {
        const getCategoriaProductos = async () => {
            const { data } = await axios.get(`${CATEGORIAPRODUCTO}`);
            setCategoriaProducto(data);
        }
        getCategoriaProductos();
    }, []);

    return categoriaProducto;
}

export default useGetCategoriaProductos;