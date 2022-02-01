import { Card, Button } from 'react-bootstrap';
import "../../styles/CardHome/CardHome.css";
import foto from "../../assets/atlantis.jpg";

import React, { Component } from 'react';

class CardHome extends Component {
  state = {
    poster: foto,
    title: "judul",
  }

  render() {
    return (
        <Card>
          <Card.Img variant="top" src={this.props.poster} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
          <Card.Body className="d-flex justify-content-between">
          <Button className="detail" variant="primary">Show Detail</Button>
          <Button className="favorite" variant="primary">Add to Favorite</Button>
          </Card.Body>
        </Card>
    );
  }
}

export default CardHome;
