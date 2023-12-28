import { useState, useEffect } from 'react';
import axios from 'axios';
import {MARKAY} from '../markay/api/endpoint.js';

const useGetMarkay = ({id}) => {
    const [markay, setMarkay] = useState([]);

    useEffect(() => {
        const getSeccion = async () => {
            const { data } = await axios.get(id ? `${MARKAY}${id}/` : `${MARKAY}`);
            setMarkay(data);
        }
        getSeccion();
    }, []);

    return markay;
    
}
export default useGetMarkay;