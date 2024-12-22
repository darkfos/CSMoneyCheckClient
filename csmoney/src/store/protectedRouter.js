import { useSelector } from "react-redux";
import { getAccessToken, getRefreshToken } from "./authSlice";
import { Navigate } from "react-router-dom";


function ProtectedRouter ({children}) {
    
    const selector = useSelector((state) => state.auth);


    if (selector["Access-Token"] && selector["Refresh-Token"]) {
        return children
    }

    return <Navigate to="/" />
} 


export default ProtectedRouter;