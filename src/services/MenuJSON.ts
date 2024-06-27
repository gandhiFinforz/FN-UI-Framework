interface MenuItem {
  label?: string;
  icon?: string;
  url?: string;
  access: string[];
  items?: MenuItem[];
}

interface Menu {
  separator?: boolean;
  label?: string;
  icon?: string;
  url?: string;
  access?: string[];
  items?: MenuItem[];
}

const menuJson: Menu[] = [
  {
    label: "Dashboard",
    icon: "pi pi-home",
    url: "/dashboard",
    access: ["admin"],
  },
  {
    label: "Data",
    icon: "pi pi-database",
    access: ["user"],
    items: [
      {
        label: "Table",
        icon: "pi pi-table",
        url: "/data/table",
        access: ["user"],
      },
    ],
  },
  {
    label: "Form",
    icon: "pi pi-receipt",
    access: ["admin"],
    items: [
      {
        label: "Components",
        icon: "pi pi-microchip",
        url: "/form/components",
        access: ["user"],
      },
    ],
  },
  {
    separator: true,
  },
  {
    label: "Share",
    icon: "pi pi-share-alt",
    access: ["admin"],
    items: [
      {
        label: "Slack",
        icon: "pi pi-slack",
        access: ["admin"],
      },
      {
        label: "Whatsapp",
        icon: "pi pi-whatsapp",
        access: ["admin"],
      },
    ],
  },
];

function filterMenuByAccess(menu: Menu[], role: string): Menu[] {
  return menu
    .filter((item) => item.access?.includes(role) || item.separator)
    .map((item) => {
      if (item.items) {
        return {
          ...item,
          items: filterMenuByAccess(item.items, role),
        };
      }
      return item;
    });
}

// Example usage
const userRole = "admin";
export const filteredMenu = filterMenuByAccess(menuJson, userRole);