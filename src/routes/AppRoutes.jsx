import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, Register } from 'pages/auth';
import Home from 'pages/Home';
import NavBar from 'components/NavBar';
import { Container } from 'react-bootstrap';

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Container className="col-md-6 mt-5">
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Container>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
