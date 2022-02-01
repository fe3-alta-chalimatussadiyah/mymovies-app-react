import { Nav, Navbar, Container, Form, FormControl, Button} from 'react-bootstrap';
import { FaRegPlayCircle, FaSearch } from "react-icons/fa";
import '../../styles/NavbarComponent/NavbarComponent.css';

import React, { Component } from 'react';

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container fluid>
        <Navbar.Brand href="#home">DIY M<FaRegPlayCircle />VIE!</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#nowplaying">Now Playing</Nav.Link>
          <Nav.Link href="#detail">Detail</Nav.Link>
          <Nav.Link href="#favorite">Favorite</Nav.Link>
        </Nav>

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
}

export default NavbarComponent;