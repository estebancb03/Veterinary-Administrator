import { Outlet } from 'react-router-dom'

const AuthenticationLayout = () => {
  return (
    <>
        <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-10 p-5">
          <Outlet />
        </main>
    </>
  );
}

export default AuthenticationLayout