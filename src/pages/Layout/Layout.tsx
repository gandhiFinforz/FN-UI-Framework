import React, { useState } from "react";
import Routing from "./Routing/Routing";
import SideBar from "./SideBar/SideBar";
import { BrowserRouter, Outlet } from "react-router-dom";
import "./Layout.scss";
import { Header } from "./Header/Header";
  import MySidebar from "../../components/UIComponents/Sidebar/MySidebar";
const Layout: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <>
      {/* <Header
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      /> */}

      <div className="flex bg-primary-50 h-screen overflow-y-auto">
        {/* <SideBar sidebarVisible={sidebarVisible} /> */}
        <MySidebar />
        <div className="w-full mt-3 ml-2 px-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
