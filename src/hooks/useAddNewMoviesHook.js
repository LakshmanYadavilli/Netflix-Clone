import { options } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
const addNewPlayingMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      options
    );
    dispatch(addNowPlayingMovies(res.data.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default addNewPlayingMovies;
