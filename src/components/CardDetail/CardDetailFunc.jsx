import React, { useEffect, useState } from "react";
import { Row, Col, Button } from 'react-bootstrap';
import "../../styles/CardDetail/CardDetail.css";
import { useNavigate } from "react-router-dom";

function CardDetailFunc(props) {

  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [poster, setPoster] = useState("/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg");
  const [release, setRelease] = useState("");
  const [runtime, setRuntime] = useState("");
  const [revenue, setRevenue] = useState("");
  const [budget, setBudget] = useState("");
  const [popularity, setPopularity] = useState("");
  const [overview, setOverview] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    console.log(props)
    setTitle(props.title);
    setTagline(props.tagline);
    setPoster(props.poster);
    setRelease(props.release);
    setRuntime(props.runtime);
    setRevenue(props.revenue);
    setBudget(props.budget);
    setPopularity(props.popularity);
    setOverview(props.overview);
  }, [props]);

  return (
    <div>
    <Row className="table-detail d-flex justify-content-start">
    <Row class-Name="garis-judul">
    <h1 className="judul-utama">{title}</h1>
    </Row>
      <Col md="4" className="p-0">
        <img className="poster-detail" src={'https://image.tmdb.org/t/p/w500' + poster} alt="" srcset="" />
      </Col>
      <Col md="2" className="nama-kolom">
        <p>Tagline</p>
        <p>Release</p>
        <p>Runtime</p>
        <p>Revenue</p>
        <p>Budget</p>
        <p>Popularity</p>
        <p>Overview</p>
      </Col>
      <Col md="1">
        <p>:</p>
        <p>:</p>
        <p>:</p>
        <p>:</p>
        <p>:</p>
        <p>:</p>
        <p>:</p>
      </Col>
      <Col md="2">
        <p >{tagline}</p>
        <p >{release}</p>
        <p >{runtime}</p>
        <p >{revenue}</p>
        <p >{budget}</p>
        <p >{popularity}</p>
        <p >{overview}</p>
      </Col>
    </Row>
    <Button
          className="back"
          variant="primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Go Back
        </Button>
    </div>
  );
}

export default CardDetailFunc;