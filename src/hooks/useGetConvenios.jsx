import { useState, useEffect } from 'react';
import axios from 'axios';
const useGetConvenios = () => { 
    const [convenios, setConvenios] = useState([]);

    useEffect(() => {
        const getConvenios = async () => {
<<<<<<< HEAD
            const { data } = await axios.get(`http://54.233.113.213/api/v1/convenios/`);
=======
            const { data } = await axios.get(`http://54.94.65.18:8000/api/v1/convenios/`);
>>>>>>> 74e1178b6d9c86b3a7d21030d00f406469519c94
            setConvenios(data);
        }
        getConvenios();
    }, []);

    return convenios;

}

export default useGetConvenios
