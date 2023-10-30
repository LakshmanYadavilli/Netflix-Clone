import React, { useState } from "react";
import useSearchMovie from "../hooks/useSearchMovie";
import { options, imgCDN } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Audio } from "react-loader-spinner";
const Search = () => {
  const navigate = useNavigate();
  const [key, setKey] = useState("");
  const [id, setId] = useState(0);
  const [searchArr, setSearchArr] = useState(null);
  const [loader, setLoader] = useState(false);
  const [msg, setMsg] = useState(false);

  console.log({ searchArr });
  useEffect(() => {
    if (key.length === 0) setSearchArr([]);
  }, [key]);
  const searchMovieFn = (movieName) => {
    if (movieName.length === 0) return;
    if (id !== 0) {
      clearTimeout(id);
    }

    let timerId = setTimeout(() => {
      setLoader(true);
      fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movieName +
          "&include_adult=false&language=en-US&page=1",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setSearchArr(response.results);
          setMsg(true);
          console.log(response.results);
          setLoader(false);
        })
        .catch((err) => {
          console.error(err);
          setLoader(false);
        });
    }, 3000);
    setId(timerId);
  };

  return (
    <div className="bg-red-700 w-screen h-screen text-center">
      {loader && (
        <div className="absolute top-1/2 w-[20vw] left-[40vw] flex justify-center items-center">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
      {key.length === 0 && searchArr?.length == 0 && (
        <h className="absolute top-[48vh] left-[25vw] w-1/2  text-2xl font-bold ">
          Enter the key to Search Movie/Series
        </h>
      )}
      {msg && searchArr?.length === 0 && !loader && (
        <h className="absolute top-[48vh] left-[25vw] w-1/2  text-2xl font-bold ">
          No Result Found
        </h>
      )}
      <input
        className=" border-2 border-black w-[30%] ml-[35%] mr-[35%] mt-4 outline-none"
        type="search"
        value={key}
        onChange={(e) => {
          setKey(e.target.value);

          setMsg(false);
          searchMovieFn(e.target.value);
        }}
        placeholder="Search the Movies/Series"
      />
      <div className="flex  flex-wrap w-screen">
        {searchArr?.map((i) => {
          if (!i.poster_path) return;
          return (
            <div
              key={i.poster_path}
              className="w-[19%] m-[.5%] bg-yellow-500 rounded  hover:scale-y-90 hover:scale-x-90 cursor-pointer  "
              onClick={() =>
                navigate("/searched/movie", {
                  state: {
                    id: i.id,
                  },
                })
              }
            >
              <img
                src={imgCDN + i?.poster_path}
                alt={i.title}
                className="w-screen  h-56 rounded"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
