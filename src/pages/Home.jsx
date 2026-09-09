import { TbPhoto } from "react-icons/tb";
import { PiNotepad } from "react-icons/pi";
import { MdOutlineArticle } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiShareLine } from "react-icons/ri";
import axiosInstance from "../axios/axiosInstance.js";
import { useFormik } from "formik";
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import defaultProfileImage from "../assets/default-profile-image.png";  


export default function Home() {
  const [posts, setPosts] = useState([]);
  const[profileImage, setProfileImage] = useState(null);

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
    },
    onSubmit: async (values, { resetForm }) => {
      try {
        await axiosInstance.post("api/posts", values);
        toast.success("Post created successfully!");
        getPosts();
        resetForm();
      } catch (error) {
        console.error("Post failed:", error);
        toast.error("Post Failed,please try again.");
        resetForm();
      }
    },
  });

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const authData = JSON.parse(localStorage.getItem("authData"));
      console.log("Auth Data:", authData);
      const userId = authData.user.id;
      const response = await axiosInstance.get(`api/posts`);
      console.log("Posts:", response);
      setPosts(response.posts);
    } 
    catch (error) {
      console.log("Failed to fetch posts:", error);
    }
  };
  
  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const authData = JSON.parse(localStorage.getItem("authData"));
      const userId = authData.user.id;
      const response = await axiosInstance.get(`/api/users/profile/${userId}`);
      console.log("Profile:", response);
      setProfileImage(response.user.profileImage);
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      toast.error("Failed to fetch profile.");
    }
  };

  return (
    <>
      <main>
        <section>
          {/* div 1 */}
          <div className="bg-white shadow-sm border border-gray-200 pb-3 rounded-2xl px-4 pt-4">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex gap-2">
                <img
                  src={profileImage ? profileImage : defaultProfileImage}
                  alt="User profile"
                  className="w-15 h-15 rounded-full cursor-pointer flex mx-auto items-center border border-white border-5"
                />
                <input
                  id="content"
                  name="content"
                  className="w-full p-2 shadow-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 bg-gray-100"
                  placeholder="What's on your mind, Alex?"
                  type="text"
                  value={formik.values.content}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="w-full mt-4 pl-5 p-2 shadow-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 bg-gray-100 flex gap-2 items-center">
                <TbPhoto
                  htmlFor="fileInput"
                  className="text-blue-500 text-lg cursor-pointer"
                />
                <input
                  type="text"
                  id="image"
                  name="image"
                  placeholder="Enter your image url"
                  className="outline-none w-full "
                  value={formik.values.image}
                  onChange={formik.handleChange}
                />
              </div>

              <hr className="text-gray-200 mx-auto w-[100%] mt-4"></hr>
              <div className="flex justify-between pt-3">
                <div className="flex gap-4 pl-3">
                  <div className="flex gap-2 items-center">
                    <TbPhoto className="text-blue-500 text-lg cursor-pointer" />
                    <p className="text-gray-600 text-sm">Photo</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <PiNotepad className="text-green-500 text-lg cursor-pointer" />
                    <p className="text-gray-600 text-sm">Events</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <MdOutlineArticle className="text-blue-500 text-lg cursor-pointer" />
                    <p className="text-gray-600 text-sm">Article</p>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-500"
                >
                  {formik.isSubmitting ? "Posting..." : "Post"}
                </button>
              </div>
            </form>
          </div>

          {/* div 2 */}
          {posts?.map((post) => {
            return(

            <Fragment key={post._id}>          
              {/* Post Card */}
              <div className="bg-white pt-4 border border-gray-200 mt-4 shadow-sm rounded-2xl">
                <div className="px-5">
                  <div className="flex items-center gap-3">
                    <img
                      className="aspect-square h-12 w-12 rounded-full"
                      alt="Mei Tanaka"
                      src={post.user?.profileImage ? post.user?.profileImage : defaultProfileImage}
                    />
                    <div className="w-full">
                      <p className="font-medium text-sm">
                        {post.user?.firstName} {post.user?.lastName}
                        <span className="text-gray-500 text-xs font-normal">
                          &nbsp;&nbsp;&nbsp;
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="my-4 px-5 text-gray-800">
                  <p>{post.content}</p>
                </div>
                <div>
                  <img
                    src={post.image ? post.image : defaultProfileImage}
                    alt="image"
                    className="max-h-full w-full object-cover"
                  ></img>
                </div>
                <div className="flex justify-between px-5 py-2 text-gray-600 text-sm">
                  <div className="flex gap-1">
                    <span>124</span>
                    <span>likes</span>
                  </div>
                  <div className="flex gap-1">
                    <span>12</span>
                    <span>comments</span>
                  </div>
                </div>
                <hr className="text-gray-200 mx-auto w-[100%]"></hr>

                <div className="grid grid-cols-3 gap-4 text-gray-600 text-sm">
                  <div className="flex gap-1 p-3 justify-center hover:bg-gray-100 cursor-pointer">
                    <AiOutlineHeart className="h-5 w-5 text-gray-500" />
                    <span>likes</span>
                  </div>
                  <div className="flex gap-1 p-3 justify-center hover:bg-gray-100 cursor-pointer">
                    <FaRegComment className="h-5 w-5 text-gray-500" />
                    <span>comments</span>
                  </div>
                  <div className="flex gap-1 p-3 justify-center hover:bg-gray-100 cursor-pointer">
                    <RiShareLine className="h-5 w-5 text-gray-500" />
                    <span>share</span>
                  </div>
                </div>
              </div>
            </Fragment>
            )
          
          })}
        </section>
      </main>
    </>
  );
}
