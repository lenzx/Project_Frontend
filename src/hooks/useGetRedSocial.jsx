import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetRedSocial = () => {
    const [redSocial, setRedSocial] = useState([]);

    useEffect(() => {
        const getSeccion = async () => {
            const { data } = await axios.get(`${API_BASE_URL}/api/v1/web/redSocial/`);
            setRedSocial(data);
        }
        getSeccion();
    }, []);
    return redSocial;
}
export default useGetRedSocial;