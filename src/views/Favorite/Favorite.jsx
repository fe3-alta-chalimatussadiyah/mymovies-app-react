import React, { Component } from 'react';
import CardFavorite from '../../components/CardFavorite/CardFavorite';

import foto from "../../assets/atlantis.jpg";
import foto4 from "../../assets/coco.jpg";
import foto5 from "../../assets/dumbo.jpg";
import foto8 from "../../assets/frozen.jpg";
import foto9 from "../../assets/ice.jpg";
import foto10 from "../../assets/lion.jpg";
import foto14 from "../../assets/tangled.jpg";
import foto15 from "../../assets/toy.jpg";
import foto16 from "../../assets/up.jpg";

class Favorite extends Component {
  state = {
    poster: foto,
    title: "judul",
  }
  render() {
    return (
       <div className="d-flex justify-content-between flex-wrap">
        <CardFavorite poster={foto4} title="Coco" />
        <CardFavorite poster={foto5} title="Dumbo" />
        <CardFavorite poster={foto8} title="Frozen II" />
        <CardFavorite poster={foto9} title="Ice Age" />
        <CardFavorite poster={foto10} title="The Lion King" />
        <CardFavorite poster={foto14} title="Tangled" />
        <CardFavorite poster={foto15} title="Toy Story 4" />
        <CardFavorite poster={foto16} title="UP" />
        </div>
    );
  }
}

export default Favorite;
