import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) {
    return <Navigate to="/signin" />;
  }
  return children;
}
