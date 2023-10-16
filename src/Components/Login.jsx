import React, { useState, useRef } from "react";
import Header from "./Header";
import NetflixBg from "../assets/Netflix-Bg.png";
import { userValdiation } from "../utils/userValdiation";
// import { useState } from "react";

const Login = () => {
  let [isSignIn, setIsSignIn] = useState(true);
  let [errMsg, setErrMsg] = useState(null);
  let isSignInFn = () => setIsSignIn(!isSignIn);
  let email = useRef(null);
  let password = useRef(null);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={NetflixBg} alt="bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="block absolute w-1/4 h-auto p-8 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80"
      >
        <h1 className="text-2xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            className="py-2 m-2 w-full bg-gray-700 px-1 rounded-lg"
            type="text"
            placeholder="Enter Fullname"
          />
        )}

        <input
          ref={email}
          className="py-2 m-2 w-full bg-gray-700 px-1 rounded-lg"
          type="text"
          placeholder="Enter Email"
          required
        />

        <input
          ref={password}
          className="block py-2  m-2 w-full bg-gray-700 px-1 rounded-lg"
          type="password"
          placeholder="Enter Password"
          required
        />
        {errMsg !== null && <p className="text-red-700">*{errMsg}</p>}
        <button
          className="py-2  m-2 bg-red-600 w-full rounded-lg"
          onClick={() => {
            if (email.current.value !== "" && password.current.value !== "") {
              console.log("valFn");
              let res = userValdiation(
                email.current.value,
                password.current.value
              );
              setErrMsg(res);
            }
          }}
        >
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
