import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";
import PropTypes from 'prop-types';
const PrivateRoute = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    if(loading) {
        return(
             <div className="mt-[80px]">Loading</div>
            );//Loading component will replace this
    } 
    return user.uid == "P3gMonrHNxSWr8vhx34WifCceM32" ? children : <Navigate to ="/signin" />
    
}
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;