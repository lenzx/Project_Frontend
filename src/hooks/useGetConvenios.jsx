import { useState, useEffect } from 'react';
import axios from 'axios';
// process.env.REACT_APP_API_URL
const useGetConvenios = () => { 
    const [convenios, setConvenios] = useState([]);

    useEffect(() => {
        const getConvenios = async () => {
            const { data } = await axios.get(`https://54.94.65.18:8000/api/v1/convenios/`);
            setConvenios(data);
        }
        getConvenios();
    }, []);

    return convenios;

}

export default useGetConvenios
