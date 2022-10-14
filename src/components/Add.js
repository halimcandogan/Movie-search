import React, { useState } from "react";
import MovieCard from "./MovieCard";

const Add = () => {
  const [searchvalue, setSearchvalue] = useState("");
  const [results, setResults] = useState([]);

  function onChange(e) {
    setSearchvalue(e.target.value);

    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMBD_API}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }
  return (
    <div className="flex flex-col max-w-6xl mx-auto">
      <div className="flex  items-center">
        <img src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg" />
        <div className="absolute text-white font-bold pl-10 pr-10 ">
          <h1 className="text-5xl">Hoş Geldiniz.</h1>
          <h2 className="text-3xl mt-3">
            Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
          </h2>
          <input
            type="text"
            value={searchvalue}
            onChange={onChange}
            placeholder="Film, dizi ara..."
            className="bg-white outline-none text-black p-2 px-5 mt-3 rounded-full font-normal block"
          />
        </div>
      </div>
      <ul>
        {results.map((movie) => (
          <li>
            <MovieCard key={movie.id} movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Add;
