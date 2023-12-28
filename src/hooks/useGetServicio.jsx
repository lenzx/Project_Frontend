import { useState, useEffect } from 'react';
import axios from 'axios';
import {SERVICIO} from '../markay/api/endpoint.js';

const useGetServicio = () => {
    const [servicios, setServicios] = useState([]);

    useEffect(() => {
        const getServicios = async () => {
            const { data } = await axios.get(`${SERVICIO}`);
            setServicios(data);
        }
        getServicios();
    }, []);
    return servicios;
}
export default useGetServicio;