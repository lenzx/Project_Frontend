import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useLocation, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {

  const { isAuthenticated } = useContext(AuthContext);
  console.log(isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login"/>;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;

// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// function PrivateRoute({ children }) {
//   const location = useLocation();
//   const { isAuthenticated, isLoading } = useAuth();

//   if (isLoading) {
//     return <div>Cargando...</div>; // O algún componente de carga
//   }

//   return isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} />;
// }

// export default PrivateRoute;