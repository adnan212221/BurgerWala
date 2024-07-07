import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiLogin } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import '../styles/header.scss'
import { HashLink } from "react-router-hash-link";

const Header = ({ isAuthenticated = false }) => {
  return (
    <>
      <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            Navbar
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <HashLink to={'/#menu'}>menu</HashLink>
            <Nav.Link as={Link} to={"/contact"}>
              Contact
            </Nav.Link>
            
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end cart ">
            <Nav.Link as={Link} to={isAuthenticated ? "/cart" : "/login"}>
              <CiShoppingCart />
            </Nav.Link>

            <Nav.Link as={Link} to={isAuthenticated ? "/me" : "/login"}>
              {isAuthenticated ? <FaUser /> : <CiLogin />}
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
