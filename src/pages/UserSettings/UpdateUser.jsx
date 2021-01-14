import { Button, Col, Form } from 'react-bootstrap';
import React, { useContext } from 'react';
import Axios from 'axios';
import { AuthContext } from 'contexts/AuthContext';
import PropTypes from 'prop-types';
import handleInput from 'utils/handleInput';

function UpdateUser({ user, setUser, resetFields }) {
  const { userData, setUserData } = useContext(AuthContext);

  const submitUpdate = async (e) => {
    e.preventDefault();

    const newUser = {
      id: userData.id,
      name: user.name || userData.name,
      email: user.email || userData.email,
      phoneNumber: user.phoneNumber || userData.phoneNumber,
      cpf: user.cpf || userData.cpf,
    };

    const token = localStorage.getItem('auth-token') || '';

    await Axios.put(`http://localhost:3001/users/${userData.id}`, newUser, {
      headers: { 'x-auth-token': token, 'Content-Type': 'application/json' },
    });

    setUserData(newUser);
    resetFields();
  };

  return (
    <article className="mt-5">
      <h2 className="mb-3">Update user information</h2>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="John Doe"
              aria-label="Name"
              value={user.name}
              onChange={(e) => handleInput(e, user, setUser)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              aria-label="Email"
              value={user.email}
              onChange={(e) => handleInput(e, user, setUser)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              name="phoneNumber"
              type="number"
              placeholder="9999999999"
              aria-label="Phone Number"
              value={user.phoneNumber}
              onChange={(e) => handleInput(e, user, setUser)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCpf">
            <Form.Label>Cpf</Form.Label>
            <Form.Control
              name="cpf"
              type="number"
              placeholder="99999999999"
              aria-label="Cpf"
              value={user.cpf}
              onChange={(e) => handleInput(e, user, setUser)}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" onClick={submitUpdate}>
          Update
        </Button>
      </Form>
    </article>
  );
}

export default UpdateUser;

UpdateUser.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.oneOfType([() => null, PropTypes.number]),
    cpf: PropTypes.oneOfType([() => null, PropTypes.number]),
  }).isRequired,
  setUser: PropTypes.func.isRequired,
  resetFields: PropTypes.func.isRequired,
};
