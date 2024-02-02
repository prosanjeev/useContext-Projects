// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

// Create a context for user authentication
export const AuthContext = createContext();

// Create a provider component to manage the authentication state
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = () => setAuthenticated(true);
  const logout = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

