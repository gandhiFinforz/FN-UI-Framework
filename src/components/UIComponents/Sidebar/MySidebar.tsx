import React, { useState } from "react";
import { Link } from "react-router-dom";
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./Style.css";

import OrgLogoFull from "../../../assets/img/FF-logo.png";
import OrgLogoSymbol from "../../../assets/img/FF-logoSymbol.png";
const menuItems = [
  {
    title: "Overview",
    icon: <HomeOutlinedIcon className="iconSVG" />,
    link: "/dashboard",
  },
  {
    title: "Calendar",
    icon: <CalendarTodayOutlinedIcon className="iconSVG" />,
    subItems: [
      { title: "Today Event", link: "/today-event" },
      { title: "All Event", link: "/all-events" },
    ],
  },
  {
    title: "Rentals",
    icon: <ApartmentOutlinedIcon className="iconSVG" />,
    subItems: [
      { title: "Posts", link: "/posts" },
      { title: "Web Design", link: "/web-design" },
      { title: "Login Form", link: "/login-form" },
      { title: "Card Design", link: "/card-design" },
    ],
  },
  {
    title: "Leasing",
    icon: <BusinessOutlinedIcon className="iconSVG" />,
    link: "/leasing",
  },
  {
    title: "Peoples",
    icon: <PeopleOutlinedIcon className="iconSVG" />,
    link: "/peoples",
  },
  {
    title: "Tasks & Maintenance",
    icon: <AssignmentTurnedInOutlinedIcon className="iconSVG" />,
    link: "/tasks-maintenance",
  },
  {
    title: "Accounting",
    icon: <AccountBalanceOutlinedIcon className="iconSVG" />,
    link: "/accounting",
  },
  {
    title: "Communication",
    icon: <ChatOutlinedIcon className="iconSVG" />,
    link: "/communication",
  },
  {
    title: "Notes",
    icon: <NoteOutlinedIcon className="iconSVG" />,
    link: "/notes",
  },
  {
    title: "Files",
    icon: <FolderOutlinedIcon className="iconSVG" />,
    link: "/files",
  },
  {
    title: "Reports",
    icon: <AssessmentOutlinedIcon className="iconSVG" />,
    link: "/reports",
  },
  {
    title: "Notifications",
    icon: <NotificationsOutlinedIcon className="iconSVG" />,
    link: "/notifications",
  },
  {
    title: "Get Started",
    icon: <PlayCircleOutlineOutlinedIcon className="iconSVG" />,
    link: "/get-started",
  },
  {
    title: "Get Help",
    icon: <HelpOutlineIcon className="iconSVG" />,
    link: "/get-help",
  },
  {
    title: "Setting",
    icon: <SettingsOutlinedIcon className="iconSVG" />,
    link: "/settings",
  },
];

const MySidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentMenu, setCurrentMenu] = useState<string | null>(null);
  const [showCollapseIcon, setShowCollapseIcon] = useState(true);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleMenuToggle = (menu: string) => {
    setCurrentMenu((prevMenu) => (prevMenu === menu ? null : menu));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (title: string) => {
    setActiveItem(title);
  };

  return (
    <div>
      {isSidebarOpen ? (
        <KeyboardArrowLeftIcon onClick={toggleSidebar} className="arrow-left" />
      ) : (
        <KeyboardArrowRightIcon
          onClick={toggleSidebar}
          className="arrow-right"
        />
      )}

      <div className={`sidebar ${isSidebarOpen ? "open" : "close"}`}>
        <div className="org-logo-container">
        {isSidebarOpen && <img src={OrgLogoFull} className="org-logo" alt="Organization Logo" /> }
        {!isSidebarOpen && <img src={OrgLogoSymbol} className="org-logo-collapsed" alt="Organization Logo" /> }

        </div>

        {!isSidebarOpen && (
          <button className="button-collapsed">
            <AddIcon className="add-icon" />
          </button>
        )}
        {isSidebarOpen && (
          <button className="button-expanded">
            <AddIcon className="create-new-icon" />
            Create New
          </button>
        )}

        <ul className="nav-links">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`parent-li ${activeItem === item.title ? "active" : ""}`}
              onClick={() => handleItemClick(item.title)}
              style={{ marginBottom: item.title === "Reports" ? "25px" : "0" }}
            >
              {item.subItems ? (
                <div
                  className="iocn-link"
                  onClick={() => handleMenuToggle(item.title)}
                >
                  <Link to="">
                    {item.icon}
                    <span className="link_name">{item.title}</span>
                  </Link>
                  <IconButton className="link-btn">
                    {currentMenu === item.title ? (
                      <KeyboardArrowDownIcon
                        className="iconSVG"
                        style={{ fontSize: "16px" }}
                      />
                    ) : (
                      <KeyboardArrowRightIcon
                        className="iconSVG"
                        style={{ fontSize: "16px" }}
                      />
                    )}
                  </IconButton>
                </div>
              ) : (
                <Link to={item.link}>
                  {item.icon}
                  <span className="link_name">{item.title}</span>
                </Link>
              )}
              {item.subItems && (
                <ul
                  className={`sub-menu ${currentMenu === item.title ? "show" : ""}`}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.link}>{subItem.title}</Link>
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
