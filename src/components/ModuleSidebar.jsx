import React from 'react';

function ModulesSidebar() {
    const svgClass = "object-contain shrink-0 self-start mt-3.5 aspect-[2] w-[24px] h-[24px]";

    const AcademicsSvg = (
        <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M5 10V7a2 2 0 012-2h10a2 2 0 012 2v3M5 10v10m14-10v10M9 21h6M9 21v-6m6 6v-6" />
        </svg>
    );

    const MessManagementSvg = (
        <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
    );

    const ProgrammeCurriculumSvg = (
        <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12l9-5-9-5-9 5 9 5z" />
        </svg>
    );

    const VisitorsHostelSvg = (
        <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2M5 7v10m14-10v10M9 21h6M9 21v-6m6 6v-6" />
        </svg>
    );

    const HealthcareCenterSvg = (
        <svg className={svgClass} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
        </svg>
    );

    const modules = [
        { name: "Academics", icon: AcademicsSvg },
        { name: "Mess management", icon: MessManagementSvg },
        { name: "Programme and Curriculum", icon: ProgrammeCurriculumSvg },
        { name: "Visitor's Hostel", icon: VisitorsHostelSvg },
        { name: "Healthcare Center", icon: HealthcareCenterSvg },
        { name: "Scholarship Portal", icon: HealthcareCenterSvg },
        { name: "Complaint System", icon: HealthcareCenterSvg },
        { name: "Placement Cell", icon: HealthcareCenterSvg },
        { name: "Department Portal", icon: HealthcareCenterSvg },
        { name: "Gymkhana", icon: HealthcareCenterSvg },
        { name: "Hostel Management", icon: HealthcareCenterSvg },
        { name: "Other Academic Procedure", icon: HealthcareCenterSvg },
    ];

    return (
        <aside className="flex flex-col h-[80%] max-md:w-full top-0 z-50 sticky overflow-hidden mt-10 ">
            <div className="flex flex-col px-10 py-6 mx-auto  w-full text-base text-black rounded-3xl border border-solid bg-stone-50 border-slate-300 max-md:mt-10 overflow-hidden max-h-[60%]">
                <div className="flex gap-5 justify-between text-2xl whitespace-nowrap py-5">
                    <h2>Modules</h2>
                    <svg className="object-contain shrink-0 self-start mt-3.5 aspect-[2] w-[30px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className="flex flex-col overflow-y-auto max-h-[calc(100vh-200px)] mt-4">
                    {modules.map((module, index) => (
                        <div key={index} className="flex gap-6 px-20 py-6 mt-3 whitespace-nowrap bg-white rounded-2xl border border-solid border-slate-300">
                            {module.icon}
                            <div className="grow shrink my-auto w-[145px]">{module.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
}

export default ModulesSidebar;