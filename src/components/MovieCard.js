import { GlobalContext } from "../context/GlobalContext"
import React, { useContext } from 'react'

const MovieCard = ({ movie }) => {
  const { addMovieToWatchlist }= useContext(GlobalContext);
 
  return (
    <div className='flex justify-between py-6'>
       <div className='flex'>
        {movie.poster_path ? (
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
        ) : (
            <div className='bg-gray-500 w-52 h-64 '></div>
        )}
          <div className='mx-6 text-xl'>
            <h3 className='font-bold text-sky-900'>{movie.title}</h3>
            <h4 className='text-gray-500'>{movie.release_date ? movie.release_date.substring(0, 4) : "-"}</h4>
            <h4 >IMDB : <b>{movie.vote_average ? movie.vote_average : "-"}</b></h4>
          </div>
       </div>
       <div className='flex'>
          <button onClick={() => addMovieToWatchlist(movie)} className='bg-sky-700 h-full mx-3 text-white p-5 font-semibold hover:bg-sky-900 rounded-lg'>İzlenecekler <br /> Listesine Ekle</button>
          <button className='bg-sky-700 h-full text-white p-5 font-semibold hover:bg-sky-900 rounded-lg'>İzlenenler  <br /> Listesine Ekle</button>
       </div>
    </div>
  )
}

export default MovieCard
