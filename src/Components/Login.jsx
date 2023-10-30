import React, { useState, useRef, useEffect } from "react";
import Header from "./Header";
import NetflixBg from "../assets/Netflix-Bg.png";
import { userValdiation } from "../utils/userValdiation";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// import { useState } from "react";

const Login = () => {
  let [isSignIn, setIsSignIn] = useState(true);
  let [errMsg, setErrMsg] = useState(null);
  let isSignInFn = () => setIsSignIn(!isSignIn);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let email = useRef(null);
  let password = useRef(null);
  let name = useRef(null);
  const smStyles = "sm:w-[90%] sm:text-lg sm:h-6 ";
  const mdStyles = "md:h-10";
  const xsStyles = "xs:w-[90%]";

  const valdiationFn = () => {
    if (email.current.value !== "" && password.current.value !== "") {
      let res = userValdiation(email.current.value, password.current.value);
      setErrMsg(res);
    }
    if (!errMsg) {
      if (!isSignIn) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, { displayName: name.current.value })
              .then(() => {
                let { uid, email, displayName } = auth.currentUser;

                dispatch(addUser({ uid, email, displayName }));

                // navigate("/browse", { replace: true });
              })
              .catch((e) => console.error(e));
            // console.log({ user });

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMsg(errorCode + "-" + errorMessage);
            clg({ error: errorCode + "-" + errorMessage });
            // ..
          });
      } else {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            navigate("/browse");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setErrMsg(errorCode + "-" + errorMessage);
          });
      }
    }
  };
  return (
    <div className="w-screen h-screen">
      <Header isSignIn={isSignIn} />
      <div className="absolute">
        <img className="w-screen h-screen" src={NetflixBg} alt="bg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="block absolute xs:w-2/4 sm:w-[40%] w-1/4 mt-[25%] h-[50%] p-8 bg-black  mx-auto left-0 right-0 text-white bg-opacity-80"
      >
        <h1 className=" xs:text-lg sm:text-2xl text-2xl font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className={`py-2 m-2  bg-gray-700 px-1 rounded-lg xs:h-6 xs:w-[80%]  xs:text-xs ${smStyles} ${mdStyles} `}
            type="text"
            placeholder="Enter Fullname"
          />
        )}

        <input
          ref={email}
          className={`py-2 m-2 w-full bg-gray-700 px-1 rounded-lg xs:h-6 xs:w-[90%] ${smStyles} ${mdStyles} xs:text-xs`}
          type="text"
          placeholder="Enter Email"
          required
        />

        <input
          ref={password}
          className={` block py-2  m-2 w-full bg-gray-700 px-1 rounded-lg xs:h-6 xs:w-[90%] ${smStyles} ${mdStyles} xs:text-xs `}
          type="password"
          placeholder="Enter Password"
          required
        />
        {errMsg !== null && <p className="text-red-700">*{errMsg}</p>}
        <button
          className={`m-2 bg-red-600 xs:w-[90%] ${smStyles} ${mdStyles} xs:h-5 xs:text-xs w-full rounded-lg`}
          onClick={valdiationFn}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn && (
          <p
            className="cursor-pointer xs:text-xs sm:text-sm"
            onClick={isSignInFn}
          >
            New to Netflix? <span className="text-blue-600">Sign Up now.</span>
          </p>
        )}
        {!isSignIn && (
          <p className="cursor-pointer xs:text-xs" onClick={isSignInFn}>
            Already User <span className="text-blue-600">Sign In now.</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
