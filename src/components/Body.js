import React, { useEffect } from 'react'
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter } from "react-router-dom"
import { RouterProvider} from 'react-router-dom';

const Body = () => {

//  const navigate = useNavigate(); it should be done in child components
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element:<Login/>,
    },
    {
      path:"/browse",
      element:<Browse/>
    },
  ])


  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body