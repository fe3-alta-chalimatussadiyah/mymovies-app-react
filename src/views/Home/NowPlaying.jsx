import React, { Component } from 'react';
import CardNowPlaying from '../../components/CardNowPlaying';
import NavbarComponent from '../../components/NavbarComponent';
import axios from "axios";

class NowPlaying extends Component {
    state = {
      movies: [],
    };

    componentDidMount() {
      this.fetchNowPlaying();
    }

    fetchNowPlaying() {
      axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=bf598a6e28e9a5d1c37a7f3c96d6bdc6&language=en-US&page=1")
      .then((data) => {
        console.log(data.data.results);
        this.setState({
          movies: data.data.results
        });
      })
      .catch((err) => {
        console.log(err);
      })
    }

  render() {
    return (
      <>
        <NavbarComponent />
        <div className="d-flex justify-content-evenly flex-wrap">
        {
          this.state.movies.map((el, i) => (
            <CardNowPlaying title={el.original_title} poster={el.backdrop_path} key={i} id={el.id} />
          ))
        }
        </div>
      </>
    );
  }
}

export default NowPlaying;