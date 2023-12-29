import { useState, useEffect } from 'react';
import axios from 'axios';
import {CONVENIO} from '../markay/api/endpoint.js';

const useGetConvenios = ({id}) => { 
    const [convenios, setConvenios] = useState([]);

    useEffect(() => {
        const getConvenios = async () => {
            const { data } = await axios.get(id ? `${CONVENIO}${id}/` : `${CONVENIO}`);
            setConvenios(data);
        }
        getConvenios();
    }, []);

    return convenios;

}

export default useGetConvenios
