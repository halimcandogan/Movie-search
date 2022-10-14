import React from "react";
import MovieControls from "./MovieControls";

const MovieContainer = ({ movie, type }) => {
  return (
    <div className="flex justify-around items-end pr-4 pb-4 group">
      { movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
        ) : (
          <div className="bg-gray-500 w-52 h-64 "></div>
        ) }
      <MovieControls movie={movie} type={type} />
    </div>
  );
};

export default MovieContainer;
