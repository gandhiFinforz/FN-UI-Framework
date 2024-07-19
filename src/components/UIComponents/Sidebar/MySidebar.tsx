import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";

import {
  HomeOutlined as HomeOutlinedIcon,
  CalendarTodayOutlined as CalendarTodayOutlinedIcon,
  ApartmentOutlined as ApartmentOutlinedIcon,
  BusinessOutlined as BusinessOutlinedIcon,
  PeopleOutlined as PeopleOutlinedIcon,
  AssignmentTurnedInOutlined as AssignmentTurnedInOutlinedIcon,
  AccountBalanceOutlined as AccountBalanceOutlinedIcon,
  ChatOutlined as ChatOutlinedIcon,
  NoteOutlined as NoteOutlinedIcon,
  FolderOutlined as FolderOutlinedIcon,
  AssessmentOutlined as AssessmentOutlinedIcon,
  NotificationsOutlined as NotificationsOutlinedIcon,
  PlayCircleOutlineOutlined as PlayCircleOutlineOutlinedIcon,
  HelpOutline as HelpOutlineIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./style.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// Define menu configuration
const menuItems = [
  {
    title: "Overview",
    icon: <HomeOutlinedIcon className="iconSVG" />,
    link: "#",
  },
  {
    title: "Calendar",
    icon: <CalendarTodayOutlinedIcon className="iconSVG" />,
    subItems: [
      { title: "Today Event", link: "#" },
      { title: "All Event", link: "#" },
    ],
  },
  {
    title: "Rentals",
    icon: <ApartmentOutlinedIcon className="iconSVG" />,
    subItems: [
      { title: "Posts", link: "#" },
      { title: "Web Design", link: "#" },
      { title: "Login Form", link: "#" },
      { title: "Card Design", link: "#" },
    ],
  },
  {
    title: "Leasing",
    icon: <BusinessOutlinedIcon className="iconSVG" />,
    link: "#",
  },
  {
    title: "Peoples",
    icon: <PeopleOutlinedIcon className="iconSVG" />,
    link: "#",
  },
  {
    title: "Tasks & Maintenance",
    icon: <AssignmentTurnedInOutlinedIcon className="iconSVG" />,
    link: "#",
  },
  {
    title: "Accounting",
    icon: <AccountBalanceOutlinedIcon className="iconSVG" />,
    link: "#",
  },
  {
    title: "Communication",
    icon: <ChatOutlinedIcon className="iconSVG" />,
    link: "#",
  },
  {
    title: "Notes",
    icon: <NoteOutlinedIcon className="iconSVG" />,
    link: "#",
  },
  {
    title: "Files",
    icon: <FolderOutlinedIcon className="iconSVG" />,
    link: "#",
  },
  {
    title: "Reports",
    icon: <AssessmentOutlinedIcon className="iconSVG" />,
    link: "#",
  },
  {
    title: "Notifications",
    icon: <NotificationsOutlinedIcon className="iconSVG" />,
    link: "#",
  },
  {
    title: "Get Started",
    icon: <PlayCircleOutlineOutlinedIcon className="iconSVG" />,
    link: "#",
  },
  {
    title: "Get Help",
    icon: <HelpOutlineIcon className="iconSVG" />,
    link: "#",
  },
  {
    title: "Setting",
    icon: <SettingsOutlinedIcon className="iconSVG" />,
    link: "#",
  },
];

const MySidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);
  const [showCollapseIcon, setShowCollapseIcon] = useState(true);

  const handleMenuToggle = (menu: string) => {
    setCurrentMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [activeItem, setActiveItem] = useState<string | null>(null);
  const handleItemClick = (title: string) => {
    console.log(title)
    setActiveItem(title);
  };

  return (
    <div>
      {isSidebarOpen && (
        <KeyboardArrowLeftIcon
          onClick={toggleSidebar}
          style={{
            zIndex: 9999,
            top: "80px",
            fontSize: "var(--icon-size)",
            background: "var(--sidebar-toggle-icon-color)",
            left: "208px",
            borderRadius: "50%",
            cursor: "pointer",
            position: "absolute",
          }}
        />
      )}

      {!isSidebarOpen && (
        <KeyboardArrowRightIcon
          onClick={toggleSidebar}
          style={{
            zIndex: 9999,
            top: "80px",
            fontSize: "var(--icon-size)",
            background: "var(--sidebar-toggle-icon-color)",
            left: "68px",
            borderRadius: "50%",
            cursor: "pointer",
            position: "absolute",
          }}
        />
      )}

      <div className={`sidebar ${isSidebarOpen ? "open" : "close"}`}>
        {!isSidebarOpen && (
          <button
            style={{
              margin: "30px 7% 20px 7%",
              width: "86%",
              color: "var(--sidebar-button-text-color)",
              backgroundColor: "var(--yellow-color)",
              padding: "var(--button-padding)",
              borderRadius: "var(--button-border-radius)",
              border: "none",
              fontWeight: "var(--button-font-weight)",
            }}
          >
            <AddIcon style={{ fontSize: "28px" }} />
          </button>
        )}
        {isSidebarOpen && (
          <button
            style={{
              display: "flex",
              margin: "30px 5% 20px 5%",
              alignItems: "center",
              width: "90%",
              textAlign: "center",
              justifyContent: "center",
              color: "#fff",
              backgroundColor:" rgb(215 154 0)",
              padding: "6px", borderRadius:'3px',
              border: "none",
              fontWeight: 600,
            }}
          >
            <AddIcon style={{ marginRight: "8px" }} />
            Create New
          </button>
        )}

        <ul className="nav-links">
          {menuItems.map((item, index) => (
            <li key={index} className={`parent-li ${activeItem === item.title ? "active" : ""}`}
            onClick={() => handleItemClick(item.title)} style={{ marginBottom: item.title === "Reports" ? "20px" : "0" }}>
              {item.subItems ? (
                <div
                  className="iocn-link"
                  onClick={() => handleMenuToggle(item.title)}
                >
                  <a href="#">
                    {item.icon}
                    <span className="link_name">{item.title}</span>
                  </a>
                  <IconButton className="link-btn">
                    {currentMenu === item.title ? (
                      <KeyboardArrowDownIcon className="iconSVG" style={{fontSize: '16px'}} />
                    ) : (
                      <KeyboardArrowRightIcon className="iconSVG" style={{fontSize: '16px'}} />
                    )}
                  </IconButton>
                </div>
              ) : (
                <a href={item.link}>
                  {item.icon}
                  <span className="link_name">{item.title}</span>
                </a>
              )}
              {item.subItems && (
                <ul
                  className={`sub-menu ${currentMenu === item.title ? "show" : ""}`}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href={subItem.link}>{subItem.title}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MySidebar;
