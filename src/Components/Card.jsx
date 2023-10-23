import React from "react";

const Card = ({ data }) => {
  console.log({ data });
  return (
    <div className="w-[10vw] h-40 cursor-pointer bg-yellow-400   hover:scale-y-[120%] ">
      <img
        className="w-[20vw] h-40"
        src={"https://image.tmdb.org/t/p/original" + data?.poster_path}
        alt={data.title}
      />
    </div>
  );
};

export default Card;
