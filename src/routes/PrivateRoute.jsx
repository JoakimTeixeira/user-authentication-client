import { AuthContext } from 'contexts/AuthContext';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, path }) => {
  const { userData } = useContext(AuthContext);

  return <Route path={path} render={() => (userData.user ? <Component /> : <Redirect to="/" />)} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
};
