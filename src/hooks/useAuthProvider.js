import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

const useAuthProvider = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = Cookies.get('jwt');
        if (token) {
            verifyToken(token);
        } else {
            setIsAuthenticated(false);
        }
    }, []); // Empty dependency array

    const verifyToken = async (token) => {
        try {
            await axios({
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
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Error:', error);
            setIsAuthenticated(false);
        }
    };

    const login = async (token) => {
        Cookies.set('jwt', token);
        await verifyToken(token);
    };

    const logout = () => {
        Cookies.remove('jwt');
        setIsAuthenticated(false);
    };

    return { isAuthenticated, login, logout };
};

export default useAuthProvider;