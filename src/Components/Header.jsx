import React, { useEffect } from "react";
import logo from "../assets/Netflix-logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
// import { removeUser } from "../utils/userSlice";
// import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
const Header = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;

        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");

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

  return (
    <div className="absolute w-full h-28 px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between items-center">
      <img className="w-44 " src={logo} alt="logo" />
      {user && (
        <button
          className="text-white bg-blue-600 w-28 h-10 rounded"
          onClick={handleLogOut}
        >
          Log Out
        </button>
      )}
    </div>
  );
};

export default Header;
