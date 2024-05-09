import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import App from './App.jsx'
import Bookmarks from './Pages/Bookmarks.jsx';
import Mainlay from './Layouts/Mainlay.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlay></Mainlay>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  

    
    <RouterProvider router={router}></RouterProvider>



 
)
