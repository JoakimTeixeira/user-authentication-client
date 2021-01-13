import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import Axios from 'axios';
import { AuthContext } from 'contexts/AuthContext';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { setUserData } = useContext(AuthContext);
  const history = useHistory();

  const resetFields = () => {
    setUser({
      email: '',
      password: '',
    });
  };

  const submitLogin = async (e) => {
    e.preventDefault();

    const loginUser = user;

    const loginResponse = await Axios.post('http://localhost:3001/users/login', loginUser);

    setUserData({
      token: loginResponse.data.token,
      user: loginResponse.data.user,
    });

    localStorage.setItem('auth-token', loginResponse.data.token);

    resetFields();

    history.push('/');
  };
  return (
    <Form>
      <Form.Group controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="johndoe@email.com"
          aria-label="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </Form.Group>

      <Form.Group controlId="formGridPassword1">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          aria-label="Password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={submitLogin}>
        Login
      </Button>
    </Form>
  );
};

export default Login;
