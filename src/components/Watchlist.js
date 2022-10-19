import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import MovieContainer from "./MovieContainer";
import Helmet from "react-helmet";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <div>
      <Helmet>
        <title>
          Watchlist
        </title>
      </Helmet>
      <div className="flex flex-col mx-auto max-w-6xl space-y-5">
        <div className="text-sky-900  font-bold mt-4">
          <h1 className="text-2xl">İzlenecekler</h1>
        </div>
        {watchlist.length > 0 ? (
          <div className="flex flex-row flex-wrap">
            {watchlist.map((movie) => (
              <MovieContainer movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="font-bold">Listenizde Film Yok...</h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
