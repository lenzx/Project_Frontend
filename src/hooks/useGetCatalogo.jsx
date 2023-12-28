import { useState, useEffect } from 'react';
import axios from 'axios';
import { PRODUCTO} from '../markay/api/endpoint.js';

const useGetCatalogo = () => {
    const [catalogo, setCatalogo] = useState([]);

    useEffect(() => {
        const getCatalogo = async () => {
            const { data } = await axios.get(`${PRODUCTO}`);
            setCatalogo(data);
        }
        getCatalogo();
    }, []);

    return catalogo;
}

export default useGetCatalogo;