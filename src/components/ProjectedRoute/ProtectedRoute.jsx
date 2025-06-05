import { Navigate } from 'react-router';

function ProtectedRoute({ children }) {
  const auth = true;
  return auth ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
