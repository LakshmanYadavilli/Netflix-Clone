import { options } from "../utils/constants";
import { useEffect } from "react";
import { addMovieDetails } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useGetMovieDetails = (id) => {
  const dispatch = useDispatch();
  const getMovieDetails = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => dispatch(addMovieDetails(response)))
      .catch((err) => console.error(err));
  };

  useEffect(() => getMovieDetails(), []);
};

export default useGetMovieDetails;
