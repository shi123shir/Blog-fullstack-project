
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Register from "./pages/Register/Index"
import Login from "./pages/login/index"
import Home from "./pages/Home/index"
import Single from "./pages/Single/index"
import Writ from './pages/Writ/index'
import "./App.css"

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const LayOut =() => {
    return (
      <>
      <Navbar />
      <Outlet/>
      <Footer/>
      </>
    )
}

const router = createBrowserRouter([
  {
    path:"/",
    element : <LayOut />,
    children: [
       {
        path:"/",
        element :<Home/>
       },
       {
        path:"/single/:id",
        element :<Single/>
       },
       {
        path:"/write",
        element :<Writ/>
       },
    ]
  },
  {
    path:"/register",
    element :  <Register />
  },
  {
    path:"/login",
    element :  <Login />
  },

]);
function App() {
  return (
    <div className='App'>
      <div className='contain4'>
      <RouterProvider router={router} />
      </div>
  </div>
  )
}

export default App;



