import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Login, Register } from 'pages/auth';
import Home from 'pages/Home';
import NavBar from 'components/NavBar';

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoutes;
