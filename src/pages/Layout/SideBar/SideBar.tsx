import React from "react";
import { TieredMenu } from "primereact/tieredmenu";

interface SideBarProps {
  sidebarVisible: boolean;
}

const SideBar: React.FC<SideBarProps> = ({ sidebarVisible }) => {
  const items = [
    {
      label: "Dashboard",
      icon: "pi pi-home",
      url: "/dashboard"
    },
    {
      label: "data",
      icon: "pi pi-database",
      items: [
        {
          label: "Table",
          icon: "pi pi-table",
          url: "/data/table"
        },
      ],
    },
    {
      label: "Form",
      icon: "pi pi-receipt",
      items: [
        {
          label: "Components",
          icon: "pi pi-microchip",
          url: "/form/components"
        },
      ],
    },
    {
      separator: true,
    },
    {
      label: "Share",
      icon: "pi pi-share-alt",
      items: [
        {
          label: "Slack",
          icon: "pi pi-slack",
        },
        {
          label: "Whatsapp",
          icon: "pi pi-whatsapp",
        },
      ],
    },
  ];

  return (
    <div
      className={`fn-menu h-screen ${sidebarVisible ? "m-collapse" : "m-expand"}`}
    >
      <TieredMenu model={items} breakpoint="0px" />
    </div>
  );
};

export default SideBar;
