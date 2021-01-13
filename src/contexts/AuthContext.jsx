import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const isLoggedIn = async () => {
      const token = localStorage.getItem('auth-token') || '';

      if (!token) {
        localStorage.setItem('auth-token', '');
      }

      const isTokenValid = await Axios.post('http://localhost:3001/users/isTokenValid', null, {
        headers: { 'x-auth-token': token },
      });

      if (isTokenValid.data) {
        const userResponse = await Axios.get(
          `http://localhost:3001/users/${isTokenValid.data.id}`,
          {
            headers: { 'x-auth-token': token },
          }
        );

        setUserData({
          token: isTokenValid.data.token,
          user: userResponse.data,
        });
      }
    };

    isLoggedIn();
  }, []);

  return <AuthContext.Provider value={{ userData, setUserData }}>{children}</AuthContext.Provider>;
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
