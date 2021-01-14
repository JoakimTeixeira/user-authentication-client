import React, { useContext, useState } from 'react';
import { AuthContext } from 'contexts/AuthContext';
import Axios from 'axios';
import { Button, Col, Form } from 'react-bootstrap';

const Settings = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    cpf: '',
  });

  const { userData } = useContext(AuthContext);

  const resetFields = () => {
    setUser({
      name: '',
      email: '',
      phoneNumber: '',
      cpf: '',
    });
  };

  const submitUpdate = async (e) => {
    e.preventDefault();

    const newUser = {
      name: user.name || userData.user.name,
      email: user.email || userData.user.email,
      phoneNumber: user.phoneNumber || userData.user.phoneNumber,
      cpf: user.cpf || userData.user.cpf,
    };

    await Axios.patch(`http://localhost:3001/users/${userData.user.id}`, newUser, {
      headers: { 'x-auth-token': userData.token, 'Content-Type': 'application/json' },
    });

    resetFields();
  };

  return (
    <>
      <h1 className="text-center">User Settings</h1>
      <h2 className="text-center">Update user information</h2>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="John Doe"
              aria-label="Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="johndoe@email.com"
              aria-label="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="9999999999"
              aria-label="Phone Number"
              value={user.phoneNumber}
              onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridCpf">
            <Form.Label>Cpf</Form.Label>
            <Form.Control
              type="text"
              placeholder="99999999999"
              aria-label="Cpf"
              value={user.cpf}
              onChange={(e) => setUser({ ...user, cpf: e.target.value })}
            />
          </Form.Group>
        </Form.Row>

        <Button variant="primary" type="submit" onClick={submitUpdate}>
          Update
        </Button>
      </Form>
    </>
  );
};

export default Settings;
