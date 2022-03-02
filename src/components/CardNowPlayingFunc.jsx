import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux';
import allStore from "../store/actions";

import { Card, Button } from 'react-bootstrap';
import "../styles/CardNowPlaying.css";
import foto from "../assets/atlantis.jpg";

export default function CardNowPlayingFunc(props) {
  const [title, setTitle] = useState("judul");
  const [poster, setPoster] = useState(foto);
  const [id, setId] = useState(0);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(props.title);
    setPoster(props.poster);
    setId(props.id);
  }, [props]);

  function handleAddToFavorite() {
    dispatch(allStore.setFavorites({
        id,
        title,
        poster,
      })
    );
  }

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
      <Button className="favorite" variant="primary" onClick={handleAddToFavorite}>Add to Favorite</Button>
      </Card.Body>
    </Card>
  );
}