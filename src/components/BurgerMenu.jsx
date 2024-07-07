import { Navbar } from "flowbite-react";
import { UserDropdown } from "./UserDropdown";
import { HiMenu, HiOutlineDesktopComputer } from 'react-icons/hi';

export function BurgerMenu({ sidebarOpen, toggleSidebar }) {
    return (
        <Navbar fluid className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${sidebarOpen ? 'ml-0' : 'ml-64'} ${sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
            <button
                className="text-black"
                onClick={toggleSidebar}>
                <HiMenu size={24} />
            </button>
            <UserDropdown />
        </Navbar>
    )
}