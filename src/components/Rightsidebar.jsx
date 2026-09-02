export default function Rightsidebar() {

       return(
              <aside className="sticky top-20 self-start">
                                <div className="flex flex-col gap-3 bg-white shadow-sm border border-gray-200 p-4 rounded-2xl">
                                    <p className="text-md font-medium">People you may know</p>
                                    {/* connect cards */}
                                    <div className="flex items-center justify-evenly">
                                        <img className="aspect-square h-10 w-10 rounded-full" alt="Priya Sharma" src="https://i.pravatar.cc/120?img=47"></img>
                                        <div className="w-[120px]">
                                            <p className="font-medium text-sm">Priya Sharma</p>
                                            <p className="truncate text-xs text-gray-600">Frontend Engineer at Vercel</p>
                                        </div>
                                        <button className="w-20 h-8 flex items-center justify-center rounded-full text-xs border border-gray-300 font-medium text-gray-800 bg-[#F5FAFF] hover:bg-green-500 hover:text-white">
                                            Connect
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-evenly">
                                            <img className="aspect-square h-10 w-10 rounded-full" alt="Daniel Okafor" src="https://i.pravatar.cc/120?img=33" />
                                            <div className="w-[120px]">
                                                <p className="font-medium text-sm   ">Daniel Okafor</p>
                                                <p className="truncate text-xs text-gray-600">Engineering Manager at Notion</p>
                                            </div>
                                             <button className="w-20 h-8 flex items-center justify-center rounded-full text-xs border border-gray-300 font-medium text-gray-800 bg-[#F5FAFF] hover:bg-green-500 hover:text-white">
                                            Connect
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-evenly">
                                        <img className="aspect-square h-10 w-10 rounded-full" alt="Mei Tanaka" src="https://i.pravatar.cc/120?img=49" />
                                        <div className="w-[120px]">
                                            <p className="font-medium text-sm">Mei Tanaka</p>
                                            <p className="truncate text-xs text-gray-600">Product Manager · Ex-Google</p>
                                        </div>
                                         <button className="w-20 h-8 flex items-center justify-center rounded-full text-xs border border-gray-300 font-medium text-gray-800 bg-[#F5FAFF] hover:bg-green-500 hover:text-white">
                                            Connect
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-evenly">
                                        <img className="aspect-square h-10 w-10 rounded-full" alt="Lucas Romero" src="https://i.pravatar.cc/120?img=15" />
                                        <div className="w-[120px]">
                                            <p className="font-medium text-sm">Lucas Romero</p>
                                            <p className="truncate text-xs text-gray-600">Founder & CEO at Driftly.co</p>
                                        </div>
                                         <button className="w-20 h-8 flex items-center justify-center rounded-full text-xs border border-gray-300 font-medium text-gray-800 bg-[#F5FAFF] hover:bg-green-500 hover:text-white">
                                            Connect
                                        </button>
                                    </div>
                                </div>
                                {/* Trending Topics */}
                                <div className="flex flex-col gap-3 bg-white shadow-sm border border-gray-200 p-4 rounded-2xl mt-4">
                                    <p className="font-medium text-sm text-gray-800">Trending Topics</p>
                                    <ul className="flex flex-col gap-2">
                                        <li>
                                            <p className="hover:text-blue-500 cursor-pointer text-gray-600 text-sm ">#DesignSystems</p>
                                        </li>
                                        <li>
                                            <p className="hover:text-blue-500 cursor-pointer text-gray-600 text-sm ">#RemoteWork</p>
                                        </li>
                                        <li>
                                            <p className="hover:text-blue-500 cursor-pointer text-gray-600 text-sm ">#AIProductivity</p>
                                        </li>
                                        <li>
                                            <p className="hover:text-blue-500 cursor-pointer text-gray-600 text-sm ">#Startups</p>
                                        </li>
                                    </ul>
                                </div>
                             </aside>
       )
}