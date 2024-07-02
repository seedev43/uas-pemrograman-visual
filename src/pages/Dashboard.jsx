import { useState } from 'react';
import { Sidebar, Navbar, Card } from "flowbite-react"
import { HiMenu, HiOutlineDesktopComputer } from 'react-icons/hi';
import logo from '../assets/logo_white.svg'
import pictDashboard from '../assets/profile-img.png'
import { HiArrowRight } from 'react-icons/hi'
import profilePicture from "../assets/profile.jpg"

import moment from 'moment-timezone';
import 'moment/locale/id'; // Import locale Indonesia
import { SidebarComponent } from '../components/Sidebar';
import { BurgerMenu } from '../components/BurgerMenu';
import { Link } from 'react-router-dom';


export default function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    moment.locale('id');

    // Get current date in Asia/Jakarta timezone
    const currentDate = moment().tz("Asia/Jakarta").format('D MMMM YYYY');


    return (
        <div className="flex">
            <SidebarComponent isSidebarOpen={isSidebarOpen} />

            {/* Main content area */}
            <div className="flex-1">
                <BurgerMenu sidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                {/* Main content */}
                <div className={`p-6 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'} ml-0`}>
                    <h1 className="text-xl font-bold mb-10">DASHBOARD</h1>
                    <Card className="relative w-full h-96 bg-[#D4DBF9] shadow-none">
                        <p className="text-gray-700 dark:text-gray-400 font-normal mt-0 mb-auto">Welcome!</p>
                        <img src={pictDashboard} className="absolute w-72 h-auto right-0 top-16" />
                        <div className="absolute bottom-0 left-0 right-0 bg-white h-32 z-0"></div>
                        <div className="absolute bottom-10 left-10 md:left-28 flex flex-col items-center">
                            <img src={profilePicture} className="w-16 h-auto border-2 border-blue-800 rounded-full mb-2" />
                            <span className="text-black">Ngademin</span>
                            <p className="text-black font-light">Creator</p>
                        </div>

                        <div className="absolute bottom-12 left-[35%] md:left-[40%] flex flex-col items-center md:items-center">
                            <span className="text-black">{currentDate}</span>
                            <Link to="/profile">
                                <button className="mt-2 flex items-center bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                                    View Profile <HiArrowRight className="ml-2" />
                                </button>
                            </Link>
                        </div>
                        <span className="absolute text-black bottom-[5.5rem] left-[58%] md:left-[70%]">Tetap semangat jangan menyerah</span>

                    </Card>
                </div>
            </div>
        </div>
    );
}
