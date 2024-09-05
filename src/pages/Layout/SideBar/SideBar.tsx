import React, { useState } from "react";
import { TieredMenu } from "primereact/tieredmenu";
import { filteredMenu } from "../../../services/MenuJSON";
import '../../../Variables.css'
interface SideBarProps {
  sidebarVisible: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ sidebarVisible }) => {
  const [item, setItem] = useState(filteredMenu);
  return (
    <div 
      className={`fn-menu h-screen ${sidebarVisible ? "m-collapse" : "m-expand"}`}
    >
      <TieredMenu model={item} breakpoint="0px" />
    </div>
  );
};

export default SideBar;
