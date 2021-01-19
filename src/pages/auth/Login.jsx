import React, { useState, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import Axios from 'axios';
import { AuthContext } from 'contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import handleInput from 'utils/handleInput';
import AlertMessage from 'components/AlertMessage';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [isError, setIsError] = useState();
  const { setUserData } = useContext(AuthContext);
  const history = useHistory();

  const submitLogin = async (e) => {
    e.preventDefault();

    try {
      const loginUser = user;
      const loginResponse = await Axios.post('http://localhost:3001/users/login', loginUser);

      setUserData(loginResponse.data.user);
      localStorage.setItem('auth-token', loginResponse.data.token);

      history.push('/');
    } catch (error) {
      error.response.data.msg && setIsError(error.response.data.msg);
    }
  };

  return (
    <Form>
      {isError && <AlertMessage isError={isError} clearError={() => setIsError(undefined)} />}
      <Form.Group controlId="formGridEmail">
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

      <Form.Group controlId="formGridPassword1">
        <Form.Label>Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          aria-label="Password"
          value={user.password}
          onChange={(e) => handleInput(e, user, setUser)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={submitLogin}>
        Login
      </Button>
    </Form>
  );
};

export default Login;
