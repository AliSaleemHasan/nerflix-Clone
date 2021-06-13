import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./requsets";
function Banner() {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.top_rated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(
          https://image.tmdb.org/t/p/original${movie.backdrop_path}
        )`,
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <p className="banner__overview">{movie.overview}</p>
      </div>
    </header>
  );
}

export default Banner;
