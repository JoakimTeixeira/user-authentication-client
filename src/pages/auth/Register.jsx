import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import Axios from 'axios';
import handleInput from 'utils/handleInput';

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

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword1">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            aria-label="Password"
            value={user.password}
            onChange={(e) => handleInput(e, user, setUser)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridPassword2">
          <Form.Label>Password Check</Form.Label>
          <Form.Control
            name="passwordCheck"
            type="password"
            aria-label="Password Check"
            value={user.passwordCheck}
            onChange={(e) => handleInput(e, user, setUser)}
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
