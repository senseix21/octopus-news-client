import React, { useContext } from 'react';
// import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {
    let location = useLocation();
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span class="loader"></span>
    }
    if (user && user.uid) {
        return children;
    }

    return <Navigate to={'/signin'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;

