import { useEffect, useState } from "react";
import AuthContext from "./auth.context";


const AuthTokenProvider = ({ children }) => {
    const tempToken = localStorage.getItem("token") || null;
    const [token, setToken] = useState(tempToken);
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token)
        } else {
            localStorage.removeItem("token")
        }

    }, [token])
    const logout = () => {
        console.log("token",token)
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{token,setToken,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthTokenProvider;