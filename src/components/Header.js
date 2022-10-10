import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>
      <div className='container bg-gradient-to-r from-sky-900 to-sky-800 p-4'>
          <div className='flex max-w-6xl mx-auto justify-between items-center'>
              <div className='text-white text-lg font-mono  tracking-wider'>
                Film Kutusu
              </div>
              <div className='flex space-x-4 items-center'>
              <ul className='flex space-x-8 bg-white  px-4 py-1 rounded-full items-center drop-shadow-lg'>
                <Link to={"/"}><li>İzlenecekler</li></Link>
                <Link to={"/watched"}><li>İzlenenler</li></Link>
              </ul>
              <Link to={"/add"}>
                <FontAwesomeIcon icon={faPlus} className=" rounded-lg text-xl p-1 mr-3 drop-shadow-lg bg-white hover:bg-white"/></Link>
                </div>  
          </div>
      </div>
    </div>
  )
}

export default Header
