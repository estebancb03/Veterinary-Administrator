import { useState, useEffect } from "react";
import Alert from './Alert';
import usePatients from '../hooks/usePatients';

const Form = () => {
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptom, setSymptom] = useState('');
    const [alert, setAlert] = useState({});
    const { message } = alert;
    const { savePatient, patient } = usePatients();

    useEffect(() => { 
        if(patient?.name) {
            setId(patient._id);
            setName(patient.name);
            setOwner(patient.owner);
            setEmail(patient.email);
            setDate(patient.date);
            setSymptom(patient.symptom);
        }
    }, [patient]);

    const handleSubmit = e => {
        e.preventDefault();
        //Form validate
        if([name, owner, email, date, symptom].includes('')) {
            setAlert({ message: 'All fields are required', error: true });
            return;
        }
        savePatient({ name, owner, email, date, symptom, id });
        setAlert({ message: 'Patient save correctly', error: false });
        setName('');
        setOwner('');
        setEmail('');
        setDate('');
        setSymptom('');
    }

    return (
        <>
            <h2 className='font-black text-3xl text-center'>Patients Administrator</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Add your patients and { '' }
                <span className="text-indigo-600 font-bold">manage them</span>
            </p>
            <form
                className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
                onSubmit={ handleSubmit }
            >
                <div className="mb-5">
                    <label 
                        htmlFor="name"
                        className="text-gray-700 uppercase font-bold"
                    >Pet's name</label>
                    <input 
                        id="name"
                        type="text"
                        placeholder="Pet's name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ name }
                        onChange={ e => setName(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="owner"
                        className="text-gray-700 uppercase font-bold"
                    >Owner's name</label>
                    <input 
                        id="owner"
                        type="text"
                        placeholder="Owner's name"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ owner }
                        onChange={ e => setOwner(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="email"
                        className="text-gray-700 uppercase font-bold"
                    >Owner's email</label>
                    <input 
                        id="email"
                        type="text"
                        placeholder="Owner's email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ email }
                        onChange={ e => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="date"
                        className="text-gray-700 uppercase font-bold"
                    >Date</label>
                    <input 
                        id="date"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ date }
                        onChange={ e => setDate(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label 
                        htmlFor="symptom"
                        className="text-gray-700 uppercase font-bold"
                    >Symptom</label>
                    <textarea 
                        id="email"
                        placeholder="Describe the symptom"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={ symptom }
                        onChange={ e => setSymptom(e.target.value) }
                    />
                </div>
                <input 
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={ id ? 'Save changes' : 'Add patient' }
                />
            </form>
            <div className="mt-5">
                { message && <Alert alert={ alert } /> }
            </div>
        </>
    );
}

export default Form