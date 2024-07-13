import { useState } from 'react';

import { SidebarComponent } from '../components/Sidebar';
import { Header } from './Header';

export default function Layout({ children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header sidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <SidebarComponent isSidebarOpen={isSidebarOpen} />

            {/* <div className=""> */}

            {/* Main content */}
            <div className={`pt-20 p-6 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'} ml-0`}>
                {children}
            </div>
            {/* </div> */}
        </div>
    );
}


