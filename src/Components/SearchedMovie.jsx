import React from "react";
import { useLocation } from "react-router-dom";
import useGetMovieDetails from "../hooks/useGetMovieDetails";
import TrailerContainer from "./TrailerContainer";
import { useSelector } from "react-redux";
import TrailerDetails from "./TrailerDetails";
import Header from "./Header";
import { imgCDN } from "../utils/constants";

const SearchedMovie = () => {
  const { state } = useLocation();
  const movieDetails = useSelector((state) => state.movies.movieDetails);
  console.log({ movieDetails });
  let genres = "";
  if (movieDetails) {
    if (movieDetails.genres) {
      for (let i of movieDetails.genres) {
        genres += i.name + ",";
      }
    }
  }
  console.log({ genres });
  const { id } = state;
  useGetMovieDetails(id);
  console.log({ id });

  return (
    <div className="h-screen">
      <div className="h-[10vh]">
        <Header id={id} />
        <TrailerContainer
          id={id}
          title={movieDetails?.title}
          image={movieDetails?.poster_path}
        />
        <TrailerDetails
          title={movieDetails?.title}
          overview={movieDetails?.overview}
        />
      </div>
      <div className="flex justify-around absolute xs:h-[50%] xs:top-[58%] sm:top-[60vh] md:top-[80vh] h-[50vh] z-50 bg-red-500 w-screen p-4">
        <div>
          <h1>
            <span className=" xs:text-xl text-2xl font-bold">
              Orginal Title:
            </span>
            <span className="text-lg text-white">
              {movieDetails?.original_title}
            </span>
          </h1>
          <p>
            <span className="xs:text-lg text-xl font-bold">Tagline:</span>
            <span className="text-lg text-white">{movieDetails?.tagline}</span>
          </p>
          <p>
            <span className="xs:text-lg text-xl font-bold">Genres:</span>
            <span className="text-lg text-white">{genres}</span>
          </p>

          <p>
            <span className="xs:text-lg text-xl font-bold">Release Date:</span>
            <span className="text-lg text-white">
              {movieDetails?.release_date}
            </span>
          </p>
          <p>
            <span className="xs:text-lg text-xl font-bold">Runtime:</span>
            <span className="text-lg text-white">
              {movieDetails?.runtime}min
            </span>
          </p>
          <p>
            <span className="xs:text-lg text-xl font-bold">IMDB:</span>
            <a
              className="text-white"
              href={"https://www.imdb.com/title/" + movieDetails?.imdb_id}
              target="_blank"
            >
              View More
            </a>
          </p>
        </div>
        <img
          src={imgCDN + movieDetails?.poster_path}
          alt={movieDetails?.title}
          className="sm:w-[300px] md:w-[400px] h-[200px] xs: hidden sm:inline rounded"
        />
      </div>
    </div>
  );
};

export default SearchedMovie;
