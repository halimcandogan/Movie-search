import React from "react";
import MovieControls from "./MovieControls";

const MovieContainer = ({ movie, type }) => {
  return (
    <div className="flex justify-around items-end pr-4 pb-4 group">
      { movie.poster_path ? (
          <img className="w-52 h-72" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
        ) : (
          <div className="bg-gray-500 w-52 h-72 "></div>
        ) }
      <MovieControls movie={movie} type={type} />
    </div>
  );
};

export default MovieContainer;
