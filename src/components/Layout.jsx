import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ModuleSidebar from './ModuleSidebar';
import MainContent from './MainContent';

function Layout() {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-white relative">
            <Header />
            <div className="flex flex-col items-center w-full px-4 pt-2 text-xs text-center bg-stone-50 shadow-md max-md:px-2 z-10">
                <nav className="flex gap-10 w-full max-w-[399px]">
                    <div className="flex flex-col items-center flex-1 text-indigo-600">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/913fc6572acd11cc37741514d6f3c13b0464950163b9a7a6084346d66351052c?placeholderIfAbsent=true&apiKey=f71064b691a54b588fcdc7721dde43a4" alt="" className="object-contain w-6 aspect-square" />
                        <div>Notifications</div>
                        <div className="flex self-stretch mt-2 bg-indigo-600 h-[3px]" />
                    </div>
                    <div className="flex flex-col flex-1 text-black">
                        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e4a5d0e6f44786d06c14c6271cf7ea6b45df5a7d587afe9c1b3e42bbf3f15c3?placeholderIfAbsent=true&apiKey=f71064b691a54b588fcdc7721dde43a4" alt="" className="object-contain w-6 aspect-square self-center" />
                        <div className="mt-1.5">Announcements</div>
                    </div>
                </nav>
            </div>
            <div className="flex flex-1 overflow-hidden z-50 relative">
                <div className="sticky h-screen overflow-y-auto w-[33%] flex justify-center z-50">
                    <Sidebar />
                </div>
                <main className="flex-1 overflow-y-auto w-[33%] z-20"> 
                    <MainContent />
                </main>
                <div className="sticky h-screen overflow-y-auto w-[33%] flex justify-center">
                    <ModuleSidebar />
                </div>
            </div>
        </div>
    );
}

export default Layout;