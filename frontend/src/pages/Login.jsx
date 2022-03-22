import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alert from '../components/Alert';
import axiosClient from '../config/axios';
import useAuthentication from '../hooks/useAuthentication';

const Login = () => {
  const { setAuthentication } = useAuthentication();
  const navigate = useNavigate();
  const [alert, setAlert] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { message } = alert;
  const handleSubmit = async e => {
    e.preventDefault();
    if([email, password].includes('')) {
      setAlert({ message: 'All fields are required', error: true });
      return;
    }
    try {
      const url = '/veterinarians/login'
      const { data } = await axiosClient.post(url, { email, password });
      localStorage.setItem('Token', data.token);
      setAuthentication(data);
      navigate('/admin');
    } catch(exception) {
      setAlert({ message: exception.response.data.message, error: true });
    }
  }
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl">
          Log In and Manage your 
          <span className="text-black"> Patients</span>
        </h1>  
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        { message && <Alert alert={ alert } /> }
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
              onChange={ e => setPassword(e.target.value) }
            />
          </div>

          <input 
            type="submit" 
            value="Log in"
            className="bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase 
                       font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"  
          />
        </form>
        <nav className="mt-10 lg:flex lg:justify-between">
          <Link 
            className="block text-center my-5 text-gray-500 hover:text-gray-600"
            to="/register">You don't have an account? Sign up</Link>
          <Link 
            className="block text-center my-5 text-gray-500 hover:text-gray-600"
            to="/recover-password">Forget my password</Link>
        </nav>
      </div>      
    </>
  );
}

export default Login