import { options } from "../utils/constants";
import { useEffect } from "react";
import { addTrailer } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
const useAddTrailer = (id) => {
  const dispatch = useDispatch();
  const getTrailer = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        let arr = response.results.filter((i) => (i.type = "Trailer"));
        arr.length
          ? dispatch(addTrailer(arr[0]))
          : dispatch(addTrailer(response.results[0]));

        // console.log(response.results);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    if (id === undefined) return;
    getTrailer();
  }, [id]);
};

export default useAddTrailer;
