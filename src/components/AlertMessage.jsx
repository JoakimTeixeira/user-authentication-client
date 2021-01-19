import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AlertMessage = ({ isError, clearError }) => {
  return (
    <Alert variant="danger" onClose={clearError} dismissible>
      {isError}
    </Alert>
  );
};

export default AlertMessage;

AlertMessage.propTypes = {
  isError: PropTypes.oneOfType([() => undefined, PropTypes.string]),
  clearError: PropTypes.func.isRequired,
};

AlertMessage.defaultProps = {
  isError: undefined,
};
