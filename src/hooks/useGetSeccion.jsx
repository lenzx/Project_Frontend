

// useGetSeccion.jsx
import { API_BASE_URL } from '../markay/api/endpoint.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetSeccion = ({ id }) => {
    const [seccion, setSeccion] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.get(id ? `${API_BASE_URL}/api/v1/web/seccion/${id}/` : `${API_BASE_URL}/api/v1/web/seccion/`);
            setSeccion(response.data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return {
        seccion,
        isLoading,
        error,
    };
};

export default useGetSeccion;
