import React from "react";
import { useSelector } from "react-redux";
import { BsFillPlayFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";
const TrailerDetails = () => {
  const trailerDetails = useSelector((state) => state.movies.nowPlayingMovies);
  // console.log({ trailerDetails });
  return (
    <div className="absolute z-10  text-white p-10 bg-gradient-to-r from-black w-screen h-screen">
      <div className="absolute top-60">
        <h1 className="text-4xl font-bold mb-2">
          {trailerDetails && trailerDetails[0].title}
        </h1>
        <p className="w-1/4 mb-2 text-xs">
          {trailerDetails && trailerDetails[0].overview}
        </p>
        <div className="flex ">
          <button className="bg-white text-black w-28 h-10 rounded mr-2 flex justify-center items-center hover:opacity-70">
            <BsFillPlayFill />
            Play
          </button>
          <button className="bg-gray-400 w-28 h-10 rounded bg-opacity-50 flex justify-center items-center hover:opacity-70">
            <AiOutlineInfoCircle />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrailerDetails;
