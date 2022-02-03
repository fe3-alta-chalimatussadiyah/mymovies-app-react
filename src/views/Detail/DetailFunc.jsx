import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetailFunc from '../../components/CardDetail/CardDetailFunc';
import axios from "axios";

function DetailFunc() {
  const [titleMovie, setTitleMovie] = useState("");
  const [tagline, setTagline] = useState("");
  const [poster, setPoster] = useState("/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg");
  const [release, setRelease] = useState("");
  const [runtime, setRuntime] = useState("");
  const [revenue, setRevenue] = useState("");
  const [budget, setBudget] = useState("");
  const [popularity, setPopularity] = useState("");
  const [overview, setOverview] = useState("");

  let id = useParams();

  useEffect(() => {
    function fetchDetailFunc() {
      axios.get("https://api.themoviedb.org/3/movie/"+id.id+"?api_key=bf598a6e28e9a5d1c37a7f3c96d6bdc6&language=en-US")
      .then((data) => {
        console.log(data.data);
        setTitleMovie(data.data.title);
        setTagline(data.data.tagline);
        setPoster(data.data.poster_path);
        setRelease(data.data.release_date);
        setRuntime(data.data.runtime);
        setRevenue(data.data.revenue);
        setBudget(data.data.budget);
        setPopularity(data.data.popularity);
        setOverview(data.data.overview);
      })
      .catch((err) => {
        console.log(err);
      });
    }
    
    fetchDetailFunc();
  }, [id]);

  return (
    <div>
      <CardDetailFunc title={titleMovie} tagline={tagline} poster={poster} release={release} runtime={runtime} revenue={revenue} budget={budget} popularity={popularity} overview={overview} / >
    </div>
  )
}

export default DetailFunc;