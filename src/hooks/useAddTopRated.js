import { options } from "../utils/constants";
import { useEffect } from "react";
import { addTopRated } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
const useAddTopRated = () => {
  const dispatch = useDispatch();
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => dispatch(addTopRated(response.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useAddTopRated;
