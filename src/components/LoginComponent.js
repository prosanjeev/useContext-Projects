// LoginComponent.js
import React from 'react';
import useAuth from './useAuth';

export const LoginComponent = () => {
  const { authenticated, login, logout } = useAuth();

  return (
    <div>
      {authenticated ? (
        <>
          <p>Welcome, User!</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>Please log in</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
};
