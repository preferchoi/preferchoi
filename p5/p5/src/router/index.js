import React from 'react';
import {
  createBrowserRouter,
  Route,
  Link,
} from "react-router-dom";
import App from '../App';
import Mondrian from '../component/modrian';
import Rain from '../component/rain';
import Snake from '../component/snake';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "/Mondrian",
    element: <Mondrian />,
  },
  {
    path: "/Rain",
    element: <Rain />
  },
  {
    path: "/Snake",
    element: <Snake />
  }
]);

export default router;