import { useContext } from "react";
import AuthenticationContext from "../context/AuthenticationProvider";

const useAuthentication = () => {
    return useContext(AuthenticationContext);
}

export default useAuthentication;