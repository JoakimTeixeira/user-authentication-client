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
      <Container className="col-md-6 mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default AppRoutes;
