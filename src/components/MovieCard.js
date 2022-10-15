import { GlobalContext } from "../context/GlobalContext";
import React, { useContext } from "react";

const MovieCard = ({ movie }) => {
  const { addMovieToWatchlist, watchlist, addMovieToWatched, watched } =
    useContext(GlobalContext);
  const storedMovieWatched = watched.find((o) => o.id === movie.id);
  const storedMovie = watchlist.find((o) => o.id === movie.id)
    ? true
    : !!storedMovieWatched;

  return (
    <div className="flex justify-between py-6">
      <div className="flex">
        {movie.poster_path ? (
          <img className=" w-52 h-72" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
        ) : (
          <div className="bg-gray-500 w-52 h-72 "></div>
        )}
        <div className="mx-6 text-xl">
          <h3 className="font-bold text-sky-900">{movie.title}</h3>
          <h4 className="text-gray-500">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4>
            IMDB : <b>{movie.vote_average ? movie.vote_average : "-"}</b>
          </h4>
        </div>
      </div>
      <div className="flex">
        <button
          disabled={storedMovie}
          onClick={() => addMovieToWatchlist(movie)}
          className="disabled:bg-gray-500 bg-sky-900 h-full mx-3 text-white p-5 font-semibold  rounded-lg hover:shadow-2xl hover:bg-sky-800"
        >
          İzlenecekler <br /> Listesine Ekle
        </button>
        <button
          disabled={storedMovieWatched}
          onClick={() => addMovieToWatched(movie)}
          className="disabled:bg-gray-500 bg-sky-900 h-full text-white p-5 font-semibold rounded-lg hover:shadow-2xl hover:bg-sky-800"
        >
          İzlenenler <br /> Listesine Ekle
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
