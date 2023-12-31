import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useContext(AuthContext); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !loading) { 
      navigate('/login');
    }
  }, [isAuthenticated, navigate, loading]); 

  if (loading) { 
    return null;
  }

  if (!isAuthenticated) { 
    return null;
  }

  return children;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrivateRoute;
// import { useContext, useEffect } from 'react';
// import AuthContext from '../context/AuthContext';
// import { useLocation, Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import Cookies from 'js-cookie';

// function PrivateRoute({ children }) {
//   const location = useLocation();
//   const { isAuthenticated, isLoading, login } = useContext(AuthContext);

//   useEffect(() => {
//     const token = Cookies.get('jwt');
//     if (token && !isAuthenticated && !isLoading) {
//       login(token);
//     }
//   }, [isAuthenticated, isLoading, login]);

//   if (isLoading) {
//     return <div>Cargando...</div>; // O algún componente de carga
//   }

//   return isAuthenticated ? children : <Navigate to="/login" state={{ from: location }} />;
// }

// PrivateRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default PrivateRoute;

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