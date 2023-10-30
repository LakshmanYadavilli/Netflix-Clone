import React from "react";
import { useSelector } from "react-redux";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const TrailerDetails = ({ title, overview }) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log({ location });
  const trailerDetails = useSelector((state) => state.movies.nowPlayingMovies);
  const navigateFn = () =>
    location.pathname === "/browse" &&
    trailerDetails &&
    navigate("/searched/movie", { state: { id: trailerDetails[0].id } });
  // console.log({ trailerDetails });
  return (
    <div className="absolute z-10  text-white p-10 bg-gradient-to-r from-black w-screen h-screen">
      <div className=" xs:absolute xs:top-20 sm:absolute sm:top-32  md:absolute md:top-48">
        <h1 className="xs:text-lg font-bold md:text-4xl font-bold mb-2">
          {title ? title : trailerDetails && trailerDetails[0].title}
        </h1>
        <p className="    text-ellipsis overflow-hidden whitespace-wrap xs:w-2/4 xs:h-16 md:h-28 xs:text-[10px] sm:text-sm md:text-lg  md:w-2/5 ">
          {overview ? overview : trailerDetails && trailerDetails[0].overview}
        </p>
        {location.pathname === "/browse" && (
          <div className="flex mt-4 ">
            <button
              className="bg-white text-black xs:w-20 sm:w-24 xs:h-5 sm:h-7 xs:text-xs sm:text-sm w-28 h-10 rounded mr-2 flex justify-center items-center hover:opacity-70"
              onClick={navigateFn}
            >
              <BsFillPlayFill />
              Play
            </button>
            <button
              className="bg-gray-400 xs:w-20  sm:w-24 xs:h-5 sm:h-7 xs:text-xs sm:text-sm w-28 h-10 rounded bg-opacity-50 flex justify-center items-center hover:opacity-70"
              onClick={navigateFn}
            >
              <AiOutlineInfoCircle />
              More Info
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrailerDetails;
