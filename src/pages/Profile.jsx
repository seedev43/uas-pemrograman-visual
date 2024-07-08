import { useRef } from 'react';
import { Card, Button, TextInput } from "flowbite-react"
import profilePicture from "../assets/profile.jpg"

import Layout from '../components/Layout';


export default function Profile() {
    document.title = "Profile Page"

    const fileInputRef = useRef(null);

    const handleChooseFile = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            console.log('File yang dipilih:', file);
        }
    }


    return (
        <Layout>
            <h1 className="text-xl font-bold mb-7">PROFILE</h1>
            <Card className="relative w-full h-96 bg-[#D4DBF9] shadow-none">
                <div className="flex justify-between items-center h-full">
                    {/* Bagian kiri */}
                    <div className="absolute flex flex-col items-center left-10">
                        <span className="block mb-4">Foto Profil</span>
                        <img src={profilePicture} className="mb-6 border border-blue-800 rounded-3xl w-44 h-auto" alt="Profile" />
                        <label
                            className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                            onClick={handleChooseFile}>
                            Ganti Foto
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleFileChange}
                                accept="image/*" />
                        </label>
                    </div>

                    <div className="absolute right-16">

                        {/* Bagian kanan */}
                        <form className="flex flex-col gap-4 w-full max-w-xs">
                            <TextInput type="email" placeholder="Email" required />
                            <TextInput type="text" placeholder="Username" required />
                            <TextInput type="password" placeholder="Password" required />
                            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">
                                Update Profile
                            </Button>
                        </form>
                    </div>
                </div>
            </Card>
        </Layout>

    );
}
