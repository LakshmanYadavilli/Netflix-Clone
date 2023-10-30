import React from "react";
import { useNavigate } from "react-router-dom";
const Card = ({ data }) => {
  const navigate = useNavigate();
  //   console.log({ data });
  return (
    <div
      className="xs:w-[33vw] sm:w-[20vw] md:w-[10vw] h-40 cursor-pointer    hover:scale-y-[120%] "
      onClick={() => {
        navigate("/searched/movie", { state: { id: data.id } });
      }}
    >
      <img
        className=" xs:w-[33vw] md:w-[20vw] h-40"
        src={"https://image.tmdb.org/t/p/original" + data?.poster_path}
        alt={data.title}
      />
    </div>
  );
};

export default Card;
