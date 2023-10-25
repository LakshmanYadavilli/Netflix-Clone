import React, { useState } from "react";

const Search = () => {
  const [key, setKey] = useState("");
  return (
    <div>
      <input
        className=" border-2 border-black w-[30%] ml-[35%] mr-[35%] mt-4"
        type="text"
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="Search the Movies/Series"
      />
    </div>
  );
};

export default Search;
