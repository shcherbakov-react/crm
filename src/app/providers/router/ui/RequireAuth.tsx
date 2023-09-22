import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const RequireAuth = ({ children }) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation()
    if (!auth) {
        // user is not authenticated
        return <Navigate to="/login" />;
    }
    return children;
};