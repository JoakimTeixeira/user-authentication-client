import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import getToken from 'utils/getToken';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(undefined);

  useEffect(() => {
    const isLoggedIn = async () => {
      if (!getToken() || !userData) {
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
