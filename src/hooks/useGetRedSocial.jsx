import { useState, useEffect } from 'react';
import axios from 'axios';
import {REDSOCIAL} from '../markay/api/endpoint.js';

const useGetRedSocial = ({id}) => {
    const [redSocial, setRedSocial] = useState([]);

    useEffect(() => {
        const getSeccion = async () => {
            const { data } = await axios.get(id ? `${REDSOCIAL}${id}/` : `${REDSOCIAL}`);
            setRedSocial(data);
        }
        getSeccion();
    }, [id]);
    return redSocial;
}
export default useGetRedSocial;