import React, { useEffect } from "react";
import logo from "../assets/Netflix-logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
// import { removeUser } from "../utils/userSlice";
// import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
const Header = ({ id }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  let location = useLocation();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid, email, displayName }));

        if (location.pathname === "/searched/movie") {
          navigate("/searched/movie", { state: { id } });
        } else {
          navigate("/browse");
        }

        // ...
      } else {
        // User is signed out
        // ...

        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  // let dispath = useDispatch();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // dispath(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <div className="absolute top-0 w-full h-28 px-8 py-2 bg-gradient-to-b from-black z-20  flex justify-between items-center">
      <img
        className="w-44 xs:w-36 xs:h-16 xs:relative xs:-top-4 "
        src={logo}
        alt="logo"
      />

      {user && (
        <div className="flex justify-between items-center">
          {/* <button>Home</button> */}
          {location.pathname !== "/browse" && (
            <AiOutlineHome
              className="cursor-pointer text-white mr-4 xs:text-xl sm:text-2xl  relative -top-4"
              onClick={() => navigate("/browse")}
            />
          )}
          <button
            className="mr
            -4 text-white  w-28 h-32 mr-2  xs:w-12 xs:text-xs xs:h-6 xs:relative xs:-top-4 rounded bg-red-700  "
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="text-white  w-28 h-32  xs:w-12 xs:text-xs xs:h-6 xs:relative xs:-top-4 rounded bg-red-700  "
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
