import React from "react";
import addTrailer from "../hooks/useAddTrailer";
import { useSelector } from "react-redux";
const TrailerContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  // console.log({ movies });
  addTrailer(movies?.[0].id);
  const trailer = useSelector((state) => state.movies.trailer);

  return (
    <div className=" w-screen h-screen absolute md:-top-0 xs:-top-28 sm:-top-24 ">
      {trailer && (
        <iframe
          className="w-screen h-screen"
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
    </div>
  );
};

export default TrailerContainer;
