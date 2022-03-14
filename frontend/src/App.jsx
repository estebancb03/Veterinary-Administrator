import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthenticationLayout from './layout/AuthenticationLayout';
import Login from './pages/Login';
import Register from './pages/Register';
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App