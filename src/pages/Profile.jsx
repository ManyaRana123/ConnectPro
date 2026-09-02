import { SlLocationPin } from "react-icons/sl";
import { LuPencil } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { MdOutlineArticle } from "react-icons/md";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance.js";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import DialogBox from "../components/DialogBox.jsx";

export default function Profile(){
    const [firstName, setFname] = useState(null); 
    const [lastName, setLname] = useState(null);
     const [open , setOpen] = useState(false);

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

    return(
      <>
               {/* MAIN CONTENT OF PROFILE PAGE */}
                 <div className="flex flex-col gap-5">
                    {/* div 1 Profile photo and Heading*/}
                  <div className="bg-white shadow-md rounded-2xl border border-gray-200 ">
                    <div className="bg-gradient-to-r from-[#000046] to-[#1cb5e0] w-full h-55 rounded-t-2xl"></div>
                    <div className="pl-6 pr-6 pb-6">
                     <img src="https://i.pravatar.cc/160?img=12" alt="User profile" className="w-30 h-30 rounded-full -mt-15  border border-white border-4"/>
                     <div className="flex justify-between mt-1">

                         <div className="flex flex-col gap-1"> 
                        <div  className="text-2xl font-bold">{firstName} {lastName}</div>
                        <p className="text-sm text-gray-500 font-medium">Senior Product Designer · Building delightful SaaS</p>
                       <div className="flex items-center text-xs text-gray-500 gap-1">
                        <SlLocationPin/><span>San Francisco ,CA &nbsp; .&nbsp;<Link to="#" className="text-blue-600 hover:underline cursor-pointer">842 connections</Link></span>
                       </div>
                          </div>

                         <div className="h-10 w-30 flex justify-center">
                        <button className="flex items-center justify-center gap-2 p-2 border border-gray-200 rounded-full bg-[#F5FAFF] hover:bg-emerald-400 hover:text-white">
                            <LuPencil/> Edit Profile</button>
                         </div>
                     </div>
                    </div>
                  </div>

                    {/* div 2 Views connections views */}
                    <div className="grid grid-cols-3 gap-4 ">
                        <div className="flex items-center justify-start gap-3 bg-white border border-gray-200 rounded-2xl px-7 py-3 shadow-sm">
                        <div className="w-10 h-10 bg-blue-100 rounded-2xl flex justify-center items-center"><LuUsers className="text-blue-600 text-xl"/></div>
                        <div className="">
                           <p className="text-xl font-semibold">842</p>
                           <p className="font-medium text-sm text-gray-500">connections</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-3 bg-white border border-gray-200 rounded-2xl px-7 py-3 shadow-sm">
                        <div className="w-10 h-10 bg-blue-100 rounded-2xl flex justify-center items-center"><MdOutlineArticle className="text-blue-600 text-xl"/></div>
                        <div className="">
                           <p className="text-xl font-semibold">56</p>
                           <p className="font-medium text-sm text-gray-500">Posts</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-start gap-3 bg-white border border-gray-200 rounded-2xl px-7 py-3 shadow-sm">
                       <div className="w-10 h-10 bg-blue-100 rounded-2xl flex justify-center items-center"><MdOutlineRemoveRedEye className="text-blue-600 text-xl"/></div>
                        <div className="">
                           <p className="text-xl font-semibold ">2000</p>
                           <p className="font-medium text-sm text-gray-500">Profile Visits</p>
                        </div>
                      </div>
                    </div>

                    {/* div 3 About */}
                    <div className="p-6 bg-white shadow-sm border border-gray-200 rounded-2xl">
                    <div className="flex justify-between">
                        <p className="font-semibold text-lg">About</p>
                        <button className="hover:bg-emerald-400 p-2 rounded-xl"><LuPencil className="text-gray-600"/></button>
                    </div>
                    <p className="text-gray-800 mt-4 text-left text-sm leading-6">Product designer with 8+ years of experience shaping clean, accessible interfaces for SaaS and fintech teams. I care about systems, craft, and shipping.</p>
                    </div>

                    {/* div 4 skills */}
                      <div className="p-6 bg-white shadow-sm border border-gray-200 rounded-2xl">
                    <div className="flex justify-between">
                        <p className="font-semibold text-lg">Skills</p>
                        <button  className="hover:bg-emerald-400 p-2 rounded-xl"><LuPencil className="text-gray-600"/></button>
                    </div>
                    <div className="flex justify-start gap-2 mt-3">
                         <div className="inline-block flex justify-center items-center bg-blue-100 rounded-2xl hover:bg-blue-50 px-2 py-1"><p className="text-blue-600">React</p></div>
                          <div className="inline-block flex justify-center items-center bg-blue-100 rounded-2xl hover:bg-blue-50  px-2 py-1"><p className="text-blue-600">Node.js</p></div>
                           <div className="inline-block flex justify-center items-center bg-blue-100 rounded-2xl hover:bg-blue-50  px-2 py-1"><p className="text-blue-600">UI/UX Design</p></div>
                            <div className="inline-block flex justify-center items-center bg-blue-100 rounded-2xl hover:bg-blue-50  px-2 py-1"><p className="text-blue-600">Project Management</p></div>
                             <div className="inline-block flex justify-center items-center bg-blue-100 rounded-2xl hover:bg-blue-50  px-2 py-1"><p className="text-blue-600">Typescript</p></div>
                    </div>
                   </div>

                   {/* div 5 Experience */}
                    <div className="p-6 bg-white shadow-sm border border-gray-200 rounded-2xl">
                    <div className="flex justify-between">
                        <p className="font-semibold text-lg">Experience</p>
                        <button  className="hover:bg-emerald-400 p-2 rounded-xl"><LuPencil className="text-gray-600"/></button>
                    </div>
                    <div className="flex flex-col gap-6 mt-4">
                        <div className="flex gap-3">
                    <div className="bg-gradient-to-r from-[#000046] to-[#1cb5e0] w-10 h-10 rounded-2xl"></div>
                    <div>
                        <p className="font-semibold">Senior Product Designer</p>
                        <p className="text-gray-600 text-sm">Linear</p>
                        <p className="text-gray-600 text-xs">2022 – Present · 4 yrs</p>
                        <p className="text-gray-700 text-sm">Lead design on the issue tracking surface and design system.</p>
                    </div>
                    </div>

                    <div className="flex gap-3">
                    <div className="bg-gradient-to-r from-[#00AA00] to-[#a47650] w-10 h-10 rounded-2xl"></div>
                    <div>
                        <p className="font-semibold">Product Designer</p>
                        <p className="text-gray-600 text-sm">Stripe</p>
                        <p className="text-gray-600 text-xs">2019 – 2021 · 3 yrs</p>
                        <p className="text-gray-700 text-sm">Lead design on the issue tracking surface and design system.</p>
                    </div>
                </div>
             </div>
         </div>
                  {/* div 5 Education */}
                  <div className="p-6 bg-white shadow-sm border border-gray-200 rounded-2xl">
                    <div className="flex justify-between">
                        <p className="font-semibold text-lg">Education</p>
                        <button  className="hover:bg-emerald-400 p-2 rounded-xl " onClick={()=>{
                            setOpen(true);
                            }}><LuPencil className="text-gray-600"/>
                        </button>
                    </div>
                    <div className="flex flex-col gap-6 mt-4">
                        <div className="flex gap-3">
                    <div className="bg-gradient-to-r from-[#AAddF6] to-[#1cb5F9] w-10 h-10 rounded-2xl"></div>
                    <div>
                        <p className="font-semibold">Standford University</p>
                        <p className="text-gray-700 text-sm">B.S Human Computer Interaction</p>
                        <p className="text-gray-600 text-xs">2023 – Present · 3 yrs</p>
                    </div>
                    </div>
                    </div>

                    </div>
                    {open && (
                  <DialogBox onClose={() => setOpen(false)} />
                    )}
             </div>
      </>
    )
}