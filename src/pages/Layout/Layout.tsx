import React, { useState } from "react";
import Routing from "./Routing/Routing";
import SideBar from "./SideBar/SideBar";
import { BrowserRouter } from "react-router-dom";
import "./Layout.scss";
import { Header } from "./Header/Header";
const Layout: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  return (
    <>
      <Header
        sidebarVisible={sidebarVisible}
        setSidebarVisible={setSidebarVisible}
      />
      <BrowserRouter>
        <div className="flex bg-primary-50 h-screen overflow-y-auto">
          <SideBar sidebarVisible={sidebarVisible} />
          <Routing />
        </div>
      </BrowserRouter>
    </>
  );
};

export default Layout;
