import { useState, useEffect } from 'react';
import axios from 'axios';
const useGetConvenios = () => { 
    const [convenios, setConvenios] = useState([]);

    useEffect(() => {
        const getConvenios = async () => {
            const { data } = await axios.get(`http://54.233.113.213/api/v1/convenios/`);
            setConvenios(data);
        }
        getConvenios();
    }, []);

    return convenios;

}

export default useGetConvenios
