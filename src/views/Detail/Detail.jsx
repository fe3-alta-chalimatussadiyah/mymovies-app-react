import React, { Component } from 'react';
import NavbarComponent from '../../components/NavbarComponent/NavbarComponent';
import TableDetail from '../../components/TableDetail/TableDetail';

import foto from "../../assets/aladdin.jpg";
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

class Detail extends Component {

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
      <>
        <NavbarComponent />
        <div className="tabel">
        <TableDetail poster={foto1} title="Aladdin" date="25 Nov 1992" duration="90 min" writer="Ron Clements, John Musker, Ted Elliott" actor="Scott Weinger, Robin Williams, Linda Larkin" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto2} title="Atlantis The Lost Empire" date="15 Jun 2001" duration="95 min" writer="Tab Murphy, Kirk Wise, Gary Trousdale" actor="Michael J. Fox, Jim Varney, Corey Burton" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto3} title="Beauty And The Beast" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto4} title="Coco" date=" 22 Nov 2017" duration="105 min" writer="Lee Unkrich, Jason Katz, Matthew Aldrich" actor="Anthony Gonzalez, Gael García Bernal, Benjamin Bratt" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto5} title="Dumbo" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto6} title="Encanto" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto7} title="The Princess And The Frog" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto8} title="Frozen II" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto9} title="Ice Age" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto10} title="The Lion King" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto11} title="Luca" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto12} title="The Little Mermaid" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto13} title="Raya And The Last Dragon" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto14} title="Tangled" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto15} title="Toy Story 4" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />

        <TableDetail poster={foto16} title="UP" date="17 Mar 2017" duration="129 min" writer="Stephen Chbosky, Evan Spiliotopoulos, Linda Woolverton" actor="Emma Watson, Dan Stevens, Luke Evans" genre="Adventure, Family, Fantasy" director="Gary Trousdale, Kirk Wise" plot="A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true." />
        </div>
      </>
    );
  }
}

export default Detail;
