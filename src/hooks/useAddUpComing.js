import { options } from "../utils/constants";
import { useEffect } from "react";
import { addUpComing } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
const useAddUpComing = () => {
  const dispatch = useDispatch();
  const getMovies = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => dispatch(addUpComing(response.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useAddUpComing;
