import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import EditProfile from './pages/editProfile';
import NewPassword from './pages/NewPassword';
import ChangePassword from './pages/ChangePassword';
import ManagePatients from './pages/ManagePatients';
import ConfirmAccount from './pages/ConfirmAccount';
import RecoverPassword from './pages/RecoverPassword';
import ProtectedLayout from './layout/ProtectedLayout';
import AuthenticationLayout from './layout/AuthenticationLayout';
import { AuthenticationProvider } from './context/AuthenticationProvider'; 
import { PatientsProvider } from './context/PatientsProvider';

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <PatientsProvider>
          <Routes>
            //Public access routes
            <Route path='/' element={ <AuthenticationLayout /> }>
              <Route index element={ <Login /> } />
              <Route path='register' element={ <Register /> } />
              <Route path='confirm-account/:id' element={ <ConfirmAccount /> } />
              <Route path='recover-password' element={ <RecoverPassword /> } />
              <Route path='recover-password/:token' element={ <NewPassword /> } />
            </Route>
            //Private access routes
            <Route path='/admin' element={ <ProtectedLayout /> }>
              <Route index element={ <ManagePatients /> } />
              <Route path='profile' element={ <EditProfile /> } />
              <Route path='change-password' element={ <ChangePassword /> } />
            </Route>
        </Routes>
        </PatientsProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App