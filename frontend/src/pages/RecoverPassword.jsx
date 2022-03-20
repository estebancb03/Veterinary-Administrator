import { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import axiosClient from '../config/axios';

const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({});
  const handleSubmit = async e => {
    e.preventDefault();
    if(email === '' || email.length < 6) {
      setAlert({ message: 'Email is required', error: true });
    }
    try {
      const { data } = await axiosClient.post('/veterinarians/recover-password', { email });
      setAlert({ message: data.message, error: false });
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
        { message && <Alert alert={ alert }/>}
        <form onSubmit={ handleSubmit }>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Email
            </label>
            <input 
              type="email"
              placeholder="Registration email" 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={ email }
              onChange={ e => setEmail(e.target.value) }
            />
          </div>

          <input 
            type="submit" 
            value="Send email"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase 
                       font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"  
          />

          <nav className="mt-10 lg:flex lg:justify-between">
            <Link 
              className="block text-center my-5 text-gray-500 hover:text-gray-600"
              to="/">Do you already have an account? Log in</Link>
            <Link 
              className="block text-center my-5 text-gray-500 hover:text-gray-600"
              to="/register">You don't have an account? Sign up</Link>
          </nav>
        </form>
      </div>
    </>
  );
}

export default RecoverPassword