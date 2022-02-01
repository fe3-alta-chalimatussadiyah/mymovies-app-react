import { Row, Col } from 'react-bootstrap';
// import { FaRegPlayCircle, FaSearch } from "react-icons/fa";
import "../../styles/TableDetail/TableDetail.css";

import foto from "../../assets/atlantis.jpg";

import React, { Component } from 'react';

class TableDetail extends Component {
  
  state = {
    title: "judul",
    date: "tanggal rilis",
    duration: "durasi",
    writer: "penulis",
    genre: "isi genre",
    director: "director",
    actor: "pemeran",
    plot: "Isi Plot",
    poster: foto
  }

  render() {
    return (
      <Row className="table-detail d-flex justify-content-start">
      <Row class-Name="garis-judul">
      <h1 className="judul-utama">{this.props.title}</h1>
      </Row>
        <Col md="4" className="p-0">
          <img className="poster-detail" src={this.props.poster} alt="" srcset="" />
        </Col>
        <Col md="2" className="nama-kolom">
          <p>Judul</p>
          <p>Tanggal Rilis</p>
          <p>Durasi</p>
          <p>Genre</p>
          <p>Director</p>
          <p>Writer</p>
          <p>Actor</p>
          <p>Plot</p>
        </Col>
        <Col md="1">
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
          <p>:</p>
        </Col>
        <Col md="2">
          <p >{this.props.title}</p>
          <p >{this.props.date}</p>
          <p >{this.props.duration}</p>
          <p >{this.props.genre}</p>
          <p >{this.props.director}</p>
          <p >{this.props.writer}</p>
          <p >{this.props.actor}</p>
          <p >{this.props.plot}</p>
        </Col>
      </Row>

    );
  }
}

export default TableDetail;