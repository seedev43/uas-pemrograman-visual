import { Card } from 'flowbite-react';
import pictDashboard from '../assets/profile-img.png'
import { HiArrowRight } from 'react-icons/hi'
import profilePicture from "../assets/profile.jpg"

import moment from 'moment-timezone';
import 'moment/locale/id';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';


export default function Dashboard() {
    document.title = "Dashboard"


    moment.locale('id');

    // Get current date in Asia/Jakarta timezone
    const currentDate = moment().tz("Asia/Jakarta").format('D MMMM YYYY');


    return (
        <Layout>
            <h1 className="text-xl font-bold mb-7">DASHBOARD</h1>
            {/* <div className="flex"> */}
            <div className="w-full h-auto bg-white rounded-lg overflow-hidden drop-shadow">
                <div className="h-auto bg-[#D4DBF9] flex flex-col">
                    <span className="p-5 text-gray-700">Welcome !</span>
                    <img src={pictDashboard} className="w-60 md:w-96 self-end" />
                </div>
                <div className="pl-8 pr-8 flex flex-wrap justify-between -mt-8 mb-8">
                    <div className="flex flex-col">
                        <img src={profilePicture} className="w-16 h-auto border-2 border-blue-800 rounded-full mb-2" />
                        <span className="text-black">Ngademin</span>
                        <p className="text-gray-500 font-light">Creator</p>
                    </div>
                    <div className="flex flex-col mt-10">
                        <span className="text-black">{currentDate}</span>
                        <Link to="/profile">
                            <button className="mt-6 flex items-center bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600">
                                View Profile <HiArrowRight className="ml-2" />
                            </button>
                        </Link>
                    </div>
                    <div className="flex flex-col mt-10">
                        <span className="text-black">Tetap semangat jangan menyerah</span>
                        <span className="text-gray-500">Quotes of the day</span>
                    </div>

                </div>
            </div>
            {/* </div> */}

        </Layout>

    );
}
