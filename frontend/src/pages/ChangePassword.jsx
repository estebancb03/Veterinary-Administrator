import { useState } from 'react';
import Alert from '../components/Alert';
import AdminNav from "../components/AdminNav";
import useAuthentication from '../hooks/useAuthentication';

const ChangePassword = () => {
  const [alert, setAlert] = useState({});
  const [password, setPassword] = useState({ currentPassword: '', newPassword: '' });
  const { savePassword } = useAuthentication();
  const { message } = alert;
  const handleSubmit = async e => {
    e.preventDefault();
    if(Object.values(password).some(field => field === '')) {
      setAlert({ message: 'All fields are required', error: true });
      return;
    }
    if(password.newPassword.length < 6) {
      setAlert({ message: 'The new password is too short', error: true });
      return;
    }
    const result = await savePassword(password);
    setAlert(result);
  }
  return (
    <>
        <AdminNav />
        <h2 className="font-black text-3xl text-center mt-10">Change password</h2>
        <p className="text-xl mt-5 mb-10 text-center">Modify your { '' } 
            <span className="text-indigo-600 font-bold">password here</span>
        </p>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
            { message && <Alert alert={ alert } /> }
            <form onSubmit={ handleSubmit }>
              <div className="my-3">
                <label className="uppercase font-bold text-gray-600">Current password</label>
                <input 
                  type="password"
                  name='currentPassword' 
                  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                  placeholder='Type your current password'
                  onChange={ e => setPassword({
                    ...password,
                    [e.target.name]: e.target.value
                  }) }
                />
              </div>
              <div className="my-3">
                <label className="uppercase font-bold text-gray-600">New password</label>
                <input 
                  type="password" 
                  name='newPassword'
                  className="border bg-gray-50 w-full p-2 mt-5 rounded-lg"
                  placeholder='Type your new password'
                  onChange={ e => setPassword({
                    ...password,
                    [e.target.name]: e.target.value
                  }) }
                />
              </div>
              <input 
                type="submit" 
                value="Update password"
                className="bg-indigo-700 px-10 py-3 font-bold text-white rounded-lg uppercase w-full mt-5 hover:cursor-pointer"
              />              
            </form>
          </div>        
        </div>
    </>
  );
}

export default ChangePassword;