import { useState } from 'react';

import { SidebarComponent } from '../components/Sidebar';
import { BurgerMenu } from '../components/BurgerMenu';

export default function Layout({ children }) {
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
                    {children}
                </div>
            </div>
        </div>
    );
}


