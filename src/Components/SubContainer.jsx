import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import Card from "./Card";

import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SubContainer = () => {
  const movies = useSelector((state) => state.movies);
  // console.log({ movies: movies.popularMovies });

  return (
    <div className=" absolute xs:top-96 sm:top-[345px] md:top-[480px] bg-black pl-2 pr-2 w-screen z-50">
      <div className="relative xs:-top-36 sm:-top-[64px]">
        <MovieList data={movies?.trendingMovies} type={"Trending Movies"} />
        <MovieList data={movies?.trendingTvShows} type={"Trending TV Series"} />
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
