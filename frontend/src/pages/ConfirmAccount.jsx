import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Alert from '../components/Alert';
import axiosClient from '../config/axios';

const ConfirmAccount = () => {
  const [alert, setAlert] = useState({});
  const [loading, setLoading] = useState(true);
  const [confirmedAccount, setConfirmedAccount] = useState(false);
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const url = `/veterinarians/confirm-account/${ id }`;
        const { data } = await axiosClient(url);
        setConfirmedAccount(true);
        setAlert({ message: data.message , error: false });
      } catch(exception) {
        console.error(exception);
        setAlert({ message: exception.response.data.message , error: true });
      }
      setLoading(false);
    }
    confirmAccount();
  }, []);
  return (
    <>
      <div>
          <h1 className="text-indigo-600 font-black text-6xl">
            Confirm your account and start manareging your  
            <span className="text-black"> Patients</span>
          </h1>  
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        { !loading && <Alert alert={ alert } /> }
        { confirmedAccount && (
          <Link 
          className="block text-center my-5 text-gray-500 hover:text-gray-600"
          to="/">Log in</Link>
        )}
      </div>
    </>
  );
}

export default ConfirmAccount;