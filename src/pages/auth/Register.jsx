import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import Axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    cpf: '',
    password: '',
    passwordCheck: '',
  });

  const resetFields = () => {
    setUser({
      name: '',
      email: '',
      phoneNumber: '',
      cpf: '',
      password: '',
      passwordCheck: '',
    });
  };

  const submitRegister = async (e) => {
    e.preventDefault();

    const newUser = user;

    await Axios.post('http://localhost:3001/users/register', newUser);

    resetFields();
  };

  return (
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
            type="number"
            placeholder="9999999999"
            aria-label="Phone Number"
            value={user.phoneNumber}
            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCpf">
          <Form.Label>Cpf</Form.Label>
          <Form.Control
            type="number"
            placeholder="99999999999"
            aria-label="Cpf"
            value={user.cpf}
            onChange={(e) => setUser({ ...user, cpf: e.target.value })}
          />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            aria-label="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword2">
          <Form.Label>Password Check</Form.Label>
          <Form.Control
            type="password"
            aria-label="Password Check"
            value={user.passwordCheck}
            onChange={(e) => setUser({ ...user, passwordCheck: e.target.value })}
          />
        </Form.Group>
      </Form.Row>

      <Button variant="primary" type="submit" onClick={submitRegister}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
