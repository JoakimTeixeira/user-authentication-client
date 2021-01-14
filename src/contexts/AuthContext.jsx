import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    const isLoggedIn = async () => {
      const token = localStorage.getItem('auth-token') || '';

      if (!token) {
        localStorage.setItem('auth-token', '');
      }
    };

    isLoggedIn();
  }, []);

  return <AuthContext.Provider value={{ userData, setUserData }}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
