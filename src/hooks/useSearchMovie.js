import { useEffect } from "react";
import { options } from "../utils/constants";
function useSearchMovie(movieName) {
  const searchMovieFn = () => {
    fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log("movieSearch", response))
      .catch((err) => console.error(err));
  };

  useEffect(() => searchMovieFn(), []);
}

export default useSearchMovie;
