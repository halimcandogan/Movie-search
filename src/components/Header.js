import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-sky-900 to-sky-800 p-4">
        <div className="flex max-w-6xl mx-auto justify-between items-center">
          <div className="text-white text-lg font-bold tracking-wider">
            <a href=""><Link to={"/add"}>Film Kutusu</Link></a>
          </div>
          <div className="flex space-x-4 ">
            <ul className="flex space-x-8 bg-white  px-4 py-1 rounded-full  drop-shadow-lg items-center">
              <Link to={"/"}>
                <li>İzlenecekler</li>
              </Link>
              <Link to={"/watched"}>
                <li>İzlenenler</li>
              </Link>
            
            <Link to={"/add"}><li className="flex">
              <FontAwesomeIcon
                icon={faPlus}
                className=" rounded-lg text-xl p-1  drop-shadow-lg bg-sky-900 text-white hover:bg-sky-800"
              /></li>
            </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
