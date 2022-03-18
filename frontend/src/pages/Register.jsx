import { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import axiosClient from '../config/axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');
  const [alert, setAlert] = useState({});
  const handleSubmit = async e => {
    e.preventDefault();
    if([name, email, password, repeatedPassword].includes('')) {
      setAlert({ message: 'There are empty fields', error: true });
      console.log(alert);
      return;
    }
    if(password !== repeatedPassword) {
      setAlert({ message: 'The passwords are not equal', error: true });
      return;
    }
    if(password.length < 6) {
      setAlert({ message: 'The password is too short', error: true });
      return;
    }
    setAlert({});
    try {
      const url = `/veterinarians`;
      await axiosClient.post(url, { name, email, password });
      setAlert({ message: 'User created successfully, check your email', error: false });
    } catch(exception) {
      setAlert({ message: exception.response.data.message , error: true });
    }
  }
  const { message } = alert;
  return (
    <>
      <div>
          <h1 className="text-indigo-600 font-black text-6xl">
            Create an account and Manage your 
            <span className="text-black"> Patients</span>
          </h1>  
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        { message && <Alert alert={ alert } />}
        <form onSubmit={ handleSubmit }> 
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Name
            </label>
            <input 
              type="text"
              placeholder="Your name" 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={ name }
              onChange={ e => setName(e.target.value) }
            />
          </div>
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
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Password
            </label>
            <input 
              type="password"
              placeholder="Your password" 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={ password }
              onChange={ e => setPassword(e.target.value) }
            />
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Repeat your password
            </label>
            <input 
              type="password"
              placeholder="Your password" 
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={ repeatedPassword }
              onChange={ e => setRepeatedPassword(e.target.value) }
            />
          </div>
          <input 
            type="submit" 
            value="Sign in"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase 
                       font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"  
          />
          <nav className="mt-10 lg:flex lg:justify-between">
            <Link 
              className="block text-center my-5 text-gray-500 hover:text-gray-600"
              to="/">Do you already have an account? Log in</Link>
            <Link 
              className="block text-center my-5 text-gray-500 hover:text-gray-600"
              to="/recover-password">Forget my password</Link>
          </nav>
        </form>
      </div>
    </> 
  );
}

export default Register