import { useState, useEffect, createContext } from "react";
import axiosClient from "../config/axios";

const PatientsContext = createContext();
const PatientsProvider = ({ children }) => {
    const [patients, setPatients] = useState([]);
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
            setPatients([savedPatient, ...patients]);
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