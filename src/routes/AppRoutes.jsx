import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, Register } from 'pages/auth';
import Home from 'pages/Home';
import NavBar from 'components/NavBar';
import Settings from 'pages/Settings';
import PrivateRoute from './PrivateRoute';

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container className="col-md-6 mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/:id" component={Settings} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default AppRoutes;
