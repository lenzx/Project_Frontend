import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetSeccion = () => {
    const [secciones, setSecciones] = useState([]);

    useEffect(() => {
        const getSeccion = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/web/seccion/`);
            setSecciones(data);
        }
        getSeccion();
    }, []);
    return secciones;
}
export default useGetSeccion;