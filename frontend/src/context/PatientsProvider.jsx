import { useState, useEffect, createContext } from "react";
import axiosClient from "../config/axios";

const PatientsContext = createContext();
const PatientsProvider = ({ children }) => {
    const [patients, setPatients] = useState([]);
    const [patient, setPatient] = useState({});
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
        const token = localStorage.getItem('Token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${ token }`
            }
        }
        if(patient.id) {
            try {
                const url = `/patients/${ patient.id }`;
                const { data } = await axiosClient.put(url, patient, config);
                const updatedPatients = patients.map(statePatient => statePatient._id === data._id ? data : statePatient);
                setPatients(updatedPatients);
            } catch (exception) {
                console.error(exception.response.data.message);
            }
        } else {
            try {
                const url = '/patients';
                const { data } = await axiosClient.post(url, patient, config);
                const { createdAt, updatedAt, __v, ...savedPatient } = data;
                const array = [savedPatient, ...patients];
                setPatients(array);
            } catch(exception) {
                console.error(exception.response.data.message);
            }
        }
    }
    const editPatient = async patient => {
        setPatient(patient);
    }
    const deletePatient = id => {
        const toConfirm = confirm('Do you want to delete this patient?');
        if(toConfirm) {
            try {
                const token = localStorage.getItem('Token');
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${ token }`
                    }
                }
                const url = `/patients/${ id }`
                const { data } = axiosClient.delete(url, config);
                const updatedPatients = patients.filter(statePatient => statePatient._id !== id);
                setPatients(updatedPatients);
            } catch (exception) {
                console.error(exception);
            }
        }
    }
    return (
        <PatientsContext.Provider value={{
            patient,
            patients,
            savePatient,
            editPatient, 
            deletePatient
        }}>
            { children }
        </PatientsContext.Provider>
    );
}

export { PatientsProvider }
export default PatientsContext;