import { useFormik } from "formik";
import { LuUsers } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance.js"

export default function Login(){
    const navigate = useNavigate();      
     const initialState = {
        email : "",
        password :"",
    }  
    const formik = useFormik({
        initialValues : initialState,
        onSubmit: async (values, { resetForm }) => {
    try {
        console.log("Login values:", values);

        const result = await axiosInstance.post(
            "api/auth/login",
            values
        );

        console.log("Axios response:", result);

        localStorage.setItem(
            "authData",
            JSON.stringify(result)
        );

        navigate("/");
        
    } catch (error) {
        console.error("Login failed:", error);
        resetForm();
    }
}
    });

    return(

        <>
        <div className="grid grid-cols-2 min-h-screen">
            {/* ............1..........*/}
            <div className="px-10 py-16">
                {/* logo and brand */}
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 bg-blue-600 rounded-2xl w-9 h-9 justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase text-white  h-5 w-5" aria-hidden="true"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                    </div>
                    <div className="text-lg text-gray-800 font-bold cursor-pointer">Connect Pro</div>
                    </div>
                    {/* Another Divvvvvvvvvvvvvvvvvvvvvv */}
                    <div className="mx-auto flex w-full max-w-sm flex-col mt-20">

                        <div>
                        <h1 className="text-3xl font-bold">Welcome back</h1>
                        <p className="text-gray-500 mt-1">Sign in to continue building your network.</p>
                        </div>
                    {/* Formmmmmmmmmmmmm */}
                        <div className="mt-8">
                            <form onSubmit={formik.handleSubmit}>

                                <label htmlFor="email" className="block text-md font-medium text-gray-800">Email</label>
                                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="you@example.com" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm outline-none focus:border-blue-600"/>

                                <label htmlFor="password" className="block mt-3 text-md font-medium text-gray-800">Password</label>
                                <input type="password" id="password" placeholder="••••••••" name="password" onChange={formik.handleChange} value={formik.values.password}  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm outline-none focus:border-blue-600"/>

                                <div className="flex justify-between items-center mt-3">
                                <div>
                                <label className="text-md text-gray-500 flex items-center gap-2">
                                <input type="radio" name="payment" value="cash" className="h-5 w-5 accent-blue-600 cursor-pointer"/> Remember me for 30 days
                                </label>
                                </div>
                                <div>
                                <p className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">Forget password?</p>
                                </div>
                                </div>
                                <button type="submit" className="mt-5 w-full bg-blue-600 text-white py-2 px-4 rounded-3xl hover:bg-blue-500 transition-colors" disabled={formik.isSubmitting}>
                                    {
                                        formik.isSubmitting?("logging in..."):("log in")
                                    }
                                   </button>
                            </form>
                        </div>
                        {/* Sign up page link */}
                        <div className="mt-5 text-center text-gray-500">
                            <p>New to ConnectPro?<Link to="/signup"><span className="text-blue-600 font-medium hover:underline cursor-pointer">Create an account</span></Link> </p>
                        </div>
                    </div>
            </div>
            {/* ............2.......... */}
            <div className="px-10 py-16 bg-[radial-gradient(circle_at_top_left,_#293AF0_0%,_#1486F8_67%,_#00D4FF_85%,_#00FFBB_100%)]">
                <div>
                    <h1 className="text-white text-4xl font-bold leading-tight">Grow the network that grows your career.</h1>
                    <p className="text-gray-200 text-opacity-50 mt-6 w-[60%]">ConnectPro is where modern professionals share work, discover opportunities, and build relationships that compound.</p>
                </div>
                <div className="grid grid-cols-3 gap-4 content-end h-100">
                    <div className="flex flex-col gap-1 rounded-xl bg-white/10 p-4 text-white shadow-lg backdrop-blur">
                        <LuUsers/>
                        <p className="text-2xl font-bold">2.4M</p>
                        <p className="text-gray-300 text-sm font-medium">Members</p>
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-white/10 p-4 text-white shadow-lg backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up h-5 w-5" aria-hidden="true"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                        <p className="text-2xl font-bold">120M</p>
                        <p className="text-gray-200 text-sm font-medium">Connections</p>
                    </div>
                    <div className="flex flex-col gap-1 rounded-xl bg-white/10 p-4 text-white shadow-lg backdrop-blur">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase h-5 w-5" aria-hidden="true"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                        <p className="text-2xl font-bold">48k</p>
                        <p className="text-gray-100 text-sm font-medium">Companies</p>
                    </div>
                </div>
            </div>

        </div>        
        </>
    )
}