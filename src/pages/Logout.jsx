import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance.js";
import { useFormik } from "formik";
import { toast } from "react-toastify";

export default function Logout() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {},
    onSubmit: async () => {
      await handleLogout();
    }
  });

  const handleLogout = async () => {
    try {
      const result = await axiosInstance.post("api/auth/logout");
      if (result.success === true) {
        localStorage.removeItem("authData");
        navigate("/login");
        toast.success("Logout successful!");
      }
    } catch (error) {
      console.log("Logout failed:", error);
      toast.error("Logout failed. Please try again.");
    }
  };
    return(
        <>     <form onSubmit={formik.handleSubmit}>
               <button
                  type="submit"
                  className="flex items-center w-full gap-3 pl-3 rounded-2xl h-10 text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                  disabled={formik.isSubmitting}
                >
                  <LuLogOut className="text-lg" />
                  <p className="text-md font-medium">
                    {formik.isSubmitting ? "Logging out..." : "Logout"}
                  </p>
                </button>
                </form>
                </>
    )
}