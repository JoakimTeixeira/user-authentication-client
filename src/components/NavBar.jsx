import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { AuthContext } from 'contexts/AuthContext';

const NavBar = () => {
  const { userData, setUserData } = useContext(AuthContext);
  const logoutUser = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem('auth-token', '');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        LOGO
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-2">
          {userData.user ? (
            <Button onClick={logoutUser}>Logout</Button>
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
