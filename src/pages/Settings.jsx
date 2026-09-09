import { FiUser } from "react-icons/fi";
import { LuShield } from "react-icons/lu";
import { RiNotification4Line } from "react-icons/ri";
import { IoKeyOutline } from "react-icons/io5";



export default function Settings(){

    return(
        <>
                 {/* Main content of Setting Page */}
                 <div>
                  <h1 className="text-2xl font-bold">Settings</h1>
                  <p className="text-gray-600">Manage your Account, Privacy and Prefences. </p>

                  <div className="flex flex-col gap-5 mt-6">
                    {/* div 1 */}
                    <div className="px-6 py-5 bg-white shadow-md border border-gray-200 rounded-2xl">
                        <div className="flex items-center gap-3">
                        <div className="bg-blue-100 rounded-xl w-8 h-8 flex justify-center items-center"><FiUser className="text-blue-600"/></div>
                        <div className="font-medium">Account</div>
                        </div>
                        <div className="mt-4">
                            <form className="space-y-4">
                            <div className="flex items-center gap-4">
                            <label htmlFor="email" className="w-40 text-gray-500 text-sm font-medium">
                               Email
                            </label>
                            <input
                             id="email"
                             type="email"
                             placeholder="alex@connectpro.app"
                             className="border px-4 py-2 text-sm flex-1 rounded-xl border-gray-200 shadow-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600"/>
                             </div>

                             <div className="flex items-center gap-4">
                             <label htmlFor="phone" className="w-40 text-gray-500 text-sm font-medium">
                             Phone
                             </label>
                             <input
                             id="phone"
                             type="tel"
                             placeholder="+1 (415) 555-0144"
                             className="border px-4 py-2 text-sm flex-1 rounded-xl border-gray-200 shadow-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600"/>
                             </div>
                            </form>
                        </div>    
                    </div>

                    {/* div 2 */}
                     <div className="px-6 py-5 bg-white shadow-md border border-gray-200 rounded-2xl">
                        <div className="flex items-center gap-3">
                        <div className="bg-blue-100 rounded-xl w-8 h-8 flex justify-center items-center"><FiUser className="text-blue-600"/></div>
                        <div className="font-medium">Profile</div>
                        </div>
                        <div className="mt-4">
                            <form className="space-y-4">
                            <div className="flex items-center gap-4">
                            <label htmlFor="name" className="w-40 text-gray-500 text-sm font-medium">
                               Display name
                            </label>
                            <input
                             id="name"
                             type="Text"
                             placeholder="Alex Morgan"
                             className="border px-4 py-2 text-sm flex-1 rounded-xl border-gray-200 shadow-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600"/>
                             </div>

                             <div className="flex items-center gap-4">
                             <label htmlFor="phone" className="w-40 text-gray-500 text-sm font-medium">
                             Headline
                             </label>
                             <input
                             id="phone"
                             type="text"
                             placeholder="Senior Product Designer"
                             className="border px-4 py-2 text-sm text-gray-800 flex-1 rounded-xl border-gray-200 shadow-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600"/>
                             </div>
                            </form>
                        </div>    
                    </div>

                    {/* div 3 */}
                    <div className="px-6 py-5 bg-white shadow-md border border-gray-200 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 rounded-xl w-8 h-8 flex justify-center items-center"><LuShield className="text-blue-600"/></div>
                        <div className="font-medium">Privacy</div>
                        </div> 

                        <div className="flex items-start justify-between gap-4 my-5">
                            <div>
                                <div className="text-sm font-medium text-gray-700">Public profile</div>
                                <div className="text-xs text-gray-500">Allow anyone to view your profile.</div>
                            </div>
                               <button>...
                               </button>
                        </div>
                        <hr className="text-gray-300"></hr>

                        <div className="flex items-start justify-between gap-4 my-5">
                            <div>
                                <div className="text-sm font-medium text-gray-700">Show activity</div>
                                <div className="text-xs text-gray-500">Let connections see when you're active.</div>
                                </div>
                                <button>...</button>
                        </div>
                        
                        <hr className="text-gray-300"></hr>

                        <div className="flex items-start justify-between gap-4 my-5">
                            <div>
                                <div className="text-sm font-medium text-gray-700">Discoverable by email</div>
                                <div className="text-xs text-gray-500">Allow people to find you by email.</div>
                                </div>
                                <button>...</button>
                        </div>
                       </div>

                       {/* div 4 */}
                       <div className="px-6 py-5 bg-white shadow-md border border-gray-200 rounded-2xl">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 rounded-xl w-8 h-8 flex justify-center items-center"><RiNotification4Line className="text-blue-600"/></div>
                        <div className="font-medium">Notifications</div>
                        </div> 

                        <div className="flex items-start justify-between gap-4 my-5">
                            <div>
                                <div className="text-sm font-medium text-gray-700">Connection requests</div>
                                <div className="text-xs text-gray-500">Email me about new requests.</div>
                            </div>
                               <button>...
                               </button>
                        </div>
                        <hr className="text-gray-300"></hr>

                        <div className="flex items-start justify-between gap-4 my-5">
                            <div>
                                <div className="text-sm font-medium text-gray-700">Likes & comments</div>
                                <div className="text-xs text-gray-500">Get notified about engagement.</div>
                                </div>
                                <button>...</button>
                        </div>
                        
                        <hr className="text-gray-300"></hr>

                        <div className="flex items-start justify-between gap-4 my-5">
                            <div>
                                <div className="text-sm font-medium text-gray-700">Weekly digest</div>
                                <div className="text-xs text-gray-500">A summary every Monday morning.</div>
                                </div>
                                <button>...</button>
                        </div>
                       </div>

                       {/* div 5 */}

                        <div className="px-6 py-5 bg-white shadow-md border border-gray-200 rounded-2xl">
                        <div className="flex items-center gap-3">
                        <div className="bg-blue-100 rounded-xl w-8 h-8 flex justify-center items-center"><IoKeyOutline className="text-blue-600"/></div>
                        <div className="font-medium">Change password</div>
                        </div>
                        <div className="mt-4">
                            <form className="space-y-4">
                            <div className="flex items-center gap-4">
                            <label htmlFor="currentpass" className="w-40 text-gray-500 text-sm font-medium">
                               Current
                            </label>
                            <input
                             id="currentpass"
                             type="password"
                             className="border px-4 py-2 text-sm flex-1 rounded-xl border-gray-200 shadow-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600"/>
                             </div>

                             <div className="flex items-center gap-4">
                             <label htmlFor="newpass" className="w-40 text-gray-500 text-sm font-medium">
                             New
                             </label>
                             <input
                             id="newpass"
                             type="password"
                             className="border px-4 py-2 text-sm flex-1 rounded-xl border-gray-200 shadow-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600"/>
                             </div>

                              <div className="flex items-center gap-4">
                             <label htmlFor="confirmpass" className="w-40 text-gray-500 text-sm font-medium">
                             Confirm
                             </label>
                             <input
                             id="confirmpass"
                             type="password"
                             className="border px-4 py-2 text-sm flex-1 rounded-xl border-gray-200 shadow-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-600"/>
                             </div>

                             <div className="flex justify-end pt-2">
                                <button className="h-10 w-45 bg-blue-600 hover:bg-blue-500 text-white text-center p-2 rounded-full flex items-center justify-center text-sm font-medium">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock mr-1.5 h-4 w-4" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                    Update password
                                    </button>
                            </div>
                            </form>
                        </div>    
                    </div>

                        
                        



                </div>
                </div>
                     
        </>
    )
}