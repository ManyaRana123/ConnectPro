import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    // Get authentication data from localStorage
    const authData = localStorage.getItem("authData");
    // If user is not logged in
    if (!authData) {
        return (
            <Navigate
                to="/login"
            />
        );
    }
    return children;
};
export default ProtectedRoute;