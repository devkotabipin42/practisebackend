import { createBrowserRouter } from "react-router-dom";
import Login from "./features/auth/pages/Login";
import Register from "./features/auth/pages/Register";
import Feed from "./features/posts/pages/Feed";
import CreatePost from "./features/posts/pages/CreatePost";
import Logout from "./features/auth/pages/Logout";
import Profile from "./features/shared/components/Profile";

export const router = createBrowserRouter([
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
  path:'/',
  element:<Feed/>
  },
  {
  path:'/create-post',
  element:<CreatePost/>
  },
  {
    path:"/logout",
    element:<Logout/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])

