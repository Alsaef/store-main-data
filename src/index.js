import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shope from './components/Shop/Shope';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Login from './components/Login/Login';
import loadCardData from './LoadCardData/LoadCart';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Shope></Shope>
      },
      {
        path:'/orders',
        element:<Orders></Orders>,
        loader: loadCardData
      },
      {
        path:'/login',
        element:<Login></Login>
      },
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
