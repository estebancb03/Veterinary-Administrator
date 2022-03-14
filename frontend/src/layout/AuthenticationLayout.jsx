import { Outlet } from 'react-router-dom'

const AuthenticationLayout = () => {
  return (
    <>
        <h2>Authentication</h2>
        <Outlet />
    </>
  );
}

export default AuthenticationLayout