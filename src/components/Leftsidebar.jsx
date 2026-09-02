import { BiHomeAlt } from "react-icons/bi";
import { LuUsers } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { LuSettings } from "react-icons/lu";
import { Link, NavLink} from "react-router-dom";
import axiosInstance from "../axios/axiosInstance.js";
import Logout from "../pages/Logout.jsx";
import { useEffect, useState } from "react";

export default function Leftsidebar() {
  
  const [firstName, setFname] = useState(null); 
    const [lastName, setLname] = useState(null);

    useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const authData = JSON.parse(localStorage.getItem("authData"));
      console.log("Auth Data:", authData);
      const userId = authData.user.id;
      const response = await axiosInstance.get(`api/users/${userId}`);
      console.log("User Data:", response);
      setFname(response.user.firstName);
      setLname(response.user.lastName);
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  return (
    <aside className="sticky top-20 self-start">
      <div className="bg-white shadow-sm border border-gray-200 pb-5 rounded-2xl">
        <div className="h-16 w-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-t-2xl"></div>
        <img
          src="https://i.pravatar.cc/160?img=12"
          alt="User profile"
          className="w-19 h-19 rounded-full cursor-pointer flex mx-auto -mt-10 items-center border border-white border-5"
        />
        <Link to="/profile" aria-label="Profile">
          <div className="text-md font-semibold flex justify-center items-center my-1">
            {firstName} {lastName}
          </div>
        </Link>
        <p className="text-xs w-[80%] max-w-md mx-auto text-center text-gray-500 font-medium flex">
          Senior Product Designer · Building delightful SaaS
        </p>
        <hr className="text-gray-200 mx-auto w-[90%] my-3"></hr>

        <div className="flex gap-6 flex justify-center items-center">
          <div>
            <div className="text-blue-600 font-semibold">842</div>
            <div className="text-xs font-medium text-gray-500">CONNECTIONS</div>
          </div>
          <div>
            <div className="text-blue-600 font-semibold">56</div>
            <div className="text-xs font-medium text-gray-500">POSTS</div>
          </div>
          <div>
            <div className="text-blue-600 font-semibold">1289</div>
            <div className="text-xs font-medium text-gray-500">VISITS</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 bg-white shadow-sm border border-gray-200 pb-5 rounded-2xl px-4 pt-3 mt-4">
        {/* 1 */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 pl-3 rounded-2xl h-10 ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"}`
          }
        >
          <BiHomeAlt className="text-lg" />
          <p className="text-md font-medium">Home</p>
        </NavLink>
        {/* 2 */}
        <NavLink
          to="/mynetwork"
          className={({ isActive }) =>
            `flex items-center gap-3 pl-3 rounded-2xl h-10 ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"}`
          }
        >
          <LuUsers className="text-lg" />
          <p className="text-md font-medium">My Network</p>
        </NavLink>
        {/* 3 */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 pl-3 rounded-2xl h-10 ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"}`
          }
        >
          <FiUser className="text-lg" />
          <p className="text-md font-medium">Profile</p>
        </NavLink>
        {/* 4 */}
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            `flex items-center gap-3 pl-3 rounded-2xl h-10 ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"}`
          }
        >
          <FiBell className="text-lg" />
          <p className="text-md font-medium">Notifications</p>
        </NavLink>
        {/* 5 */}
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 pl-3 rounded-2xl h-10 ${isActive ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"}`
          }
        >
          <LuSettings className="text-lg" />
          <p className="text-md font-medium">Settings</p>
        </NavLink>
        {/* 6 */}
       <Logout/>
      </div>
    </aside>
  );
}
