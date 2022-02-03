import React, { useEffect, useState } from 'react';
import CardNowPlayingFunc from '../../components/CardNowPlaying/CardNowPlayingFunc';
import { Spinner } from "react-bootstrap";
import axios from "axios";

function NowPlayingFunc() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNowPlayingFunc();
  }, []);

  function fetchNowPlayingFunc(){
    setLoading(true);

    axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=bf598a6e28e9a5d1c37a7f3c96d6bdc6&language=en-US&page=1")
    .then((data) => {
      setMovies(data.data.results);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    });
  }

  function returnLoading() {
    if (loading) {
      return <Spinner animation="border" variant="primary" />;
    }

    return <></>;
  }

  return (
    <div className="d-flex justify-content-evenly flex-wrap">
      {returnLoading()}
      {movies.map((el, i) => (
          <CardNowPlayingFunc title={el.original_title} poster={el.poster_path} key={i} id={el.id} />
        ))}
    </div>
  )
}

export default NowPlayingFunc;