import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieContainer from "./MovieContainer";

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div>
      <div className="flex flex-col mx-auto max-w-6xl space-y-5">
        <div className="text-sky-900  font-bold mt-4">
          <h1 className="text-2xl">İzlenenler</h1>
        </div>
        {watched.length > 0 ? (
          <div className="flex flex-row flex-wrap">
            {watched.map((movie) => (
              <MovieContainer movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="font-bold">Listenizde Film Yok...</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
