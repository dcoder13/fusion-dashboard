import React, { useState } from 'react';

function Sidebar() {
    const [activeSection, setActiveSection] = useState('Profile');

    const sections = [
        { name: 'Profile' },
        { name: 'Skills Technologies' },
        { name: 'Education Courses' },
        { name: 'Work Experience' },
        { name: 'Achievements' },
    ];

    const setActive = (sectionName) => {
        setActiveSection(sectionName);
    };

    return (
        <aside className="flex flex-col w-[50%] max-md:w-full top-0 -mt-64 z-50 relative">
            <div className="flex flex-col text-base text-black lg:mt-8">
                <div className="flex flex-col px-8 pt-8 pb-4 w-full bg-white rounded-3xl shadow-2xl max-md:px-6 ">
                    <svg className="object-contain self-center w-[60%] aspect-square" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <div className="flex gap-2 self-center mt-4 text-xs text-center text-indigo-600 whitespace-nowrap">
                        <svg className="w-4 aspect-[1.27]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="purple">
                            <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 2.18L18.09 7 12 9.82 5.91 7 12 4.18zM11 12.5v6.5h2v-6.5l-1-.45-1 .45z" />
                        </svg>
                        <div>Student</div>
                    </div>
                    <div className="flex gap-3 self-center mt-2 text-2xl text-center">
                        Divyansh Bisht
                    </div>
                    <div className="self-center mt-2 text-center text-black text-opacity-50">
                        22BCS085
                    </div>
                    <div className="mt-4 h-px border border-indigo-600" />
                    <div className="self-start mt-3">B.Tech 2022</div>
                    <div className="self-start mt-3">Branch - CSE</div>
                    <div className="self-start mt-3">Sem 5</div>
                    <div className="self-start mt-10 text-xs text-black text-opacity-50">
                        22bcs085@iiitdmj.ac.in
                    </div>
                </div>
                <div className="flex flex-col pb-6 mt-4 lg:mt-9 w-full rounded-3xl border p-4 shadow-md">
                    {sections.map(section => (
                        section.name === activeSection ?
                            <button key={section.name} className="flex gap-5 justify-between items-center px-5 py-4 text-white bg-indigo-600 rounded-3xl max-md:mx-4" onClick={() => setActive(section.name)}>
                                <div>{section.name}</div>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                            :
                            <button key={section.name} className="flex gap-5 justify-between items-center   py-3 mx-8  max-md:mx-4" onClick={() => setActive(section.name)}>
                                <div>{section.name}</div>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                            </button>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;