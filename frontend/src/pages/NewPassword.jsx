import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Alert from "../components/Alert";
import axiosClient from "../config/axios";

const NewPassword = () => {
    const [alert, setAlert] = useState({});
    const [password, setPassword] = useState('');
    const [validToken, setValidToken] = useState(false);
    const [modifiedPassword, setModifiedPassword] = useState(false);
    const params = useParams();
    const { token } = params;
    useEffect(() => {
        const checkToken = async () => {
            try {
                await axiosClient(`/veterinarians/recover-password/${ token }`);
                setAlert({ message: 'Type your new password' });
                setValidToken(true);
            } catch(exception) {
                setAlert({ message: exception.response.data.message, error: true });
            }
        }
        checkToken();
    }, []);
    const handleSubmit = async e => {
        e.preventDefault();
        if(password.length < 6) {
            setAlert({ message: 'The password is too short', error: true });
            return;
        }  
        try {
            const url = `/veterinarians/recover-password/${ token }`
            const { data } = await axiosClient.post(url, { password });
            setAlert({ message: data.message, error: false });
            setModifiedPassword(true);
        } catch(exception) {
            setAlert({ message: exception.response.data.message, error: true });
        }
    }
    const { message } = alert;
    return (
        <>
            <div>
            <h1 className="text-indigo-600 font-black text-6xl">
                Recover your access and don't lose your 
                <span className="text-black"> Patients</span>
            </h1>  
            </div>
            <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
                { message && <Alert alert={ alert } /> }
                { validToken && 
                    <form onSubmit={ handleSubmit }>
                        <div className="my-5">
                            <label
                            className="uppercase text-gray-600 block text-xl font-bold"
                            >
                            New password
                            </label>
                            <input 
                            type="password"
                            placeholder="Your new password" 
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={ password }
                            onChange={ e => setPassword(e.target.value) }
                            />
                        </div>
                        <input 
                            type="submit" 
                            value="Save new password"
                            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase 
                                    font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"  
                        />
                    </form> 
                }
                { modifiedPassword && 
                    <Link 
                    className="block text-center my-5 text-gray-500 hover:text-gray-600"
                    to="/">Log in</Link>
                }
            </div>
        </>
    );
}

export default NewPassword