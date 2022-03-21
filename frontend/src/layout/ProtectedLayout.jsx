import { Outlet, Navigate } from "react-router-dom";
import useAuthentication from "../hooks/useAuthentication";

const ProtectedLayout = () => {
    const { authentication, loading } = useAuthentication();
    return (
        <>
            { authentication?._id? <Outlet /> : <Navigate to='/' / > }
        </>
    );
}

export default ProtectedLayout;