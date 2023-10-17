import React from "react";
import logo from "../assets/Netflix-logo.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
// import { UseSelector } from "react-redux";
const Header = () => {
  let navigate = useNavigate();
  let user = useSelector((state) => state.user);
  // let dispath = useDispatch();
  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        // dispath(removeUser());

        navigate("/", { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
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
