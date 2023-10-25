import React, { useEffect } from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import RequireAuth from "./RequireAuth";
import Browse from "./Browse";
import Login from "./Login";
import Search from "./Search";

const appRouter = createBrowserRouter([
  {
    path: "/browse",

    element: <Browse />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/search",
    element: <Search />,
  },
]);

const Body = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
