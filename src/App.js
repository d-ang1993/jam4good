import React from "react";
import "./App.css";
import Button from "./Components";
import Footer from "./Components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Fragment>
        <HomePage />
        <Footer></Footer>
      </React.Fragment>
    ),
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
