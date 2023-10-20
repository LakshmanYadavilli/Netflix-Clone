import React, { useEffect } from "react";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import addNewPlayingMovies from "../hooks/useAddNewMoviesHook";
import MainContainer from "./MainContainer";

const Browse = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  addNewPlayingMovies();
  useEffect(() => {
    if (user === null) return;
  }, [user]);

  return (
    <div>
      <Header />
      <MainContainer />
    </div>
  );
};

export default Browse;
