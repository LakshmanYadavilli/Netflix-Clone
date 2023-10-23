import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import addNewPlayingMovies from "../hooks/useAddNewMoviesHook";
import addNewPopularMovies from "../hooks/useAddPopularMovies";
import addUpComing from "../hooks/useAddUpComing";
import addTopRated from "../hooks/useAddTopRated";
import MainContainer from "./MainContainer";
import SubContainer from "./SubContainer";

const Browse = () => {
  const user = useSelector((state) => state.user);
  console.log({ user });
  const navigate = useNavigate();
  addNewPlayingMovies();
  addNewPopularMovies();
  addTopRated();
  addUpComing();

  return (
    <div>
      <div className="w-screen h-screen">
        <Header className="w-screen" />
        <MainContainer className="w-screen h-screen" />
      </div>
      <SubContainer />
    </div>
  );
};

export default Browse;
