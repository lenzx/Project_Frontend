import { useState, useEffect } from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../markay/api/endpoint.js';

const useGetMarkay = ({id}) => {
    const [markay, setMarkay] = useState([]);

    useEffect(() => {
        const getSeccion = async () => {
            const { data } = await axios.get(id ? `${API_BASE_URL}/api/v1/web/markay/${id}/` : `${API_BASE_URL}/api/v1/web/markay/`);
            setMarkay(data);
        }
        getSeccion();
    }, []);

    return markay;
    
}
export default useGetMarkay;