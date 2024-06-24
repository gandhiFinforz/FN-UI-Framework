import { useTranslation } from "react-i18next";
import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, ElementStyles } from 'react-pro-sidebar';
import { Link } from "react-router-dom";

interface SideBarProps {
  toggled: boolean;
  collapsed: boolean;
}

const SideBar: React.FC<SideBarProps> = (props: SideBarProps) => {
  const { t } = useTranslation();

  const menuItems = [
    {
      label: 'Menu 1',
      icon: <i className="pi pi-briefcase text-cyan-600"></i>,
      items: [
        {
          label: 'Page 1',
          url: '/pageone1',
          icon: <i className="pi pi-chart-line text-cyan-600"></i>,
        },
        {
          label: 'Page 2',
          url: '/pageone2',
          icon: <i className="pi pi-cloud-download text-cyan-600"></i>,
        },
        {
          label: 'Page 3',
          url: '/pageone3',
          icon: <i className="pi pi-exclamation-triangle text-cyan-600"></i>,
        }
      ]
    },
    {
      label: 'Menu 2',
      icon: <i className="pi pi-shopping-cart text-cyan-600"></i>,
      items: [
        {
          label: 'Page 1',
          icon: <i className="pi pi-wrench text-cyan-600"></i>,
          url: '/pagetwo1',
        },
      ]
    },
    {
      label: 'Menu 3',
      icon: <i className="pi pi-video text-cyan-600"></i>,
      url: '/menu3',
    },
  ];

  const renderMenuItems = (items: any) => {
    return items.map((item: any, index: number) => {
      if (item.items) {
        return (
          <SubMenu key={index} label={item.label} icon={item.icon} rootStyles={{
            [`.ps-submenu-expand-icon`]: {
              color: 'var(--cyan-600) !important',
            },
          }}>
            {renderMenuItems(item.items)}
          </SubMenu> //t(item.label)
        );
      } else {
        return (
          <MenuItem key={index} component={<Link to={item.url} />} icon={item.icon}>{item.label}</MenuItem>  // t(item.label)
        );
      }
    });
  };

  return (
    <Sidebar collapsed={props.collapsed}>
      <Menu menuItemStyles={{
      button: ({ level, active, disabled }) => {
        // only apply styles on first level elements of the tree
        if (level === 0)
          return {
            color: disabled ? '#f5d9ff' : '#606060',
            backgroundColor: active ? '#eecef9' : undefined,
          };
      },
    }}>
        {renderMenuItems(menuItems)}
      </Menu>
    </Sidebar>
  );
};

export default SideBar;
