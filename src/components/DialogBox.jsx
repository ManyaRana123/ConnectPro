import { useFormik } from "formik";
import axiosInstance from "../axios/axiosInstance.js";
import { useState } from "react";


export default function DialogBox({ onClose }) {

    const formik = useFormik({
    initialValues: {
      institute: "",
      degree: "",
      field: "",
      startYear: "",
        endYear: "",
    },
    onSubmit: async (values, resetform) =>{
        console.log(values);
        const result = await axiosInstance.post("/api/users/education", values);
        console.log(result);
        resetform();
        onclose();
    }} );

  return(
    <>
     {/* dialog */}
                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                                    <h2 className="text-lg font-semibold mb-4">Add Education</h2>
                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="mb-4">
                                            <label htmlFor="institute" className="block text-sm font-medium text-gray-700">Institute</label>
                                            <input type="text" id="institute" name="institute" value={formik.values.institute} onChange={formik.handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="degree" className="block text-sm font-medium text-gray-700">Degree</label>
                                            <input type="text" id="degree" name="degree" value={formik.values.degree} onChange={formik.handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="field" className="block text-sm font-medium text-gray-700">Field</label>
                                            <input type="text" id="field" name="field" value={formik.values.field} onChange={formik.handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                        </div>
                                         <div className="mb-4">
                                            <label htmlFor="startYear" className="block text-sm font-medium text-gray-700">StartYear</label>
                                            <input type="text" id="startYear" name="startYear" value={formik.values.startYear} onChange={formik.handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                        </div>
                                         <div className="mb-4">
                                            <label htmlFor="endYear" className="block text-sm font-medium text-gray-700">EndYear</label>
                                            <input type="text" id="endYear" name="endYear" value={formik.values.endYear} onChange={formik.handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                                        </div>
                                        <div className="flex justify-center"
                                         >
                                            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none" onclick={onClose}>
                                            Save Education
                                        </button>
                                        </div>
                                        
                                    </form>
                                </div>
                            </div>
    </>
  )
}
