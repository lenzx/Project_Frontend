import { useState, useEffect } from 'react';
import axios from 'axios';
import {CATEGORIAPRODUCTO} from '../markay/api/endpoint.js';

const useGetProductoCategoria = () => {
    const [productoCategoria, setProductoCategoria] = useState([]);

    useEffect(() => {
        const getCategoriaConvenio = async () => {
            const { data } = await axios.get(`${CATEGORIAPRODUCTO}`);
            setProductoCategoria(data);
        }
        getCategoriaConvenio();
    }, []);

    return productoCategoria;
}

export default useGetProductoCategoria;