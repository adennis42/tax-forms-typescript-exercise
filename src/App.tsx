import React from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Listings from "./pages/Listings";
import Listing from "./pages/Listing";
import MyListings from "./pages/MyListings";
import Submissions from "./pages/Submissions";
import store from "./redux";
import MyStatements from "./pages/MyStatements";
import StatementForm from "./pages/StatementForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "listings",
        element: <Listings />,
      },
      {
        path: "claimed",
        element: <MyListings />,
      },
      {
        path: "claimed/:id",
        element: <Listing />,
      },
      {
        path: "submissions",
        element: <Submissions />
      },
      {
        path: "statements",
        element: <MyStatements />
      }, 
      {
        path: "create-statement",
        element: <StatementForm />
      },
      {
        path: "update-statement/:id",
        element: <StatementForm />
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
