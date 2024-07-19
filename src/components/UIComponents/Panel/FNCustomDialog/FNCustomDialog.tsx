import { FC, useState } from "react";
import { Dialog, DialogProps } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./FNCustomDialog.css";
import { Menu } from "primereact/menu";
import PersonalInformation from "../../../../pages/PersonalInformation/personalInformation";
import SideBar from "../../../../pages/Layout/SideBar/SideBar";
import { Sidebar } from "primereact/sidebar";
import FNButton from "../../Form/FNButton/FNButton";

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
  const sidebarContent = (
    <div className="p-4">
      <ul className="list-none p-0">
        {items.map((item, index) => (
          <li key={index} className="flex items-center py-2">
            <i className={`pi ${item.icon} mr-2`} />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  const [sidebarVisible, setSidebarVisible] = useState(true);
  return (
    <Dialog
      style={{ width: '80%', height: '80%' }}
      visible={visible}
      onHide={onHide}
      {...restProps}
      className={className}
    >
      <div className="grid h-screen">
        <div className="md:col-3 bg-clr">
          <Menu model={items} />
          

        </div>
        <div className="md:col-9">
        <Sidebar
          visible={sidebarVisible}
          onHide={() => setSidebarVisible(false)}
          className="md:w-1/4"
        >
          <Menu model={items} />
        </Sidebar>
        <FNButton icon="pi pi-arrow-right" onClick={() => setSidebarVisible(true)} label={""} />
          <div className=" flex flex-col">
          <PersonalInformation onNext={() => { /* handle next step */ }} />

          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default FNCustomDialog;
