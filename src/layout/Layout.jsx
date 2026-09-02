import { Outlet , useLocation} from "react-router-dom";
import Header from "../components/Header";
import Leftsidebar from "../components/Leftsidebar";
import Rightsidebar from "../components/Rightsidebar";
const Layout = () => {
      const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Common Header */}
      <Header />
           <div className="pt-16">
               <div className="mx-auto max-w-7xl gap-6 px-4 py-6 flex">
                {/* Left Sidebar */}
                <Leftsidebar />
                {/* Page Content */}
                   <main className="flex-1">
                      <Outlet />
                   </main>
                   {/* Right Sidebar */}
                   {location.pathname === "/" ? <Rightsidebar /> : ""}
               </div>
               </div>
      
    </div>
  );
};

export default Layout;
