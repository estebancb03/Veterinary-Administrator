import { Outlet, Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuthentication from "../hooks/useAuthentication";

const ProtectedLayout = () => {
    const { authentication, loading } = useAuthentication();
    console.log(authentication);
    console.log(loading);
    return (
        <>
            <Header />
            {  authentication._id ? (
                <main className="container mx-auto mt-10">
                    <Outlet />
                </main>) 
                : <Navigate to='/' / > 
            } 
            <Footer />
        </>
    );
}

export default ProtectedLayout;