import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import Intro from './Pages/Intro';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro/>,
  },
  {
    path: "/playground",
    element: <App/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

