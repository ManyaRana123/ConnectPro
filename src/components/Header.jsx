import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../axios/axiosInstance.js";
import { toast } from "react-toastify";
import defaultProfileImage from "../assets/default-profile-image.png";




function Header(){
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const authData = JSON.parse(localStorage.getItem("authData"));
      const userId = authData.user.id;
      const response = await axiosInstance.get(`/api/users/profile/${userId}`);
      setProfileImage(response.user.profileImage);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      toast.error("Failed to fetch profile.");
    }
  };

    return(

        <header className="border-b-1 border-gray-200 w-full bg-white opacity-200 fixed top-0 z-50">
        <nav className="flex items-center max-w-7xl mx-auto gap-5 px-4 h-16">


        {/* Logo */}
            <Link to="/">
                <div className="flex items-center gap-2 ml-2">
                    <div className="flex items-center gap-2 bg-blue-600 rounded-2xl w-9 h-9 justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase text-white  h-5 w-5" aria-hidden="true"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                    </div>
                    <div className="text-lg text-gray-800 font-bold cursor-pointer">ConnectPro</div>
                </div>
            </Link>



        {/* Search */}
        <form className="focus-within:ring-2 focus-within:ring-blue-600 rounded-full">
             <div className="flex items-center gap-2 w-[500px] h-9 pl-3 bg-gray-100 rounded-full shadow-md">
                 <FaMagnifyingGlass className="text-gray-500"/>
                   <input type="search"  placeholder="Search people, posts, companies..." className="w-full px-1 py-2 text-sm font-semibold text-gray-900 bg-transparent outline-none" />
             </div>
        </form>

        
        
        {/* Notifications and User Profile */}
        <ul className="flex items-center justify-end gap-2 w-[580px] ml-auto">
          <li>
            <Link to="/notifications" aria-label="Notifications">
            <button type="button" className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-gray-200" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-gray-600" aria-hidden="true" >
                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
              </svg>
            </button>
            </Link>
          </li>

          <li>
            <Link to="/profile" aria-label="Profile">
              <img src={profileImage ? profileImage : defaultProfileImage} alt="User profile" className="w-9 h-9 rounded-full cursor-pointer"/>
            </Link>
          </li>
        </ul>

        </nav>
        </header>
    )
}

export default Header;