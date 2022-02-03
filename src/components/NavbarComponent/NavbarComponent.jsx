import React from "react";
import { Nav, Navbar, Container, Form, FormControl, Button} from 'react-bootstrap';
import { FaRegPlayCircle, FaSearch } from "react-icons/fa";
import '../../styles/NavbarComponent/NavbarComponent.css';
import { Link } from "react-router-dom";
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

function NavbarComponent() {

  return (

    <Navbar bg="dark" variant="dark" fixed="top">
      <Container fluid>
      <Navbar.Brand href="#home">DIY M<FaRegPlayCircle />VIE!</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link>
        <Link to ="/">Now Playing</Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="favorite">Favorite</Link>
        </Nav.Link>
      </Nav>

      <BootstrapSwitchButton onstyle="dark" offstyle="light" checked={false} />
      <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search Movie ..."
            className="me-2"
            aria-label="Search"
          />
          <Button className="button-movie btn-movie"><FaSearch/></Button>
        </Form>
        </Container>
        </Navbar>
  );
}

export default NavbarComponent;