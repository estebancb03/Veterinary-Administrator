import { useState } from "react";
import Alert from './Alert';

const Form = () => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [symptom, setSymptom] = useState('');
    const [alert, setAlert] = useState({});
    const { message } = alert;
    const handleSubmit = e => {
        e.preventDefault();
        //Form validate
        if([name, owner, email, date, symptom].includes('')) {
            setAlert({ message: 'All fields are required', error: true });
            return;
        }
    }

    return (
        <>
            <p className="text-lg text-center mb-10">
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
                    value="Add patient"
                />
            </form>
            { message && <Alert alert={ alert } /> }
        </>
    );
}

export default Form