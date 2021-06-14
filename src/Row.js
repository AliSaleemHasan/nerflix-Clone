import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import movieTrailer from 'movie-trailer' 
import YouTube from "react-youtube"
function Row({ big, title, categoruUrl }) {
  const [movies, setMovies] = useState([]);
  const [movie,setMovie]=useState();
  const url = "https://image.tmdb.org/t/p/w500/";


  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchdata() {
      const request = await axios.get(categoruUrl);
      setMovies(request.data.results);
    }
    fetchdata();
  }, [categoruUrl]);
  const playTrailer = async(movie) => {
  console.log(movie)
    setMovie(movie);
     await movieTrailer(movie.original_title)
        .then((url) => {
      console.log(url)

          const urlParam = new URLSearchParams(new URL(url).search).get("v");
          setTrailerUrl(urlParam);
          console.log(urlParam)
        })
        .catch((error) => console.log(error.message));
  };
  const opt = {
    width: "300",
    height: "150",
    playerVars: {
      autoplay: 1,
    },
  };

  const _onReady = (e) => {
    e.target.pauseVideo();
  };
  
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__info">
        {movies.map((movie) => (
          <img
            onClick={() => playTrailer(movie)}
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
      {
        trailerUrl && <div className="movie__info">
       <div className="info__left">
          <div className="info">
            <h3>Title</h3>
          <p>{movie.title}</p>
            
          </div>
          <div className="info">
            <h3>Rating</h3>
            <p>{movie.vote_average}</p>

          </div>
          <div className="info">
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
       </div>
           <YouTube vedioId={trailerUrl} opts={opt}  onReady={_onReady} />
        </div>
      }
     
    </div>
  );
}

export default Row;
