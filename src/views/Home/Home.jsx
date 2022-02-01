import React, { Component } from 'react';
import CardHome from '../../components/CardHome/CardHome';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';

import foto from "../../assets/atlantis.jpg";
import foto1 from "../../assets/aladdin.jpg";
import foto2 from "../../assets/atlantis.jpg";
import foto3 from "../../assets/beauty.jpg";
import foto4 from "../../assets/coco.jpg";
import foto5 from "../../assets/dumbo.jpg";
import foto6 from "../../assets/encanto.jpg";
import foto7 from "../../assets/frog.jpg";
import foto8 from "../../assets/frozen.jpg";
import foto9 from "../../assets/ice.jpg";
import foto10 from "../../assets/lion.jpg";
import foto11 from "../../assets/luca.jpg";
import foto12 from "../../assets/mermaid.jpg";
import foto13 from "../../assets/raya.jpg";
import foto14 from "../../assets/tangled.jpg";
import foto15 from "../../assets/toy.jpg";
import foto16 from "../../assets/up.jpg";

class Home extends Component {
    state = {
    poster: foto,
    title: "judul",
    }

  render() {
    return (
      <>
        <NavbarComponent />
        <div className="d-flex justify-content-between flex-wrap">
        <CardHome poster={foto1} title="Aladdin" />
        <CardHome poster={foto2} title="Atlantis The Lost Empire" />
        <CardHome poster={foto3} title="Beauty And The Beast" />
        <CardHome poster={foto4} title="Coco" />
        <CardHome poster={foto5} title="Dumbo" />
        <CardHome poster={foto6} title="Encanto" />
        <CardHome poster={foto7} title="The Princess And The Frog" />
        <CardHome poster={foto8} title="Frozen II" />
        <CardHome poster={foto9} title="Ice Age" />
        <CardHome poster={foto10} title="The Lion King" />
        <CardHome poster={foto11} title="Luca" />
        <CardHome poster={foto12} title="The Little Mermaid" />
        <CardHome poster={foto13} title="Raya And The Last Dragon" />
        <CardHome poster={foto14} title="Tangled" />
        <CardHome poster={foto15} title="Toy Story 4" />
        <CardHome poster={foto16} title="UP" />
        </div>
      </>
    );
  }
}

export default Home;
