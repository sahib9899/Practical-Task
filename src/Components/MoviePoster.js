import React, { useState } from "react";
import moviePoster1 from "../Images/moviePoster1.jpg";
import moviePoster2 from "../Images/moviePoster2.jpg";
import moviePoster3 from "../Images/moviePoster3.jpg";

const MoviePoster = () => {
  const [moviePoster] = useState([moviePoster1, moviePoster2, moviePoster3]);
  return (
    <div className='movie-poster-main'>
      {moviePoster &&
        moviePoster.map((item) => {
          return <img src={item} className='poster' alt='' />;
        })}
    </div>
  );
};

export default MoviePoster;
