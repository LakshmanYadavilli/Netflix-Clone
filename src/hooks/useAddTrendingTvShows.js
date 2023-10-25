import { options } from "../utils/constants";
import { useEffect } from "react";
import { addTrendingTvShows } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useAddTrendingTvShows = () => {
  const dispatch = useDispatch();
  const getTrending = () => {
    fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => dispatch(addTrendingTvShows(response.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getTrending();
  }, []);
};

export default useAddTrendingTvShows;
