import { Card, Button } from 'react-bootstrap';
import "../styles/CardFavorite.css";
import foto from "../assets/atlantis.jpg";

import React, { Component } from 'react';

class CardFavorite extends Component {
  state = {
    poster: foto,
    title: "judul",
  }

  render() {
    return (
        <Card>
          <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500/' + this.props.poster} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
          </Card.Body>
          <Card.Body className="d-flex flex-wrap justify-content-between">
          <Button className="detail" variant="primary">Show Detail</Button>
          <Button className="favorite" variant="primary">Remove from Favorite</Button>
          </Card.Body>
        </Card>
    );
  }
}

export default CardFavorite;
