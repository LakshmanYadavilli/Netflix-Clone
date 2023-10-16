import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/",
    element: <Login />,
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
