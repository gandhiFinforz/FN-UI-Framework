import { useTranslation } from "react-i18next";
import React, { useRef } from "react";
import FNCard from "../../../components/Panel/FNCard/FNCard";
import { Divider } from "primereact/divider";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { OverlayPanel } from "primereact/overlaypanel";

const Notification: React.FC = () => {
  const { t } = useTranslation();

  const notificationPanel: any = useRef(null);
  // Sample notification data
  const notifications = [
    {
      title: "New Message",
      content: "You have received a new message.",
      time: "10:00 AM",
      isRead: false,
    },
    {
      title: "Reminder",
      content: "Don't forget to complete your tasks.",
      time: "Yesterday",
      isRead: true,
    },
    {
      title: "Meeting Invitation",
      content: "You have been invited to a meeting.",
      time: "2 days ago",
      isRead: false,
    },
  ];

  return (
    <>
      <Avatar
        icon="pi pi-bell"
        shape="circle"
        className="primary-50 p-overlay-badge"
        onClick={(e) => notificationPanel.current.toggle(e)}
      >
        <Badge value={notifications.length} size={"normal"} />
      </Avatar>
      <OverlayPanel ref={notificationPanel}>
        {notifications.map((notification, index) => (
          <div
            key={index}
            className={`mb-2 p-2 bg-primary-50 border-round ${notification.isRead ? "read" : "unread"}`}
          >
            <div className="flex justify-content-between pb-2 border-bottom-1 border-primary-100">
              <h6 className="m-0 text-sm">{notification.title} </h6>
              <span className="text-xs">{notification.time}</span>
            </div>
            <p className="m-0 pt-2 text-sm">{notification.content}</p>
          </div>
        ))}
      </OverlayPanel>
    </>
  );
};

export default Notification;
