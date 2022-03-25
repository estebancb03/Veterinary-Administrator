import { useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import axiosClient from '../config/axios';
import axios from 'axios';

const AuthenticationContext = createContext();
const AuthenticationProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [authentication, setAuthentication] = useState({});
    useEffect(() => {
        const authenticateUser = async () => {
            const token = localStorage.getItem('Token');
            if(!token) {
                setLoading(false);
                return;
            }
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${ token }`
                }
            }
            try {
                const url = '/veterinarians/profile';
                const { data } = await axiosClient(url, config);
                setAuthentication(data);
            } catch(exception) {
                setAuthentication({});
            }
            setLoading(false);
        }
        authenticateUser();
    }, []);
    const logOut = () => {
        localStorage.removeItem('Token');
        setAuthentication({});
    }
    const updateProfile = async info => {
        const token = localStorage.getItem('Token');
        if(!token) {
            setLoading(false);
            return;
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ token }`
            }
        }
        try {
            const url = `/veterinarians/profile/${ info._id }`;
            const { data } = await axiosClient.put(url, info, config);
            setAuthentication(data);
            return { message: 'Saved correctly' };
        } catch(exception) {
            return { message: exception.response.data.message, error: true };
        }
    }
    const savePassword = async info => {
        const token = localStorage.getItem('Token');
        if(!token) {
            setLoading(false);
            return;
        }
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ token }`
            }
        }
        try {
            const url = '/veterinarians/update-password';
            const { data } = await axiosClient.put(url, info, config);
            return { message: 'Password updated correctly' };
        } catch (exception) {
            return { message: exception.response.data.message, error: true };
        }
    }
    return(
        <AuthenticationContext.Provider value={{ 
            authentication, 
            setAuthentication, 
            loading,
            setLoading,
            logOut,
            updateProfile,
            savePassword
        }}>
            { children }
        </AuthenticationContext.Provider>
    );
}

export { AuthenticationProvider }
export default AuthenticationContext;