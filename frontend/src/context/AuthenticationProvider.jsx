import { useNavigate } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react';
import axiosClient from '../config/axios';

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

    return(
        <AuthenticationContext.Provider value={{ 
            authentication, 
            setAuthentication, 
            loading,
            setLoading,
            logOut
        }}>
            { children }
        </AuthenticationContext.Provider>
    );
}

export { AuthenticationProvider }
export default AuthenticationContext;