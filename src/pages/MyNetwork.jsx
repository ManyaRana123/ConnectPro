import { NavLink } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function MyNetwork() {

     return(
       <>
         {/* main content of my network */}
            <div>
              {/* Heading */}
              <h1 className="text-2xl font-bold">My Network</h1>
              <p className="text-gray-600">Manage requests and grow your professional circle.</p>

              {/* Search */}
                      <form className="focus-within:ring-2 focus-within:ring-blue-600 my-6 rounded-full">
                       <div className="flex items-center gap-2 w-full h-9 pl-3 bg-white rounded-full shadow-md">
                       <FaMagnifyingGlass className="text-gray-500"/>
                       <input type="search"  placeholder="Search people, posts, companies..." className="w-full px-1 py-2 text-sm font-semibold text-gray-900 bg-transparent outline-none" />
                       </div>
                      </form>

                    {/* connection suggestion, recieved ,sent, connections */}

                    <div className="grid grid-cols-4  gap-1 bg-[#EBF1F7] rounded-full inline-flex text-gray-600 font-medium text-sm p-1">
                      <div className="hover:bg-white hover:text-black rounded-full  px-4 py-1 ">Suggestions</div>
                    
                      <div className="hover:bg-white hover:text-black rounded-full  px-4 py-1 ">Received</div>
                       
                      <div className="hover:bg-white hover:text-black rounded-full  px-4 py-1 ">Sent(1)</div>
                    
                      <div className="hover:bg-white hover:text-black rounded-full  px-4 py-1 ">Connections</div>
                      
                    </div>




                    {/* connectionssssssssssssssssssssssssssssssssssssssssssssssssss */}
                  <div className="grid grid-cols-2 gap-5 mt-5">
                       {/* div 1 */}
                    <div className="bg-white shadow-sm border border-gray-200 pb-5 rounded-2xl">
                        <div className="h-16 w-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-t-2xl"></div>
                         <img className="aspect-square h-17 w-17 -mt-7 flex justify-center mx-auto border border-4 border-white rounded-full" alt="Priya Sharma" src="https://i.pravatar.cc/120?img=47"></img>
                         <div className="w-full flex flex-col text-center mx-auto">
                                            <p className="font-medium text-md ">Priya Sharma</p>
                                            <p className="text-sm text-gray-600 ">Frontend Engineer at Vercel</p> 
                                            <p className="text-xs text-gray-600 pt-2">12 mutual connections</p>
                           </div>
                           <button className="bg-[#F5FAFF] text-gray-800 font-medium border border-gray-200 border-2 w-[90%] mx-auto block flex items-center justify-center gap-3 px-4 py-1 rounded-full mt-3 hover:bg-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                            Connect</button>
                    </div>
                        {/* div 2 */}
                        <div className="bg-white shadow-sm border border-gray-200 pb-5 rounded-2xl">
                        <div className="h-16 w-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-t-2xl"></div>
                         <img className="aspect-square h-17 w-17 -mt-7 flex justify-center mx-auto border border-4 border-white rounded-full" alt="Priya Sharma" src="https://i.pravatar.cc/120?img=47"></img>
                         <div className="w-full flex flex-col text-center mx-auto">
                                            <p className="font-medium text-md ">Priya Sharma</p>
                                            <p className="text-sm text-gray-600 ">Frontend Engineer at Vercel</p> 
                                            <p className="text-xs text-gray-600 pt-2">12 mutual connections</p>
                           </div>
                           <button className="bg-[#F5FAFF] text-gray-800 font-medium border border-gray-200 border-2 w-[90%] mx-auto block flex items-center justify-center gap-3 px-4 py-1 rounded-full mt-3 hover:bg-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                            Connect</button>
                     </div>
                     {/* div 3 */}
                     <div className="bg-white shadow-sm border border-gray-200 pb-5 rounded-2xl">
                        <div className="h-16 w-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-t-2xl"></div>
                         <img className="aspect-square h-17 w-17 -mt-7 flex justify-center mx-auto border border-4 border-white rounded-full" alt="Priya Sharma" src="https://i.pravatar.cc/120?img=47"></img>
                         <div className="w-full flex flex-col text-center mx-auto">
                                            <p className="font-medium text-md ">Priya Sharma</p>
                                            <p className="text-sm text-gray-600 ">Frontend Engineer at Vercel</p> 
                                            <p className="text-xs text-gray-600 pt-2">12 mutual connections</p>
                           </div>
                           <button className="bg-[#F5FAFF] text-gray-800 font-medium border border-gray-200 border-2 w-[90%] mx-auto block flex items-center justify-center gap-3 px-4 py-1 rounded-full mt-3 hover:bg-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                            Connect</button>
                       </div>
                       {/* div 4 */}
                       <div className="bg-white shadow-sm border border-gray-200 pb-5 rounded-2xl">
                        <div className="h-16 w-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-t-2xl"></div>
                         <img className="aspect-square h-17 w-17 -mt-7 flex justify-center mx-auto border border-4 border-white rounded-full" alt="Priya Sharma" src="https://i.pravatar.cc/120?img=47"></img>
                         <div className="w-full flex flex-col text-center mx-auto">
                                            <p className="font-medium text-md ">Priya Sharma</p>
                                            <p className="text-sm text-gray-600 ">Frontend Engineer at Vercel</p> 
                                            <p className="text-xs text-gray-600 pt-2">12 mutual connections</p>
                           </div>
                           <button className="bg-[#F5FAFF] text-gray-800 font-medium border border-gray-200 border-2 w-[90%] mx-auto block flex items-center justify-center gap-3 px-4 py-1 rounded-full mt-3 hover:bg-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                            Connect</button>
                        </div>
                        {/* div 5 */}
                        <div className="bg-white shadow-sm border border-gray-200 pb-5 rounded-2xl">
                        <div className="h-16 w-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-t-2xl"></div>
                         <img className="aspect-square h-17 w-17 -mt-7 flex justify-center mx-auto border border-4 border-white rounded-full" alt="Priya Sharma" src="https://i.pravatar.cc/120?img=47"></img>
                         <div className="w-full flex flex-col text-center mx-auto">
                                            <p className="font-medium text-md ">Priya Sharma</p>
                                            <p className="text-sm text-gray-600 ">Frontend Engineer at Vercel</p> 
                                            <p className="text-xs text-gray-600 pt-2">12 mutual connections</p>
                           </div>
                           <button className="bg-[#F5FAFF] text-gray-800 font-medium border border-gray-200 border-2 w-[90%] mx-auto block flex items-center justify-center gap-3 px-4 py-1 rounded-full mt-3 hover:bg-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                            Connect</button>
                        </div>

                        {/* div 6 */}
                        <div className="bg-white shadow-sm border border-gray-200 pb-5 rounded-2xl">
                        <div className="h-16 w-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-t-2xl"></div>
                         <img className="aspect-square h-17 w-17 -mt-7 flex justify-center mx-auto border border-4 border-white rounded-full" alt="Priya Sharma" src="https://i.pravatar.cc/120?img=47"></img>
                         <div className="w-full flex flex-col text-center mx-auto">
                                            <p className="font-medium text-md ">Priya Sharma</p>
                                            <p className="text-sm text-gray-600 ">Frontend Engineer at Vercel</p> 
                                            <p className="text-xs text-gray-600 pt-2">12 mutual connections</p>
                           </div>
                           <button className="bg-[#F5FAFF] text-gray-800 font-medium border border-gray-200 border-2 w-[90%] mx-auto block flex items-center justify-center gap-3 px-4 py-1 rounded-full mt-3 hover:bg-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                            Connect</button>
                        </div>

                        {/* div 7 */}
                        <div className="bg-white shadow-sm border border-gray-200 pb-5 rounded-2xl">
                        <div className="h-16 w-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-t-2xl"></div>
                         <img className="aspect-square h-17 w-17 -mt-7 flex justify-center mx-auto border border-4 border-white rounded-full" alt="Priya Sharma" src="https://i.pravatar.cc/120?img=47"></img>
                         <div className="w-full flex flex-col text-center mx-auto">
                                            <p className="font-medium text-md ">Priya Sharma</p>
                                            <p className="text-sm text-gray-600 ">Frontend Engineer at Vercel</p> 
                                            <p className="text-xs text-gray-600 pt-2">12 mutual connections</p>
                           </div>
                           <button className="bg-[#F5FAFF] text-gray-800 font-medium border border-gray-200 border-2 w-[90%] mx-auto block flex items-center justify-center gap-3 px-4 py-1 rounded-full mt-3 hover:bg-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                            Connect</button>
                        </div>

                        {/* div 8 */}
                        <div className="bg-white shadow-sm border border-gray-200 pb-5 rounded-2xl">
                        <div className="h-16 w-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-t-2xl"></div>
                         <img className="aspect-square h-17 w-17 -mt-7 flex justify-center mx-auto border border-4 border-white rounded-full" alt="Priya Sharma" src="https://i.pravatar.cc/120?img=47"></img>
                         <div className="w-full flex flex-col text-center mx-auto">
                                            <p className="font-medium text-md ">Priya Sharma</p>
                                            <p className="text-sm text-gray-600 ">Frontend Engineer at Vercel</p> 
                                            <p className="text-xs text-gray-600 pt-2">12 mutual connections</p>
                           </div>
                           <button className="bg-[#F5FAFF] text-gray-800 font-medium border border-gray-200 border-2 w-[90%] mx-auto block flex items-center justify-center gap-3 px-4 py-1 rounded-full mt-3 hover:bg-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus mr-1.5 h-4 w-4" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
                            Connect</button>
                         </div>

                 </div>
             </div>
         </>
       )
      }
