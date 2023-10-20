import React from "react";
import addTrailer from "../hooks/useAddTrailer";
import { useSelector } from "react-redux";
const TrailerContainer = () => {
  const movies = useSelector((state) => state.movies?.nowPlayingMovies);
  console.log({ movies });
  addTrailer(movies?.[0].id);
  const trailer = useSelector((state) => state.movies.trailer);

  return (
    <div className="w-screen absolute aspect-video">
      {trailer && (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${trailer.key}?si=F7BX0ODbgzhTAOfO&autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      )}
    </div>
  );
};

export default TrailerContainer;
