import { useState, useEffect } from 'react';
import axios from 'axios';
// process.env.REACT_APP_API_URL
const useGetConvenios = () => { 
    const [convenios, setConvenios] = useState([]);

    useEffect(() => {
        const getConvenios = async () => {
            const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products`);
            setConvenios(data);
        }
        getConvenios();
    }, []);

    return convenios;

}

export default useGetConvenios
