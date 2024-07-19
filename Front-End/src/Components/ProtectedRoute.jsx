import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children, isAdmin }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && user.email !== 'abdish88@gmail.com' && isAdmin && user.password !== '1234567') {
    return <Navigate to="/admin/*" />;
  }

  return children;
};

export default ProtectedRoute;
