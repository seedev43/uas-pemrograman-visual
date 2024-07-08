import { Sidebar } from "flowbite-react"
import { HiMenu, HiOutlineDesktopComputer } from 'react-icons/hi';
import logo from '../assets/logo_white.svg'
import { HomeIcon, TvIcon } from '@heroicons/react/16/solid';
import { Link } from "react-router-dom";

export function SidebarComponent({ isSidebarOpen }) {
    return (
        <div className={`fixed top-0 left-0 h-full transition-transform duration-300 transform ${isSidebarOpen ? '-translate-x-full' : 'translate-x-0'} ${isSidebarOpen ? 'lg:translate-x-0' : 'lg:-translate-x-full'} z-20`}>
            <Sidebar className="w-64 h-full [&>div]:bg-[#333C59] [&>div]:text-white [&>div]:rounded-none">
                <div className="p-5 flex justify-center mb-10">
                    <img src={logo} alt="logo" className="w-32 h-auto" />
                </div>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <span className="text-sm text-white px-2">Menu</span>
                        <Link to="/dashboard">
                            <Sidebar.Item className="text-white hover:text-[#333C59]" icon={HomeIcon}>
                                Dashboard
                            </Sidebar.Item>
                        </Link>

                        <Link to="/water-potability">
                            <Sidebar.Item className="text-white hover:text-[#333C59]" icon={HiOutlineDesktopComputer}>
                                Water Potability
                            </Sidebar.Item>
                        </Link>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    )
}
