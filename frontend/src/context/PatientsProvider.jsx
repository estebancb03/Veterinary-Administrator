import { useState, useEffect, createContext } from "react";
import axiosClient from "../config/axios";

const PatientsContext = createContext();
const PatientsProvider = ({ children }) => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        const getPatients = async () => {
            try {
                const token = localStorage.getItem('Token');
                if(!token) return;
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${ token }`
                    }
                }
                const url = '/patients';
                const { data } = await axiosClient(url, config);
                setPatients(data);
            } catch(exception) {
                console.error(exception);
            }
        }
        getPatients();
    }, []);
    const savePatient = async patient => {
        try {
            const token = localStorage.getItem('Token');
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${ token }`
                }
            }
            const url = '/patients';
            const { data } = await axiosClient.post(url, patient, config);
            const { createdAt, updatedAt, __v, ...savedPatient } = data;
            const array = [savedPatient, ...patients];
            setPatients(array);
        } catch(exception) {
            console.error(exception.response.data.message);
        }
    }
    return (
        <PatientsContext.Provider value={{
            patients,
            savePatient
        }}>
            { children }
        </PatientsContext.Provider>
    );
}

export { PatientsProvider }
export default PatientsContext;