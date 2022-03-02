import { Card, Button } from 'react-bootstrap';
import "../styles/CardNowPlaying.css";
import foto from "../../assets/atlantis.jpg";

import React, { Component } from 'react';

class CardNowPlaying extends Component {
  state = {
    poster: foto,
    title: "judul",
  };

  componentDidMount() {
      this.setState({
        title: this.props.title,
        poster: this.props.poster,
      });
  }

  render() {
    return (
        <Card>
          <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + this.state.poster} />
          <Card.Body>
            <Card.Title>{this.state.title}</Card.Title>
          </Card.Body>
          <Card.Body className="d-flex justify-content-between">
          <Button className="detail" variant="primary">Show Detail</Button>
          <Button className="favorite" variant="primary">Add to Favorite</Button>
          </Card.Body>
        </Card>
    );
  }
}

export default CardNowPlaying;
