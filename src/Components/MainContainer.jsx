import React from "react";
import TrailerContainer from "./TrailerContainer";
import TrailerDetails from "./TrailerDetails";

const MainContainer = () => {
  return (
    <div className="absolute ">
      <TrailerContainer />
      <TrailerDetails />
    </div>
  );
};

export default MainContainer;
