import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthenticationLayout from './layout/AuthenticationLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import NewPassword from './pages/NewPassword';
import ConfirmAccount from './pages/ConfirmAccount';
import RecoverPassword from './pages/RecoverPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <AuthenticationLayout /> }>
          <Route index element={ <Login /> } />
          <Route path='register' element={ <Register /> } />
          <Route path='confirm-account/:id' element={ <ConfirmAccount /> } />
          <Route path='recover-password' element={ <RecoverPassword /> } />
          <Route path='recover-password/:token' element={ <NewPassword /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App