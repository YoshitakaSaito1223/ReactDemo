import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import App from "./App.jsx";
import ErrorPage from "./error-page";
import JokeApi from "./api/api.jsx";
import StopWatch from "./timer/Stopwatch.jsx";
import Mail from "./mail/Mail.jsx";
import TicTacToe from "./tic-tac-toe/TicTacToe.jsx";

import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/JokeApi",
    element: <JokeApi />,
  },
  {
    path: "/StopWatch",
    element: <StopWatch />,
  },
  {
    path: "/Mail",
    element: <Mail />,
  },
  {
    path : "/TicTacToe",
    element:<TicTacToe />,
  },
]);

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
