import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTimes, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const MovieControls = ({ movie, type }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    removeMovieFromWatched,
    moveToWatchlist,
  } = useContext(GlobalContext);
  return (
    <div className=" flex absolute">
      {type === "watchlist" && (
        <div className="flex items-center flex-col">
          <h4 className="group-hover:opacity-100 opacity-0 font-bold bg-sky-900 m-1 text-white px-3 rounded-full">{movie.title}</h4>
          <div>
          <button>
            <FontAwesomeIcon
              onClick={() => addMovieToWatched(movie)}
              icon={faEye}
              className=" rounded-lg text-xl w-8 p-1 mr-1 drop-shadow-lg bg-sky-900 hover:bg-sky-700 group-hover:text-white opacity-0 group-hover:opacity-100 transtation-all transform"
            />
          </button>
          <button>
            <FontAwesomeIcon
              onClick={() => removeMovieFromWatchlist(movie.id)}
              icon={faTimes}
              className=" rounded-lg text-xl w-8 p-1 drop-shadow-lg bg-sky-900 hover:bg-sky-700 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all"
            />
          </button>
          </div>
        </div>
      )}
      {type === "watched" && (
        <div className="flex items-center flex-col">
        <h4 className="group-hover:opacity-100 opacity-0 font-bold bg-sky-900 m-1 text-white px-3 rounded-full">{movie.title}</h4>
        <div>
        <button>
          <FontAwesomeIcon
            onClick={() => moveToWatchlist(movie)}
            icon={faEyeSlash}
            className=" rounded-lg text-xl w-8 p-1 mr-1 drop-shadow-lg bg-sky-900 hover:bg-sky-700 group-hover:text-white opacity-0 group-hover:opacity-100 transtation-all transform"
          />
        </button>
        <button>
          <FontAwesomeIcon
            onClick={() => removeMovieFromWatched(movie.id)}
            icon={faTimes}
            className=" rounded-lg text-xl w-8 p-1 drop-shadow-lg bg-sky-900 hover:bg-sky-700 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all"
          />
        </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default MovieControls;
