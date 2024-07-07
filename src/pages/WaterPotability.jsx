import { useState } from 'react';
import { Card, Button, Checkbox, Label, TextInput } from "flowbite-react"
import pictDashboard from '../assets/profile-img.png'
import profilePicture from "../assets/profile.jpg"

import { SidebarComponent } from '../components/Sidebar';
import { BurgerMenu } from '../components/BurgerMenu';


export default function WaterPotability() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <SidebarComponent isSidebarOpen={isSidebarOpen} />

            {/* Main content area */}
            <div className="flex-1">
                <BurgerMenu sidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                {/* Main content */}
                <div className={`mt-14 p-6 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'} ml-0`}>
                    <h1 className="text-xl font-bold mb-7">WATER POTABILITY CLASSIFICATION (KLASIFIKASI  KELAYAKAN AIR MINUM)</h1>
                    <Card className="relative w-full h-auto bg-white shadow-none border-none">
                        <span className="text-black font-bold">Klasifikasi Dataset Water Potability menggunakan algoritma Random Forest Classifier</span>
                        <Button className="bg-[#3C66FD] hover:!bg-[#2749c5] w-48">Generate random data</Button>
                        <form>
                            <div className="grid grid-cols-2 gap-1 w-full">
                                <div className="flex flex-col mb-4">
                                    <TextInput name="ph" type="number" step="0.001" min="0" max="1" placeholder="ph" required />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <TextInput name="hardness" type="number" step="0.001" min="0" max="1" placeholder="hardness" required />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <TextInput name="solids" type="number" step="0.001" min="0" max="1" placeholder="solids" required />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <TextInput name="chloramines" type="number" step="0.001" min="0" max="1" placeholder="chloramines" required />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <TextInput name="sulfate" type="number" step="0.001" min="0" max="1" placeholder="sulfate" required />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <TextInput name="conductivity" type="number" step="0.001" min="0" max="1" placeholder="conductivity" required />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <TextInput name="organic_carbon" type="number" step="0.001" min="0" max="1" placeholder="organic_carbon" required />
                                </div>
                                <div className="flex flex-col mb-4">
                                    <TextInput name="trihalomethanes" type="number" step="0.001" min="0" max="1" placeholder="trihalomethanes" required />
                                </div>
                            </div>
                            <TextInput name="trihalomethanes" type="number" step="0.001" min="0" max="1" placeholder="trihalomethanes" required />

                            <Button className="mt-4 w-full bg-[#3C66FD] hover:!bg-[#2749c5]" type="submit">Submit</Button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
}
