// useAuth.js
import { useContext } from 'react';
import { AuthContext } from './AuthContext';

// Custom hook for accessing the authentication context
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
