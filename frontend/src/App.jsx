import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthenticationLayout from './layout/AuthenticationLayout';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <AuthenticationLayout /> }>
          <Route index element={ <Login /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App