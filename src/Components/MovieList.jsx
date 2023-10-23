import React from "react";
import Carousel from "./Carousel/Carousel";
import Card from "./Card";

const MovieList = ({ data, type }) => {
  console.log({ data, type });
  return (
    <div className="ml-4 mr-4 pb-10">
      <h1 className="text-lg font-bold text-white">{type}</h1>
      <Carousel data={data} renderComponent={(item) => <Card data={item} />} />
    </div>
  );
};

export default MovieList;
