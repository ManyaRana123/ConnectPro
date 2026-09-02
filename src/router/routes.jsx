import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Feed from "../pages/Feed.jsx";
import MyNetwork from "../pages/MyNetwork.jsx";
import Profile from "../pages/Profile.jsx";
import Notifications from "../pages/Notifications.jsx";
import Settings from "../pages/Settings.jsx";
import Login from "../pages/Login.jsx";
import Signup from "../pages/Signup.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import Layout from "../layout/Layout.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Feed />
          </ProtectedRoute>
        ),
      },
      {
        path: "/mynetwork",
        element:<ProtectedRoute>
          <MyNetwork/>
          </ProtectedRoute> 
      },
      {
        path: "/profile",
        element: <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      },
      {
        path: "/notifications",
        element: <ProtectedRoute>
          <Notifications />
        </ProtectedRoute>
      },
      {
        path: "/settings",
        element: <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
