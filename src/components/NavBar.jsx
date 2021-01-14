import React, { useContext } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';

const NavBar = () => {
  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();

  const logoutUser = () => {
    setUserData(undefined);

    localStorage.setItem('auth-token', '');
    history.push('/');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        LOGO
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-2">
          {userData ? (
            <>
              <Nav.Link as={NavLink} to={`/${userData.id}`} exact>
                User Settings
              </Nav.Link>
              <Button onClick={logoutUser}>Logout</Button>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/register" exact>
                Register
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login" exact>
                Login
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
