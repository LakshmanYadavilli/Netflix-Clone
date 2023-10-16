import React, { useState } from "react";
import Header from "./Header";
import NetflixBg from "../utils/Netflix-Bg.png";
// import { useState } from "react";

const name = "bg-black";
const Login = () => {
  let [isSignIn, setIsSignIn] = useState(true);
  let isSignInFn = () => setIsSignIn(!isSignIn);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NetflixBg} alt="bg" />
      </div>
      <form className="block absolute w-1/4 h-2/4 p-8 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80">
        <h1 className="text-2xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <input
          className="py-2 m-2 w-full bg-gray-700 px-1 rounded-lg"
          type="text"
          placeholder="Enter Email"
        />
        <input
          className="block py-2  m-2 w-full bg-gray-700 px-1 rounded-lg"
          type="password"
          placeholder="Enter Password"
        />
        <button className="py-2  m-2 bg-red-600 w-full rounded-lg">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={isSignInFn}>
          {isSignIn
            ? "New to Netflix? Sign Up now."
            : "Already User Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
