import { FC, useState } from "react";
import { Dialog, DialogProps } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./FNCustomDialog.css";
import { Menu } from "primereact/menu";

export interface FNCustomDialogProps extends Omit<DialogProps, "visible" | "onHide"> {
  visible: boolean;
  onHide: () => void;
  className?: string;
}

const defaultTabs = [
  {
    header: "Tab 1",
    content: <p>Content for Tab 1</p>,
  },
  {
    header: "Tab 2",
    content: <p>Content for Tab 2</p>,
  },
  {
    header: "Tab 3",
    content: <p>Content for Tab 3</p>,
  },
];

const items = [
  {
    template: () => {
      return (
        <span className="inline-flex align-items-center gap-1 px-2 py-2">
          <i className="pi pi-user-plus mr-2 icon-bg"></i>
          <span className="font-medium text-xl font-semibold">
            New User
          </span>
        </span>
      );
    }
  },
  {
    separator: true
  },
  {
    label: 'Personal Info',
    icon: 'pi pi-palette',
  },
  {
    label: 'Contact Info',
    icon: 'pi pi-link',
  },
  {
    label: 'Address',
    icon: 'pi pi-home',
  },
  {
    label: 'Bank Account',
    icon: 'pi pi-home',
  },
];

const FNCustomDialog: FC<FNCustomDialogProps> = ({
  visible,
  onHide,
  className,
  ...restProps
}) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <Dialog
      style={{ width: '80%', height: '80%' }}
      visible={visible}
      onHide={onHide}
      {...restProps}
    >
      <div className="grid">
        <div className="md:col-3 bg-clr h-screen">
          <Menu model={items} />
        </div>
        <div className="md:col-9">
          <h2>Personal Information Add</h2>
          
        </div>
      </div>
    </Dialog>
  );
};

export default FNCustomDialog;
