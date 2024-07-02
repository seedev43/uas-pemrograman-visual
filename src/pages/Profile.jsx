import { useRef, useState } from 'react';
import { Sidebar, Navbar, Card, Button, TextInput } from "flowbite-react"
import { HiMenu, HiOutlineDesktopComputer } from 'react-icons/hi';
import logo from '../assets/logo_white.svg'
import pictDashboard from '../assets/profile-img.png'
import { UserDropdown } from '../components/UserDropdown';
import { HomeIcon, TvIcon } from '@heroicons/react/16/solid';
import profilePicture from "../assets/profile.jpg"

import { SidebarComponent } from '../components/Sidebar';
import { BurgerMenu } from '../components/BurgerMenu';


export default function Profile() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);


    };

    const fileInputRef = useRef(null);

    const handleChooseFile = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('File yang dipilih:', file);
            // Di sini tambahkan logika untuk mengunggah file atau melakukan hal lain yang diinginkan
        }
    }


    return (
        <div className="flex">
            <SidebarComponent isSidebarOpen={isSidebarOpen} />

            {/* Main content area */}
            <div className="flex-1">
                <BurgerMenu sidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                {/* Main content */}
                <div className={`p-6 transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'} ml-0`}>
                    <h1 className="text-xl font-bold mb-10">PROFILE</h1>
                    <Card className="relative w-full h-96 bg-[#D4DBF9] shadow-none">
                        <div className="flex justify-between items-center h-full">
                            {/* Bagian kiri */}
                            <div className="absolute flex flex-col items-center left-10">
                                <span className="block mb-4">Foto Profil</span>
                                <img src={profilePicture} className="mb-6 border border-blue-800 rounded-3xl w-44 h-auto" alt="Profile" />
                                <label
                                    className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                                    onClick={handleChooseFile}
                                >
                                    Ganti Foto
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        className="hidden"
                                        onChange={handleFileChange}
                                        accept="image/*"
                                    />
                                </label>
                            </div>

                            <div className="absolute right-16">

                                {/* Bagian kanan */}
                                <form className="flex flex-col gap-4 w-full max-w-xs">
                                    <TextInput type="email" placeholder="Email" required />
                                    <TextInput type="text" placeholder="Username" required />
                                    <TextInput type="password" placeholder="Password" required />
                                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
                                        Simpan
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
