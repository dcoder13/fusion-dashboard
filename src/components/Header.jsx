import React from 'react';

function Header() {
    return (
        <header className="sticky top-0  flex flex-col w-full text-xs font-medium text-white whitespace-nowrap min-h-[30%] max-md:max-w-full bg-gray-800 z-10">
            <img loading="lazy" src="./image.png" alt="" className="object-cover absolute inset-0 size-full" />
            <div className="flex relative flex-wrap gap-5 justify-between items-start px-8 pt-2.5 pb-64 w-full max-md:px-5 max-md:pb-24 max-md:max-w-full">
                <nav className="flex gap-9">
                    <div className="flex gap-3 items-center">
                        <svg className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="2" y="2" width="8" height="8" fill="transparent" stroke="white" />
                            <rect x="14" y="2" width="8" height="8" fill="transparent" stroke="white" />
                            <rect x="2" y="14" width="8" height="8" fill="transparent" stroke="white" />
                            <rect x="14" y="14" width="8" height="8" fill="transparent" stroke="white" />
                        </svg>
                        <div className="self-stretch my-auto">Dashboard</div>
                        <div className="self-stretch px-1.5 my-auto text-center bg-red-600 rounded-full h-[19px] w-[19px]">
                            11
                        </div>
                        <svg className="object-contain shrink-0 self-stretch my-auto aspect-[0.5] w-[30px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        <svg className="object-contain shrink-0 self-stretch my-auto aspect-[0.5] w-[30px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </nav>
                <nav className="flex gap-2.5">
                    <div className="flex gap-10 self-start px-5 py-3.5 text-black bg-white rounded-3xl justify-center items-center">
                        <div>Student</div>
                        <svg className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                    <svg className="object-contain shrink-0 self-start w-px aspect-[0.03]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1 24" stroke="currentColor">
                        <line x1="0.5" y1="0" x2="0.5" y2="24" strokeWidth="0.5" />
                    </svg>
                    <svg className="object-contain self-center w-[25px] aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <div className="my-auto">Divyansh</div>
                    <svg className="object-contain shrink-0 self-start w-px aspect-[0.03]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1 24" stroke="currentColor">
                        <line x1="0.5" y1="0" x2="0.5" y2="24" strokeWidth="0.5" />
                    </svg>
                    <svg className="object-contain shrink-0 my-auto aspect-square w-[20px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
                    </svg>
                    <div className="my-auto">Logout</div>
                </nav>
            </div>
        </header>
    );
}

export default Header;