import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Axios from 'axios';
import { AuthContext } from 'contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import getToken from 'utils/getToken';

function RemoveUser({ resetFields }) {
  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();

  const submitRemove = async (e) => {
    e.preventDefault();

    await Axios.delete(`http://localhost:3001/users/${userData.id}`, {
      headers: { 'x-auth-token': getToken() },
    });

    resetFields();

    setUserData(undefined);
    history.push('/');
  };

  return (
    <article className="mt-5 mb-5">
      <h2 className="mb-3">Remove Account</h2>
      <Button variant="danger" type="submit" onClick={submitRemove}>
        Remove my account
      </Button>
    </article>
  );
}

export default RemoveUser;

RemoveUser.propTypes = {
  resetFields: PropTypes.func.isRequired,
};
