import { useTranslation } from "react-i18next";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "primereact/button";
import "./Layout.css";  // Ensure you have a CSS file for additional styling if needed
import Routing from "./Routing/Routing";
import { RootState } from "../../store/store";
import { logout } from "../../store/authSlice";
import { Menu } from "primereact/menu";
import { Avatar } from "primereact/avatar";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import { OverlayPanel } from "primereact/overlaypanel";
import SideBar from "./SideBar/SideBar";
import Notification from "./Notification/Notification";
import { BrowserRouter } from "react-router-dom";

const Layout: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const user = useSelector((state: RootState) => state.auth.user);
  const sidebarElementRef: any = useRef(null);
  const notificationPanel: any = useRef(null);
  const userPanel: any = useRef(null);

  useEffect(() => {
    sidebarElementRef.current = document.getElementById('sidebarContainer');
  }, []);

  function logoutUser() {
    dispatch(logout());
  }

  const handleMenuHide = (event: any) => {
    if (event && event.item.label === "Logout") {
      logoutUser();
    }
  };

  const userDetails = [
    {
      label: user ? user.idToken.payload.email : "Guest",
      items: [
        {
          label: t("loginPage.changpassword"),
          icon: 'pi pi-user-edit'
        },
        {
          label: t("loginPage.logout"),
          icon: 'pi pi-sign-out',
          command: handleMenuHide
        }
      ]
    }];

  const start = <div className="flex align-items-center gap-4 mx-4">
    <Button
      icon="pi pi-bars"
      onClick={() => setSidebarVisible(!sidebarVisible)}
      className="p-button-text p-button-plain"
    />
    <span className="text-cyan-500 text-xl font-bold">FN-UI</span>
  </div>
  const end = (
    <div className="flex align-items-center gap-2 mx-4">
      <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
      <Avatar icon="pi pi-bell" shape="circle" className="notification-icon" onClick={(e) => notificationPanel.current.toggle(e)} />
      <OverlayPanel ref={notificationPanel}>
        <Notification />
      </OverlayPanel>
      <Avatar icon="pi pi-user" shape="circle" className="user-icon" onClick={(e) => userPanel.current.toggle(e)} />
      <OverlayPanel className="user-panel" ref={userPanel}>
        <Menu model={userDetails} />
      </OverlayPanel>
    </div>
  );

  return (
    <div id="app_layout">
      <header>
        <Menubar start={start} end={end} />
      </header>
      <div className="main-container">
        <BrowserRouter>
          <SideBar toggled={sidebarVisible} collapsed={sidebarVisible} />
          <main>
            <Routing />
          </main>
        </BrowserRouter>
      </div>
      <footer></footer>
    </div>
  );
};

export default Layout;
