import { options } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useAddPopularMovies = () => {
  const dispatch = useDispatch();
  const getPopular = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => dispatch(addPopularMovies(response.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getPopular();
  }, []);
};

export default useAddPopularMovies;
