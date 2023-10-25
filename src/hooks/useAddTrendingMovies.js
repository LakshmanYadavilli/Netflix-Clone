import { options } from "../utils/constants";
import { useEffect } from "react";
import { addTrendingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useAddTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrending = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => dispatch(addTrendingMovies(response.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getTrending();
  }, []);
};

export default useAddTrendingMovies;
