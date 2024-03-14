import React from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Form from "./pages/Form";
import store from "./redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "forms/:id",
        element: <Form />,
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
