import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router";
import { HashLink as Link } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./header.css";

const Header = () => {
  const { firebaseData } = useAuth();
  const { handleLogout, user } = firebaseData;
  const history = useHistory();

  const navigation = [
    { name: "Home", to: "/home" },
    { name: "Glasses", to: "/glasses" },
    { name: "Reviews", to: "/home#reviews" },
    { name: "Brands", to: "/home#brands" },
    { name: "Humanity", to: "/home#humanity" },
  ];
  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        variant="light"
        className="p-2"
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="p-0">
            <img
              className="w-75 img-fluid"
              src="https://i.ibb.co/FwkP0xS/logo.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto pe-0">
              {navigation.map((item) => (
                <Nav.Link
                  as={Link}
                  to={item.to}
                  key={item.name}
                  className="text-info fs-5"
                >
                  {item.name}
                </Nav.Link>
              ))}
              {user.displayName ? (
                <>
                  <Nav.Link
                    as={Link}
                    to="/dashboard"
                    className="text-danger fs-5"
                  >
                    Dashboard
                  </Nav.Link>
                  <NavDropdown
                    title={
                      <img
                        src={
                          user.photoURL || "https://i.ibb.co/LkRh377/user.jpg"
                        }
                        className="user-image"
                        alt="user pic"
                      />
                    }
                  >
                    <NavDropdown.Item href="#action/3.1">
                      {user.displayName}
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      <Button variant="danger" onClick={()=>handleLogout(history)}>
                        Logout
                      </Button>
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="text-white fs-5 bg-success rounded"
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
