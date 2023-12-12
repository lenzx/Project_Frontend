import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetServicio = () => {
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        const getServicios = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/servicio/servicio/`);
            setServicios(data);
        }
        getServicios();
    }, []);
    return servicios;
}
export default useGetServicio;