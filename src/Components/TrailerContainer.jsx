import React from "react";
import addTrailer from "../hooks/useAddTrailer";
import { useSelector } from "react-redux";
import { imgCDN } from "../utils/constants";
const TrailerContainer = ({ id, title, image }) => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  // console.log({ movies });
  if (id) {
    addTrailer(id);
    console.log("trailer from searched");
  } else {
    addTrailer(movies?.[0].id);
  }

  const trailer = useSelector((state) => state.movies.trailer);

  return (
    <div className=" w-screen h-[80vh] absolute md:-top-0 xs:-top-10 sm:-top-12 ">
      {trailer && (
        <iframe
          className="w-screen h-full"
          src={`https://www.youtube.com/embed/${trailer.key}?si=F7BX0ODbgzhTAOfO&autoplay=1&mute=1`}
          title="YouTube video player"
          marginWidth={0}
          marginHeight={0}
          frameBorder={0}
          hSpace={0}
          vSpace={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
      {!trailer && (
        <div className="w-full h-screen">
          <img
            src={imgCDN + image}
            alt={title}
            className="w-full xs:h-full  "
          />
        </div>
      )}
    </div>
  );
};

export default TrailerContainer;
