import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Card, Button } from 'react-bootstrap';
import "../../styles/CardNowPlaying/CardNowPlaying.css";
import foto from "../../assets/atlantis.jpg";

function CardNowPlayingFunc(props) {
  const [title, setTitle] = useState("judul");
  const [poster, setPoster] = useState(foto);
  const [id, setId] = useState(0);

  let navigate = useNavigate();

  useEffect(() => {
    setTitle(props.title);
    setPoster(props.poster);
    setId(props.id);
  }, [props]);

  return (
    <Card>
      <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + poster} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
      </Card.Body>
      <Card.Body className="d-flex justify-content-between">
      <Button className="detail" variant="primary" onClick={() => {
        navigate('/detail/' + id);
        }}>
        Show Detail
        </Button>
      <Button className="favorite" variant="primary">Add to Favorite</Button>
      </Card.Body>
    </Card>
);
}


export default CardNowPlayingFunc;
