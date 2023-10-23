import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import Card from "./Card";

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SubContainer = () => {
  const movies = useSelector((state) => state.movies);
  // console.log({ movies: movies.popularMovies });

  return (
    <div className="bg-black pl-2 pr-2 w-screen">
      <div className="relative -top-32 z-50">
        <MovieList
          data={movies?.nowPlayingMovies}
          type={"Now Playing Movies"}
        />
        <MovieList data={movies?.popularMovies} type={"Popular Movies"} />
        <MovieList data={movies?.topRated} type={"Top Rated Movies"} />
        <MovieList data={movies?.upComing} type={"Up Coming Movies"} />
      </div>
    </div>
  );
};

export default SubContainer;
