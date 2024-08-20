import React from 'react';

function NotificationCard({ module, time, content, deleteNotification }) {
    return (
        <article className="flex flex-wrap gap-4 items-center p-5 bg-white rounded-2xl shadow-md mb-8">
            <div className="flex flex-col w-full">
                <div className="flex flex-wrap gap-5 justify-between items-start w-full font-medium">
                    <h2 className="text-2xl text-indigo-600">{module}</h2>
                    <button className="flex gap-3.5 px-5 py-3 text-xs text-white bg-indigo-600 rounded-2xl" onClick={deleteNotification}>
                        <span>Mark as read</span>
                        <svg className="w-[13px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </button>
                </div>
                <div className="flex gap-2.5 mt-2.5 text-base text-black text-opacity-50">
                <svg className="w-[13px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
                    </svg>
                    <time>{time}</time>
                </div>
                <p className="mt-6 text-base text-black">
                    {content}
                </p>
            </div>
            <svg className="w-6 aspect-square cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={deleteNotification}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M9 6V4a2 2 0 012-2h2a2 2 0 012 2v2m4 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z"></path>
            </svg>
        </article>
    );
}

export default NotificationCard;