
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const useAuthProvider = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); 

    const verifyToken = async (token) => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:8000/api/v1/custom_auth/verify/',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                data: {
                    token: token
                }
            });

            if (response.data.detail) {
                setIsAuthenticated(false);
            } else if (response.data.valid) {
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error('Error:', error);
            setIsAuthenticated(false);
            console.log(error.response.data);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        const token = Cookies.get('jwt');
        if (token) {
            verifyToken(token);
        } else {
            setIsAuthenticated(false);
            setLoading(false); 
        }
    }, []); 

    const login = async (token) => {
        Cookies.set('jwt', token);
        await verifyToken(token);
    };

    const logout = () => {
        Cookies.remove('jwt');
        setIsAuthenticated(false);
    };

    return { isAuthenticated, login, logout, loading }; 
};

export default useAuthProvider;