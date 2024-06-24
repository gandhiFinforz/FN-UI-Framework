import { useTranslation } from "react-i18next";
import React, { useEffect, useRef, useState } from "react";
import './Notification.css';

const Notification: React.FC = () => {
    const { t } = useTranslation();

    // Sample notification data
    const notifications = [
        { title: "New Message", content: "You have received a new message.", time: "10:00 AM", isRead: false },
        { title: "Reminder", content: "Don't forget to complete your tasks.", time: "Yesterday", isRead: true },
        { title: "Meeting Invitation", content: "You have been invited to a meeting.", time: "2 days ago", isRead: false }
    ];

    return (
        <ul className="notifications-list">
            {notifications.map((notification, index) => (
                <li key={index} className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}>
                    <h3>{notification.title}</h3>
                    <p>{notification.content}</p>
                    <span className="notification-time">{notification.time}</span>
                </li>
            ))}
        </ul>
    );
};

export default Notification;

