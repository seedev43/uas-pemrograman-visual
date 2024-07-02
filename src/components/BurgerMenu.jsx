import { Navbar } from "flowbite-react";
import { UserDropdown } from "./UserDropdown";
import { HiMenu, HiOutlineDesktopComputer } from 'react-icons/hi';

export function BurgerMenu({ sidebarOpen, toggleSidebar }) {
    return (
        <Navbar fluid rounded className={`transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-64'} ${sidebarOpen ? 'md:ml-64' : 'md:ml-0'}`}>
            <button
                className="text-black"
                onClick={toggleSidebar}>
                <HiMenu size={24} />
            </button>
            <UserDropdown />
        </Navbar>
    )
}