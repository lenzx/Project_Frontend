import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetEspecialistaConvenio = () => {
    const [especialistaConvenios, setEspecialistaConvenios] = useState([]);

    useEffect(() => {
        const getEspecialistasConvenio = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/servicio/especialistaConvenio/`);
            setEspecialistaConvenios(data);
        }
        getEspecialistasConvenio();
    }, []);

    return especialistaConvenios;
}

export default useGetEspecialistaConvenio;