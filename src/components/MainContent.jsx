import React, { useState } from 'react';

import NotificationCard from './NotificationCard';

function MainContent() {
    
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            module: "Gymkhana Module",
            time: "2 weeks, 5 days ago",
            content: "Code Rumble event by The Programming Club will be organised on 8th September -by RISHI GODRE...",
        },
        {
            id: 2,
            module: "Gymkhana Module",
            time: "1 weeks, 2 days ago",
            content: "Code Rumble event by The Programming Club will be organised on 8th September -by RISHI GODRE..."
        },
        {
            id: 3,
            module: "Gymkhana Module",
            time: "3 days ago",
            content: "Code Rumble event by The Programming Club will be organised on 8th September -by RISHI GODRE..."
        },
        {
            id: 4,
            module: "Gymkhana Module",
            time: "2 days ago",
            content: "Code Rumble event by The Programming Club will be organised on 8th September -by RISHI GODRE..."
        },
        {
            id: 5,
            module: "Gymkhana Module",
            time: "1 day ago",
            content: "Code Rumble event by The Programming Club will be organised on 8th September -by RISHI GODRE..."
        }
    ]);
    const deleteNotification = (key) =>{
        const updatedNotifications = notifications.filter(notification => notification.id!==key);
        console.log(notifications);
        setNotifications(updatedNotifications);
    }
    return (
        <section className="flex flex-col w-full px-5 max-md:px-0 max-md:w-full mt-5 md:mt-10">
            <div className="flex flex-col w-full mt-5 max-md:mt-10">
                {notifications.map((notification) => (
                    <NotificationCard key={notification.id} deleteNotification={() => deleteNotification(notification.id)} {...notification} />
                ))}
            </div>
        </section>
    );
}

export default MainContent;