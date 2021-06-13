import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
// import YouTube from "react-yotube";
function Row({ big, title, categoruUrl }) {
  const [movies, setMovies] = useState([]);
  const url = "https://image.tmdb.org/t/p/w500/";

  // const [trailerUrl, setTrailerUrl] = useState("");
  // const playTrailer = (movie) => {
  //   if (trailerUrl) {
  //     setTrailerUrl("");
  //   } else {
  //     movieTrailer(movie?.name || "")
  //       .then((url) => {
  //         const urlParam = new URLSearchParams(new URL(url).search).get("v");
  //         setTrailerUrl(urlParam);
  //       })
  //       .catch((error) => alert(error.message));
  //   }
  // };
  // const opt = {
  //   width: "300",
  //   height: "150",
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };
  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(categoruUrl);

      setMovies(request.data.results);
    }
    fetchdata();
  }, [categoruUrl]);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__info">
        {movies.map((movie) => (
          <img
            className={`row__img ${big && "row__big"}`}
            key={movie.id}
            src={
              big
                ? `${url}${movie.backdrop_path}`
                : `${url}${movie.poster_path}`
            }
            width="100"
            height="100"
            alt={movie.title}
          />
        ))}
      </div>
      {/* <YouTube vedioId={trailerUrl} opts={opt} /> */}
    </div>
  );
}

export default Row;
