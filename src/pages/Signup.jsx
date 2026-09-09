import { Link } from "react-router-dom"
import { useFormik } from "formik"
import axiosInstance from "../axios/axiosInstance.js"
import { toast } from "react-toastify";

export default function Signup(){
    // it's an object of initiavalues, whenever the page loads it shows empty fields.
    const initialState = {
      firstName : "",
      lastName :"",
      email :"",
      phoneNumber : "",
      password : "",
      confirmPassword : "",
      profileImage : ""

    }
    // it is a hook . it accepts an object and stores data in key value pair.
    const formik = useFormik({
      initialValues: initialState,
      onSubmit:async (values,{resetForm})=>{
      console.log(values);
       const result = await axiosInstance.post("api/auth/signup", values);
       console.log(result);
       toast.success("Account created successfully!");
       resetForm();
    }
    })
    return(
      <>
       <div>

        {/* div 1 */}
          <div className="w-full mx-auto max-w-lg pt-6">
            <div className="flex items-center gap-2 ml-2">
            <div className="flex items-center gap-2 bg-blue-600 rounded-2xl w-9 h-9 justify-center cursor-pointer">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-briefcase text-white  h-5 w-5" aria-hidden="true"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
             </div>
             <div className="text-xl text-gray-800 font-bold cursor-pointer">ConnectPro</div>
             </div>
          </div>
            

          {/* div 2 */}
          <div className="w-full mx-auto max-w-lg bg-white px-10 py-7 border border-gray-200 rounded-2xl shadow-sm mt-6">
              <h1 className="font-bold text-2xl">Create your account</h1>
              <p className="mt-1 text-gray-600">Join thousands of professionals on ConnectPro.</p>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-21 w-21 rounded-full border border-gray-300 bg-gray-100 shadow-sm flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-camera h-6 w-6 text-muted-foreground" aria-hidden="true"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
                </div>
                <div>
                    <p className="text-sm font-medium">Profile photo</p>
                    <p className="text-gray-500 text-xs">PNG or JPG, up to 2MB.</p>
                </div>
              </div>


             {/* form */}
             <div className="mt-6">
               <form onSubmit={formik.handleSubmit}>
                {/* 1 */}
                 <div className="mb-4">
                  <div>
                    <label htmlFor="profile-Url" className="block">Profile URL</label>
                   <input id="profile-Url" type="url" name="profileImage" value={formik.values.profileUrl} onChange={formik.handleChange} className="border border-gray-200 w-full rounded-lg border border-gray-200 shadow-sm px-3 py-1 outline-none focus:border-blue-700"/></div>
                </div>
                <div className="flex justify-between">
                <div>
                  <label htmlFor="first-name" className="block">First name</label>
                 <input id="first-name" type="text" name="firstName" value={formik.values.firstName} onChange={formik.handleChange} className="border border-gray-200 rounded-lg border border-gray-200 shadow-sm px-3 py-1 outline-none focus:border-blue-700"/>
                </div>

                <div>
                  <label htmlFor="last-name" className="block">Last name</label>
                 <input id="last-name" type="text" name="lastName" value={formik.values.lastName} onChange={formik.handleChange} className="border border-gray-200 rounded-lg border border-gray-200 shadow-sm px-3 py-1 outline-none focus:border-blue-700"/>
                </div>
               </div>

               {/* 2  */}
               <div className="mt-4">
                <label htmlFor="email" className="block">Email</label>
                 <input id="email" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} className="border border-gray-200 w-full rounded-lg border border-gray-200 shadow-sm px-3 py-1 outline-none focus:border-blue-700"/>
               </div>
                
                {/* 3 */} 
               <div className="mt-4">
                  <label htmlFor="phone" className="block">Phone number</label>
                 <input id="phone" type="tel" name="phoneNumber" value={formik.values.phoneNumber} onChange={formik.handleChange} className="border border-gray-200 rounded-lg border border-gray-200 shadow-sm px-3 py-1 w-full outline-none focus:border-blue-700" placeholder="+1 (555) 000-0000"/>
                </div>

               {/* 4 */}
               <div className="flex justify-between mt-4">
                <div>
                  <label htmlFor="password" className="block">Password</label>
                 <input id="password" type="password" name="password" value={formik.values.password} onChange={formik.handleChange} className="border border-gray-200 rounded-lg border border-gray-200 shadow-sm px-3 py-1 outline-none focus:border-blue-700"/>
                </div>

                <div>
                  <label htmlFor="confirm-password" className="block">Confirm password</label>
                 <input id="confirm-password" type="password" name="confirmPassword" value={formik.values.confirmPassword} onChange={formik.handleChange} className="border border-gray-200 rounded-lg border border-gray-200 shadow-sm px-3 py-1 outline-none focus:border-blue-700"/>
                </div>
              </div>

              <button type="submit" className="bg-blue-600 text-white hover:bg-blue-500 cursor-pointer shadow:sm w-full mt-4 p-2 rounded-full font-medium" disabled={formik.isSubmitting}>
                {
                  formik.isSubmitting ?("Creating account..."):("Create account")

                }
               </button>
                
                </form> 
             </div>


             {/* div 3 */}
              <div className="flex justify-center mt-4">
                <p className="text-gray-500">Already have an account? <Link to="/login"><span className="text-blue-800 hover:underline cursor-pointer">login</span></Link></p>
              </div>




          </div>
       </div>
      </>

    )
}