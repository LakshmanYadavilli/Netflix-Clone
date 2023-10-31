import React from "react";
import TrailerContainer from "./TrailerContainer";
import TrailerDetails from "./TrailerDetails";

const MainContainer = () => {
  return (
    <div className="static   top-0 h-screen w-screen">
      <TrailerContainer />
      <TrailerDetails />
    </div>
  );
};

export default MainContainer;
