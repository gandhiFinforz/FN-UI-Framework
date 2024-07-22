import { FC, useState } from "react";
import { Dialog, DialogProps } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./FNCustomDialog.css";
import { Menu } from "primereact/menu";
import PersonalInformation from "../../../../pages/PersonalInformation/personalInformation";
import { Sidebar } from "primereact/sidebar";
import FNButton from "../../Form/FNButton/FNButton";
import { t } from "i18next";
import ContactInformation from "../../../../pages/ContactInformation/contactInformation";
import { IonCol, IonRow } from "@ionic/react";
import { MenuItem } from "primereact/menuitem";
import Address from "../../../../pages/Address/address";

export interface FNCustomDialogProps
  extends Omit<DialogProps, "visible" | "onHide"> {
  visible: boolean;
  onHide: () => void;
  className?: string;
}

const FNCustomDialog: FC<FNCustomDialogProps> = ({
  visible,
  onHide,
  className,
  ...restProps
}) => {
  const [currentPage, setCurrentPage] = useState("Personal Information"); // State variable for current page
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const items: MenuItem[] = [
    {
      template: () => {
        return (
          <span className="inline-flex align-items-center gap-1">
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
      command: () => setCurrentPage('Personal Information'),
      className: currentPage === 'Personal Information' ? 'p-focus' : '' // Add active class if current page
    },
    {
      label: 'Contact Info',
      icon: 'pi pi-link',
      command: () => setCurrentPage('Contact Information'),
      className: currentPage === 'Contact Information' ? 'p-focus' : '' // Add active class if current page
    },
    {
      label: 'Address',
      icon: 'pi pi-home',
      command: () => setCurrentPage('Address'),
      className: currentPage === 'Address' ? 'p-focus' : '' // Add active class if current page
    },
    {
      label: 'Bank Account',
      icon: 'pi pi-home',
      command: () => setCurrentPage('Bank Account'),
      className: currentPage === 'Bank Account' ? 'p-focus' : '' // Add active class if current page
    },
  ];
  // Function to render the content based on the current page
  const renderContent = () => {
    switch (currentPage) {
      case "Personal Information":
        return (
          <PersonalInformation
            onNext={() => {
              /* handle next step */
            }}
          />
        );
      case "Contact Information":
        return (
          <ContactInformation
            onNext={() => {
              /* handle next step */
            }}
          />
        );
        case "Address":
        return (
          <Address
            onNext={() => {
              /* handle next step */
            }}
          />
        );
      default:
        return (
          <PersonalInformation
            onNext={() => {
              /* handle next step */
            }}
          />
        );
    }
  };

  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      {...restProps}
      className={className}
    >
      <IonRow className="h-full">
        <IonCol className="md:col-3 bg-clr h-full md:block hidden">
          <Menu model={items} />
        </IonCol>
        <IonCol className="md:col-9">
          <Sidebar
            visible={sidebarVisible}
            onHide={() => setSidebarVisible(false)}
            className="md:w-1/4"
          >
            <Menu model={items} />
          </Sidebar>
          <div className="flex items-center justify-content-between">
            <FNButton
              className="md:hidden p-2"
              icon="pi pi-fw pi-bars layout-menuitem-icon"
              onClick={() => setSidebarVisible(true)}
              label=""
            />
            <div className="p-2">
              <span className="p-header">{currentPage}</span>
            </div>
            <div className="mt-2">
              <i
                className="pi pi-times-circle close-icon cursor-pointer"
                onClick={onHide}
              ></i>
            </div>
          </div>
          {renderContent()}
        </IonCol>
      </IonRow>
    </Dialog>
  );
};

export default FNCustomDialog;
